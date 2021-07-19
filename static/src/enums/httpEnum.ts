/*
 * @Author: 杨宏旋
 * @Date: 2021-05-13 14:39:09
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-05-13 15:26:30
 * @Description:
 */
/**
 * @description: Request result set
 */
export enum ResultEnum {
  SUCCESS = 1,
  ERROR = 0,
  TIMEOUT = 401,
  TYPE = 'success',
}

/**
 * @description: request method
 */
export enum RequestEnum {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

/**
 * @description:  contentTyp
 */
export enum ContentTypeEnum {
  // json
  JSON = 'application/json;charset=UTF-8',
  // form-data qs
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data  upload
  FORM_DATA = 'multipart/form-data;charset=UTF-8',
}
