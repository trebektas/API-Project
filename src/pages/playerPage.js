'use strict';

import { MAIN_CONTENT_ID, FETCH_NBA_TEAMS ,FETCH_NBA_PLAYERS } from '../constants.js';
import { createPlayersFilterBar, createPlayersTableHeader } from '../views/playerView.js';
import { getFetchData } from './teamPage.js';

export async function playersData() {
    const mainContent = document.getElementById(MAIN_CONTENT_ID);
    mainContent.innerHTML = '';

    const playersContent = createPlayersFilterBar();
    mainContent.appendChild(playersContent);

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
        }
    }

    function renderOptions() {
        const selectElement = document.getElementById('select-team');
        responseTeams.data.forEach(team => {
            const optionElement = document.createElement('option');
            selectElement.appendChild(optionElement);
            optionElement.textContent = team.full_name;
            optionElement.value = team.id;
            optionElement.id = team.id;
        });
        
        const buttonElement = document.getElementById('select-button');
        buttonElement.addEventListener('click', () => {
            const selectedTeamId = selectElement.options[selectElement.selectedIndex].value;
            const playersDiv = document.getElementById('players-div');
            playersDiv.innerHTML = '';
            const playersTableHeader = createPlayersTableHeader();
            const playersBlock = document.getElementById('all-players-block');
            playersBlock.appendChild(playersTableHeader);
            getPlayersList(selectedTeamId);
        });
    }

    function getPlayersList(teamId){
        const filteredPlayers = allPlayersDataArray.filter(player => player.team.id == teamId && player.position!=="");
        filteredPlayers.forEach(player => {
                        if(player.team.id == teamId && player.position!==""){
                            const playersBody = document.getElementById('table-body')
                            const playerDetails = document.createElement('tr');
                            playersBody.appendChild(playerDetails);
                            playerDetails.classList.add('player-details');
                            playerDetails.id = 'player-details';
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