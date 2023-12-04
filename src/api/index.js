//当前的模块，所有API接口进行统一管理

import requests from "./request";
import mockRequest from './mockRequest'

//三级联动文档
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })

//获取mock数据
export const reqGetBannerList = () => mockRequest({url:'/banner',method:'get'})