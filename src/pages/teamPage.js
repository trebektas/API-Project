'use strict';

import { MAIN_CONTENT_ID, FETCH_NBA_TEAMS } from '../constants.js';
import { createTeamsContentElement } from '../views/teamView.js';

export function teamsData() {
    const mainContent = document.getElementById(MAIN_CONTENT_ID);
    mainContent.innerHTML = '';

    const teamsContent = createTeamsContentElement();
    mainContent.appendChild(teamsContent);

    async function getTeams() {   
        const response = await fetch(FETCH_NBA_TEAMS);
        const requestData = await response.json();
        const teamsData = requestData.data;
        teamsData.forEach(team => {
            // const teamDetails = createTeamDetails();
            const teamDetails = document.createElement('section');
            teamDetails.classList.add('team-section');
            teamDetails.innerHTML = String.raw`
                <img src="../../public/teamLogos/${team.id}.svg" alt="Team Logo" class="team-logo">
                <div class="team-texts">
                    <h3 class="team-name">${team.full_name}</h3>
                    <h5 class="team-conference">${team.conference}</h5>
                    <h5 class="team-division">${team.division}</h5>
                </div>
            `;
            const divAllTeams = document.getElementById('all-teams-details');
            divAllTeams.appendChild(teamDetails);
            
        });
    }

    getTeams();

}


