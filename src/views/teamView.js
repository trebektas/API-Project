'use strict';

import { ALL_TEAMS_DETAILS } from "../constants.js";

export const createTeamsContentElement = () => {
    const teamsContent = document.createElement('div');
    teamsContent.innerHTML = String.raw`
    <section>
        <h1 class="all-teams-header">ALL TEAMS</h1>
        <div class=${ALL_TEAMS_DETAILS} id=${ALL_TEAMS_DETAILS}>
        </div>
    </section>
  `;
    return teamsContent;
};


