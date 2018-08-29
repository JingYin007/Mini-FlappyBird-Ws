import {Main} from "./Main.js";
new Main();
var canvas = document.getElementById("game_canvas");
console.log(canvas.width+'|'+canvas.height)
var context = canvas.getContext('2d');
context.fillStyle = 'red';
context.fillRect(0, 0, 200, 166);