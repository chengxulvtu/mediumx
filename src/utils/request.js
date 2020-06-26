import { REQUEST_METHOD } from "../configs/request";

export class Requeset {
  /**
   * 封装网路请求，基于fetch
   * 注入token
   */
  async fetchData(url, config) {
    let result;
    const Host = "https://medium.com";
    const requestUrl = `${Host}${url}`;
    const { method, contentType, accept, SecFetchSite, body } = config;
    // 创建headers
    const headers = new Headers({
      "Content-Type": contentType,
      Accept: accept,
      "Sec-Fetch-Site": SecFetchSite
    });
    // 根据请求方法判断
    if (!method || method === REQUEST_METHOD.GET) {
      result = await fetch(requestUrl, {
        headers
      });
    } else if (method === REQUEST_METHOD.POST) {
      result = await fetch(requestUrl, {
        body: JSON.stringify(body),
        headers,
        method
      });
    } else {
      result = await fetch(requestUrl, {
        body: JSON.stringify(body),
        headers,
        method
      });
    }
    return this.handleRequest(result);
  }

  /**
   * 处理相应
   * @param {*} result
   */
  async handleRequest(result) {
    const parsedRequest = await this.parseRequest(result);
    // 如果res.ok，则请求成功
    if (result.ok) {
      return parsedRequest;
    }
    // 请求失败，返回解析之后的失败的数据
    const error = parsedRequest;
    throw error;
  }

  /**
   * 根据Content-Type解析返回内容
   * @param {*} result
   */
  async parseRequest(result) {
    const contentType = result.headers.get("Content-Type");
    if (!contentType) return await result.text();
    if (contentType.indexOf("json") > -1) {
      console.log("result", result);
      return await result.json();
    }
    if (contentType.indexOf("text") > -1) {
      return await result.text();
    }
    if (contentType.indexOf("form") > -1) {
      return await result.formData();
    }
    if (contentType.indexOf("video") > -1) {
      return await result.blob();
    }
  }
}
