'use strict';

export const createTeamsContentElement = () => {
    const teamsContent = document.createElement('div');
    teamsContent.classList.add('all-teams-block');
    teamsContent.innerHTML = String.raw`
    <section class="all-teams-section">
        <h1 class="all-teams-header">ALL TEAMS</h1>
        <div class="all-teams-details" id="all-teams-details">
        </div>
    </section>
  `;
    return teamsContent;
};


