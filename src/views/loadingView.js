'use strict';

const loaderContainer = document.querySelector('.loader-container');
const loadingText = document.querySelector('.loading-text');
const addLoadingGif = document.createElement('img');
loaderContainer.appendChild(addLoadingGif);
addLoadingGif.classList.add('loading-gif');

export const displayLoading = () => {
    loaderContainer.style.display = 'block';
    loaderContainer.style.width = 'auto';
    loaderContainer.style.margin = '0 auto';
    loadingText.textContent='Loading...';
    addLoadingGif.src='./public/loading.svg';
    addLoadingGif.alt='Loading';
};

export const hideLoading = () => {
    loaderContainer.style.display = 'none';
};