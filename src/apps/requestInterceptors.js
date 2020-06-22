import { getTwitterReferer } from "../utils";
import { allowedDomain } from "../configs/domains";

/**
 * 修改请求头中的referer
 * @param {*} details
 */
const modifyHeaders = details => {
  let newReferer = getTwitterReferer();
  let refExists = false;
  for (var n in details.requestHeaders) {
    refExists = details.requestHeaders[n].name.toLowerCase() == "referer";
    if (refExists) {
      details.requestHeaders[n].value = newReferer;
      break;
    }
  }
  if (!refExists) {
    details.requestHeaders.push({ name: "Referer", value: newReferer });
  }
  return { requestHeaders: details.requestHeaders };
};

const intercept = () => {
  // 修改请求头
  chrome.webRequest.onBeforeSendHeaders.addListener(
    modifyHeaders,
    {
      urls: allowedDomain
    },
    ["blocking", "requestHeaders", "extraHeaders"]
  );
};

export default intercept;
