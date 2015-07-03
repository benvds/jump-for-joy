import * as utils from '../lib/utils';
import { $ } from '../lib/dom';

const canvas = $('#canvas')[0];
const canvasWidth = 800;
const canvasHeight = 600;
const context = canvas.getContext('2d');

const ENTER_KEY = 13;
const ESC_KEY = 27;
const RIGHT_KEY = 39;
const UP_KEY = 38;
const DOWN_KEY = 40;
const LEFT_KEY = 37;

let state = {
    subject: {
        speed: 1,
        left: 0
    }
};

function init() {
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    window.addEventListener('keydown', function(e) {
        if (e.keyCode === LEFT_KEY) {
            let amount = -1 * state.subject.speed;
            let position = state.subject.left + amount;
            state.subject.left = position;
            // console.log('left:', e);
        }
    });
    window.addEventListener('keydown', function(e) {
        if (e.keyCode === RIGHT_KEY) {
            let amount = state.subject.speed;
            let position = state.subject.left + amount;
            state.subject.left = position;
            // console.log('right:', e);
        }
    });
    window.addEventListener('keydown', function(e) {
        if (e.keyCode === DOWN_KEY) {
            state.subject.speed--;
        }
    });
    window.addEventListener('keydown', function(e) {
        if (e.keyCode === UP_KEY) {
            state.subject.speed++;
        }
    });
}

function render() {
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    context.fillStyle = 'red';
    context.fillRect(state.subject.left, 10, 50, 50);

    window.requestAnimationFrame(render);
}

init();
render();
