import ReactDOM from "react-dom";
import React from "react";
import { allowedDomain } from "./configs/domains";
import { setForChromeStorage } from "./utils";
import App from "./components/App/App.jsx";

// 创建浮动按钮容器
const floatingContentDivId = "mediumUnlimited";
const floatingButtonParent = document.createElement("div");
floatingButtonParent.setAttribute("id", floatingContentDivId);
document.body.appendChild(floatingButtonParent);

// 加载material ui字体
const robotoFontLink = document.createElement("link");
robotoFontLink.setAttribute("rel", "stylesheet");
robotoFontLink.setAttribute(
  "href",
  "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
);
document.head.appendChild(robotoFontLink);

// 判断是否有评论
detectComments();

// 挂载到容器元素上
registerListeners();

function detectValidDomain() {
  let isValidDomain;
  const targetDomain = document.domain;
  allowedDomain.forEach(sourceDomain => {
    let first = sourceDomain.indexOf("//");
    let last = sourceDomain.lastIndexOf("/*");
    let d = sourceDomain.substring(first + 2, last);
    if (d.includes(targetDomain)) {
      isValidDomain = true;
    }
  });
  return isValidDomain;
}

function registerListeners() {
  // 判断是否启用插件
  const isOkay = detectValidDomain();
  if (!isOkay) {
    return false;
  }
  _attachFloatingButton();
}

function _attachFloatingButton() {
  ReactDOM.render(<App />, floatingButtonParent);
}

function _removeFloatingButton() {
  ReactDOM.unmountComponentAtNode(floatingButtonParent);
}

function detectComments() {
  const htmlStr = document.documentElement.innerHTML;
  const isAvailable = htmlStr.indexOf('<span class="as">');
  if (isAvailable > -1) {
    console.log("medium comments available, save to chrome storage");
    setForChromeStorage("isCommentsAvailable", true);
  } else {
    console.info("no comments");
  }
}
