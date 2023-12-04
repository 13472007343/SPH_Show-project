//先引入mock模块
import Mock from "mockjs";
//webpack默认对外暴露：图片，json格式
import banner from './banner.json';
import floor from './floor.json';

//开始mock数据
Mock.mock("/mock/banner",{code:200,data:banner});
Mock.mock("/mock/floor",{code:200,data:floor});
