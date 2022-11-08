'use strict';

import { MAIN_CONTENT_ID, FETCH_NBA_TEAMS ,FETCH_NBA_PLAYERS, ALL_PLAYERS_BLOCK, SELECT_TEAM, SELECT_BUTTON, PLAYERS_DIV, TABLE_BODY } from '../constants.js';
import { createPlayersFilterBar, createPlayersTableHeader } from '../views/playerView.js';
import { getFetchData } from './teamPage.js';
import { displayLoading, hideLoading } from '../views/loadingView.js';
import { displayMainContent, hideMainContent } from '../views/playerView.js';

export async function playersData() {
    const mainContent = document.getElementById(MAIN_CONTENT_ID);
    mainContent.innerHTML = '';

    const playersContent = createPlayersFilterBar();
    mainContent.appendChild(playersContent);

    displayLoading();
    hideMainContent();
    const responseTeams = await getFetchData(FETCH_NBA_TEAMS);
    const responsePlayers = await getFetchData(FETCH_NBA_PLAYERS);

    let allPlayersDataArray = [];
    for (let index = 1; index <= responsePlayers.meta.total_pages; index++) {
        try {
            const responsePlayersPage = await getFetchData(FETCH_NBA_PLAYERS+`&page=${index}`);
            const responsePlayersData = await responsePlayersPage.data;
            allPlayersDataArray = [...allPlayersDataArray, ...responsePlayersData];
        } catch (error) {
            console.log(error);
            alert(`` + error);
        }
    }

    hideLoading();
    displayMainContent();
    function renderOptions() {
        const selectElement = document.getElementById(SELECT_TEAM);
        responseTeams.data.forEach(team => {
            const optionElement = document.createElement('option');
            selectElement.appendChild(optionElement);
            optionElement.textContent = team.full_name;
            optionElement.value = team.id;
            optionElement.id = team.id;
        });
        
        const buttonElement = document.getElementById(SELECT_BUTTON);
        buttonElement.addEventListener('click', () => {
            const selectedTeamId = selectElement.options[selectElement.selectedIndex].value;
            const playersDiv = document.getElementById(PLAYERS_DIV);
            playersDiv.innerHTML = '';
            const playersTableHeader = createPlayersTableHeader();
            const playersBlock = document.getElementById(ALL_PLAYERS_BLOCK);
            playersBlock.appendChild(playersTableHeader);
            getPlayersList(selectedTeamId);
        });
    }

    function getPlayersList(teamId){
        const filteredPlayers = allPlayersDataArray.filter(player => player.team.id == teamId && player.position!=="");
        filteredPlayers.forEach(player => {
                        if(player.team.id == teamId && player.position!==""){
                            const playersBody = document.getElementById(TABLE_BODY)
                            const playerDetails = document.createElement('tr');
                            playersBody.appendChild(playerDetails);
                            playerDetails.classList.add('player-details');
                            playerDetails.innerHTML = String.raw`
                            <td>${player.first_name}</td>
                            <td>${player.last_name}</td>
                            <td>${player.position}</td>
                            <td>${player.team.full_name}</td>
                            <td>${player.team.conference}</td>
                            `;
                        } 
                    });
    }

    renderOptions();
}