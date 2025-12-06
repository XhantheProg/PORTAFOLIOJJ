import { jest } from '@jest/globals';

describe('Menu Close Functionality', () => {
  let navMenu;
  let navClose;

  beforeEach(() => {
    document.body.innerHTML = `
      <div id="nav-menu" class="show-menu"></div>
      <button id="nav-close"></button>
    `;
    
    navMenu = document.getElementById('nav-menu');
    navClose = document.getElementById('nav-close');
    
    require('../js/main.js');
  });
});
