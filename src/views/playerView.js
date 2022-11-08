'use strict';

export const createPlayersFilterBar = () => {
    const playersContent = document.createElement('div');
    playersContent.classList.add('all-players-block');
    playersContent.id = 'all-players-block';
    playersContent.innerHTML = String.raw`
    <div class='filter-bar'>
    <select class='select-team' id='select-team'></select>
    <button type="button" class='select-button' id='select-button'>Get Players</button>
    </div>
    <div class='players-div' id='players-div'></div>
    `;
    return playersContent;
};


export const createPlayersTableHeader = () => {
    const playersDiv = document.getElementById('players-div');
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
        <tbody class='table-body' id='table-body'>
        </tbody>
    </table>
    `;
    return playersDiv;
}



