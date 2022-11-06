'use strict';

import { MAIN_CONTENT_ID, FETCH_NBA_TEAMS } from '../constants.js';
import { createTeamsContentElement, createTeamDetails } from '../views/teamView.js';

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
            const teamDetails = createTeamDetails();
            const divAllTeams = document.getElementById('all-teams-details');
            divAllTeams.appendChild(teamDetails);
            
        });
    }

    getTeams();

}


