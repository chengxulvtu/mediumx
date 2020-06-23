import ReactDOM from "react-dom";
import React from "react";
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

// 挂载到容器元素上
registerListeners();

function registerListeners() {
  _attachFloatingButton();
}

function _attachFloatingButton() {
  ReactDOM.render(<App />, floatingButtonParent);
}

function _removeFloatingButton() {
  ReactDOM.unmountComponentAtNode(floatingButtonParent);
}
