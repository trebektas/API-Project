'use strict';

import { MAIN_CONTENT_ID, FETCH_NBA_TEAMS, ALL_TEAMS_DETAILS } from '../constants.js';
import { createTeamsContentElement } from '../views/teamView.js';

export function teamsData() {
    const mainContent = document.getElementById(MAIN_CONTENT_ID);
    mainContent.innerHTML = '';

    const teamsContent = createTeamsContentElement();
    mainContent.appendChild(teamsContent);

    renderTeams();
}

export async function getFetchData(url) {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log(error);
        alert(error);
    }
}  

async function renderTeams() {   
    const responseData = await getFetchData(FETCH_NBA_TEAMS);
    responseData.data.forEach(team => {
        const teamDetails = document.createElement('section');
        teamDetails.classList.add('team-section');
        teamDetails.innerHTML = String.raw`
            <img src="./public/teamLogos/${team.id}.svg" alt="Team Logo" class="team-logo">
            <div">
                <h3 class="team-name">${team.full_name}</h3>
                <h5 class="team-conference">Conference: ${team.conference}</h5>
                <h5 class="team-division">Division: ${team.division}</h5>
            </div>
        `;

        const divAllTeams = document.getElementById(ALL_TEAMS_DETAILS);
        divAllTeams.appendChild(teamDetails);
    });
}