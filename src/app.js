'use strict';

import { main } from './pages/homePage.js';

export const loadApp = () => {
  main();
};
  
  window.addEventListener('load', loadApp);
