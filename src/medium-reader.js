import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { allowedDomain } from "./configs/domains";
import configureStore from "./store";
import App from "./components/App/App.jsx";

// 创建浮动按钮容器
const floatingButtonParent = document.createElement("div");
createContainerEl();

// 加载material ui字体
addGoogleFont();

// 挂载到容器元素上
registerListeners();

function createContainerEl() {
  const isOkay = detectValidDomain();
  if (!isOkay) {
    return false;
  }
  const floatingContentDivId = "mediumUnlimited";
  floatingButtonParent.setAttribute("id", floatingContentDivId);
  document.body.appendChild(floatingButtonParent);
}

function addGoogleFont() {
  const isOkay = detectValidDomain();
  if (!isOkay) {
    return false;
  }
  const robotoFontLink = document.createElement("link");
  robotoFontLink.setAttribute("rel", "stylesheet");
  robotoFontLink.setAttribute(
    "href",
    "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
  );
  document.head.appendChild(robotoFontLink);
}

// 判断是否启用插件
function detectValidDomain() {
  let isValidDomain;
  const targetDomain = document.domain;
  allowedDomain.forEach(sourceDomain => {
    let first = sourceDomain.indexOf("//");
    let last = sourceDomain.lastIndexOf("/*");
    let d = sourceDomain.substring(first + 2, last);
    // medium首页不显示，原生的评论页不显示
    if (
      window.location.href === "https://medium.com/" ||
      (window.location.href.indexOf("medium.com") > -1 &&
        window.location.href.indexOf("responses/show") > -1)
    ) {
      isValidDomain = false;
      return;
    }
    if (d.includes(targetDomain)) {
      isValidDomain = true;
    }
  });
  return isValidDomain;
}

function registerListeners() {
  const isOkay = detectValidDomain();
  if (!isOkay) {
    return false;
  }
  _attachFloatingButton();
}

function _attachFloatingButton() {
  let { store, persistor } = configureStore();
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>,
    floatingButtonParent
  );
}

function _removeFloatingButton() {
  ReactDOM.unmountComponentAtNode(floatingButtonParent);
}
