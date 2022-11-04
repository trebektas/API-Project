'use strict';

export const createHomeContentElement = () => {
    const homeContent = document.createElement('div');
    homeContent.innerHTML = String.raw`
    <h1 class="home-header">National Basketball Association</h1>
    
    <main class='home-main'>
    
    <img src="./public/court.jpg" alt="NBA Court" class="nba-court">
    <div class='paragraphs'>
    <p class='home-paragraph'>The National Basketball Association (NBA) is a professional basketball league in North America. The league is composed of 30 teams (29 in the United States and 1 in Canada) and is one of the major professional sports leagues in the United States and Canada. It is the premier men's professional basketball league in the world.</p>
    
    <p class='home-paragraph'>The league was founded in New York City on June 6, 1946, as the Basketball Association of America (BAA). It changed its name to the National Basketball Association on August 3, 1949, after merging with the competing National Basketball League (NBL). In 1976, the NBA and the American Basketball Association (ABA) merged, adding four franchises to the NBA. The NBA's regular season runs from October to April, with each team playing 82 games. The league's playoff tournament extends into June. As of 2020, NBA players are the world's best paid athletes by average annual salary per player.</p>
    
    <p class='home-paragraph'>The NBA is an active member of USA Basketball (USAB), which is recognized by the FIBA (International Basketball Federation) as the national governing body for basketball in the United States. The league's several international as well as individual team offices are directed out of its head offices in Midtown Manhattan, while its NBA Entertainment and NBA TV studios are directed out of offices located in Secaucus, New Jersey. In North America, the NBA is the third wealthiest professional sport league after the National Football League (NFL) and Major League Baseball (MLB) by revenue, and among the top four in the world.</p>
    
    <p class='home-paragraph'>The Boston Celtics and the Los Angeles Lakers are tied with the most NBA championships at 17 each. The Golden State Warriors are the defending league champions, as they defeated the Boston Celtics 4–2 in the 2022 NBA Finals.</p>
    <div>
    </main>
  `;
    return homeContent;
};