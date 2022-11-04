'use strict';

import { FETCH_NBA_TEAMS, MAIN_CONTENT_ID, NBA_LOGO_ID } from '../constants.js';
import { createHomeContentElement } from '../views/homeView.js';


async function requestData(url) {   
    return await fetch(url)
    .then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}

export function main() {
    const mainContent = document.getElementById(MAIN_CONTENT_ID);
    mainContent.innerHTML = '';

    const homeContent = createHomeContentElement();
    mainContent.appendChild(homeContent);

    //This code block will delete when the project is finish
    const logoNba = document.getElementById(NBA_LOGO_ID);
    logoNba.addEventListener('click', () => {
        requestData(FETCH_NBA_TEAMS);
    });

    const linkHome = document.getElementById(HOME_LINK_ID);
    linkHome.addEventListener('click', () => {
        main();
    });
}
