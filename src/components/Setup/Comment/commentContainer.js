import { createEditorEl, editorInit } from "./editor";
import { COMMENT_PLACEHOLDER } from "../../../configs/namespace";
import { globalStyle, wrapperStyle, avatarStyle } from "./styles/commentStyle";
import {
  editorContentStyle,
  editorActionBarStyle,
  editorBtnStyle,
  editorContainerStyle,
  editorBtnAction
} from "./styles/editorStyle";
import { addStyle } from "../../../utils";

export const createCommentContainer = () => {
  const containerEl = document.querySelector(`#${COMMENT_PLACEHOLDER}`);
  // 评论容器
  const wrapperEl = document.createElement("div");
  wrapperEl.setAttribute("class", `${COMMENT_PLACEHOLDER}_wrapper`);
  addStyle(wrapperEl, globalStyle);
  addStyle(wrapperEl, wrapperStyle);
  // avatar
  const avatarEl = document.createElement("div");
  avatarEl.setAttribute("alt", "avatar");
  addStyle(avatarEl, avatarStyle);
  // content
  const contentEl = document.createElement("div");
  contentEl.textContent = "Writing a response...";
  // header
  const headerEl = document.createElement("div");
  headerEl.style.display = "flex";
  headerEl.append(avatarEl);
  headerEl.append(contentEl);
  let editorWrapper;
  contentEl.onclick = () => {
    if (editorWrapper) return;
    console.log("click to edit");
    // 插入编辑器元素
    editorWrapper = createEditorEl();
    wrapperEl.append(editorWrapper);
    // 编辑器初始化
    editorInit();
    // 编辑器样式覆盖
    const pellContainer = document.querySelector(".pell");
    const pellContent = document.querySelector(".pell-content");
    const pellActionBar = document.querySelector(".pell-actionbar");
    const publishBtn = document.querySelector(
      `.${COMMENT_PLACEHOLDER}-btn_publish`
    );
    const goFullScreenBtn = document.querySelector(
      `.${COMMENT_PLACEHOLDER}-btn_full_screen`
    );
    addStyle(pellContainer, editorContainerStyle);
    addStyle(pellContent, editorContentStyle);
    addStyle(pellActionBar, editorActionBarStyle);
    addStyle(publishBtn, editorBtnAction);
    addStyle(goFullScreenBtn, editorBtnAction);
    if (pellActionBar.childNodes.length > 0) {
      pellActionBar.childNodes.forEach(child => {
        addStyle(child, editorBtnStyle);
      });
    }
  };
  wrapperEl.append(headerEl);
  containerEl.append(wrapperEl);
};

export const removeCommentContainer = () => {
  const containerEl = document.querySelector(`#${COMMENT_PLACEHOLDER}`);
  const wrapper = document.querySelector(`.${COMMENT_PLACEHOLDER}_wrapper`);
  containerEl.removeChild(wrapper);
};
