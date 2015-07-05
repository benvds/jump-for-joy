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
        speed: 200, // pixels per second
        left: 0
    }
};

let prevTimestamp;

function moveRight(delta) {
    let distance = Math.round(state.subject.speed * delta);
    let position = state.subject.left + distance;

    if (position > canvasWidth) {
        state.subject.left = 0;
    } else {
        state.subject.left = position;
    }
}

function init() {
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    window.addEventListener('keydown', function(e) {
        if (e.keyCode === LEFT_KEY) {
            let amount = -1 * state.subject.speed;
            let position = state.subject.left + amount;

            state.subject.left = position;
        }
    });

    prevTimestamp = (new Date()).getTime();
}

function render() {
    let curTimestamp = (new Date()).getTime();
    let delta = (curTimestamp - prevTimestamp) / 1000;

    prevTimestamp = curTimestamp;

    context.clearRect(0, 10, canvasWidth, 60);
    context.fillStyle = 'red';
    context.fillRect(state.subject.left, 10, 50, 50);

    moveRight(delta);
    window.requestAnimationFrame(render);
}

init();
render();
