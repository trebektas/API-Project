'use strict';

export const createTeamsContentElement = () => {
    const teamsContent = document.createElement('div');
    teamsContent.classList.add('all-teams-block');
    teamsContent.innerHTML = String.raw`
    <section class="all-teams-section">
        <h2 class="all-teams-header">ALL TEAMS</h2>
        <div class="all-teams-details" id="all-teams-details">
        </div>
    </section>
  `;
    return teamsContent;
};

export const createTeamDetails = () => {

    const teamDetails = document.createElement('section');
    const teamLogo = document.createElement('img');
    const teamTexts = document.createElement('div');
    teamDetails.appendChild(teamLogo);
    teamDetails.appendChild(teamTexts);
    teamDetails.classList.add('team-section');
    teamLogo.classList.add('team-logo');
    teamTexts.classList.add('team-texts');

    const teamName = document.createElement('h3');
    const teamConference = document.createElement('h5');
    const teamDivision = document.createElement('h5');
    teamTexts.appendChild(teamName);
    teamTexts.appendChild(teamConference);
    teamTexts.appendChild(teamDivision);
    teamName.classList.add('team-name');
    teamConference.classList.add('team-conference');
    teamDivision.classList.add('team-division');
    
    return teamDetails;
};


