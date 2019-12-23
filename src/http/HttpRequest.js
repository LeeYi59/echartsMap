import axios from "axios";
import Qs from "qs";
import { Notification } from "element-ui";
import router from "../router";


// 通过 axios.create 创建一个实例，对该实例进行一些配置，便得到了一个专门用来与后端服务器进行通信的 ajax 函数。
const axiosInstance = axios.create({
  timeout: 100000, // 请求超时时间
  // `transformRequest` 允许在向服务器发送前，修改请求数据
  // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
  //transformRequest: [
  //function(data) {
  // 对 data 进行任意转换处理
  // console.log(Qs.stringify(data));
  // return Qs.stringify(data);
  // }
  //],
  // `params` 是即将与请求一起发送的 URL 参数
  // 必须是一个无格式对象(plain object)或 URLSearchParams 对象
  // params: {
  //   email:'123@qq.com',
  //   password:'123'
  // },
  // headers:{
  //   "auth":localStorage.getItem('token')
  // },
  // `data` 是作为请求主体被发送的数据
  // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
  // 在没有设置 `transformRequest` 时，必须是以下类型之一：
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - 浏览器专属：FormData, File, Blob
  // - Node 专属： Stream
  // data: {

  // },
  // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: true, // 默认的
  // `auth` 表示应该使用 HTTP 基础验证，并提供凭据
  // 这将设置一个 `Authorization` 头，覆写掉现有的任意使用 `headers` 设置的自定义 `Authorization`头
  // auth: {
  // },

  // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
  validateStatus: function (status) {
    return status >= 200 && status < 300; // 默认的
  }
});

// 添加请求拦截器
axiosInstance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    console.log("请求拦截器-----> 请求发送......");
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    console.log("请求拦截器----> 请求错误......" + JSON.stringify(error));
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axiosInstance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    console.log("请求结束......");
    var code = response.data.code;
    var msg = response.data.msg;
    if (code != 0) {
      Notification.error(msg);
      if (code == 401) {
        router.replace({
          path: "/#/"
        });
      }
      console.log("操作失败");
      console.log(response);
    }
    return response.data;
  },
  function (error) {
    // 对响应错误做点什么
    console.log("响应报错：");
    var errMsg = "服务器异常";


    if (error.response.status == 401) {
      errMsg = "会话过期/未登录";

    } else if (error.response.status == 504) {
      errMsg = "服务器未启动⊙﹏⊙∥";
    } else if (error.response.status == 403) {
      errMsg = "权限不足,请联系管理员!";
    }
    else if (error.response.status == 404) {
      errMsg = '请求路径不存在⊙﹏⊙∥';
    } else {
      errMsg = "未知错误!";
    }
    console.log(
      "错误内容：" +
      error.response.data.message +
      ", 路径：" +
      error.config.url +
      ", 状态码：" +
      error.response.data.status +
      ", 请求类型：" +
      error.config.method
    );

    Notification.error(errMsg);
    return Promise.reject(error);
  }
);

const basePath = '/gangdun';

export const uploadRequest = (url, formData) => {
  return axiosInstance({
    method: "post",
    url: basePath + url,
    data: formData,
    headers: { "Content-Type": "multipart/form-data" }
  });
};

export const postRequest = (url, params) => {
  // return axiosInstance({
  //   method: "post",
  //   url: basePath + url,
  //   data: Qs.stringify(params)
  // }); 
  return excute(url, params, { 'auth': localStorage.getItem('token') }, 'post');
};

export const putRequest = (url, params) => {
  // return axiosInstance({
  //   method: "put",
  //   url: basePath + url,
  //   data: Qs.stringify(params)
  // }); 
  return excute(url, params, { 'auth': localStorage.getItem('token') }, 'put');
};

export const deleteRequest = (url, params) => {
  return excute(url, params, { 'auth': localStorage.getItem('token') }, 'delete');
};

export const getRequest = (url, params) => {

  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      const element = params[key];
      if (element.length == 0) {
        delete params[key];
      }
    }
  }
  return AxiosInstance.get(basePath + url, {
    params: params,
    headers: { 'auth': localStorage.getItem('token') }
  });
};

function excute(url, params, header, method) {
  return axiosInstance({
    method: method,
    url: basePath + url,
    params: params,
    headers: header
  });
}

export const AxiosInstance = axiosInstance;
