// import * as utils from '../lib/utils';
import { $ } from '../lib/dom';

console.log('welcome to jump for joy!');

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
const CANVAS_BACKGROUND_COLOR = 'hsl(0, 0%, 95%)';

function init() {
    $('#canvas')[0].style.width = CANVAS_WIDTH + 'px';
    $('#canvas')[0].style.height = CANVAS_HEIGHT + 'px';
    $('#canvas')[0].style.backgroundColor = CANVAS_BACKGROUND_COLOR;
    $('#canvas')[0].innerHTML = '<h1>Jump for Joy</h1>';
}

init();
