'use strict';

import { ALL_PLAYERS_BLOCK, SELECT_TEAM, SELECT_BUTTON, PLAYERS_DIV, TABLE_BODY, MAIN_CONTENT_ID } from "../constants.js";

export const createPlayersFilterBar = () => {
    const playersContent = document.createElement('div');
    playersContent.classList.add(ALL_PLAYERS_BLOCK);
    playersContent.id = ALL_PLAYERS_BLOCK;
    playersContent.innerHTML = String.raw`
    <div class='filter-bar'>
    <select class=${SELECT_TEAM} id=${SELECT_TEAM}></select>
    <button type="button" class=${SELECT_BUTTON} id=${SELECT_BUTTON}>Get Players</button>
    </div>
    <div class=${PLAYERS_DIV} id=${PLAYERS_DIV}></div>
    `;
    return playersContent;
};


export const createPlayersTableHeader = () => {
    const playersDiv = document.getElementById(PLAYERS_DIV);
    playersDiv.innerHTML = String.raw`
    <table class='players-table' id='players-table'>
        <thead class='table-header' id='table-header'>
            <tr class='players-header' id='players-header'>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Position</th>
                <th>Team</th>
                <th>Conference</th>
            </tr>
        </thead>
        <tbody class=${TABLE_BODY} id=${TABLE_BODY}>
        </tbody>
    </table>
    `;
    return playersDiv;
}

const mainContent = document.getElementById(MAIN_CONTENT_ID);

export const displayMainContent = () => {
    mainContent.style.display = 'block';
};

export const hideMainContent = () => {
    mainContent.style.display = 'none';
};

