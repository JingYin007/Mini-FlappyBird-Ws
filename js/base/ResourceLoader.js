/**
 * 资源文件加载器
 * TODO 确保canvas 在图片资源加载完成后才进行渲染
 */
import {Resource} from "./Resource.js";

export class ResourceLoader {
    // map = null;
    constructor(){
        this.map = new Map(Resource);
    }
}