'use strict';

import { MAIN_CONTENT_ID, HOME_LINK_ID, TEAMS_LINK_ID, PLAYERS_LINK_ID } from '../constants.js';
import { createHomeContentElement } from '../views/homeView.js';
import { teamsData } from './teamPage.js';
import { playersData } from './playerPage.js';

export function main() {
    const mainContent = document.getElementById(MAIN_CONTENT_ID);
    mainContent.innerHTML = '';

    const homeContent = createHomeContentElement();
    mainContent.appendChild(homeContent);

    const homeLink = document.getElementById(HOME_LINK_ID);
    homeLink.addEventListener('click', () => {
        main();
    }, {once : true});

    const teamsLink = document.getElementById(TEAMS_LINK_ID);
    teamsLink.addEventListener('click', () => {
        teamsData();
    }, {once : true});

    const playersLink = document.getElementById(PLAYERS_LINK_ID);
    playersLink.addEventListener('click', () => {
        playersData();
    }, {once : true});
}
