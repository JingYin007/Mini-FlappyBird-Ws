/**
 * 主入口类
 * 初始化整个游戏的基类，作为游戏开始的入口
 */
import {ResourceLoader} from "./js/base/ResourceLoader.js";

export class Main {
    constructor() {
        console.log('我是 Main!');
        new ResourceLoader();
        var canvas = document.getElementById("game_canvas");
        console.log(canvas.width+'|'+canvas.height)
        var context = canvas.getContext('2d');
        context.fillStyle = 'red';
        context.fillRect(0, 0, 200, 166);
    }

}