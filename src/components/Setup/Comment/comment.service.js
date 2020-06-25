import {
  setForChromeStorage,
  getFromChromeStorage
} from "../../../utils/storage";
import { COMMENT_LINK, COMMENT_PLACEHOLDER } from "../../../configs/namespace";
import { stringToDom } from "../../../utils";

// 移除原来的response button
export const removeOriginalReponseBtn = async () => {
  let containerEl, linkEl;
  const commentBtn =
    document.querySelector("span.as") || document.querySelector("span.be");
  if (commentBtn) {
    linkEl = commentBtn.parentElement.parentElement.parentElement;
    containerEl = linkEl.parentElement;
    // 创建一个占位元素
    const placeholderEl = document.createElement("div");
    placeholderEl.setAttribute("id", COMMENT_PLACEHOLDER);
    containerEl.appendChild(placeholderEl);
    // 保存link元素，注意DOM元素无法直接存储到local storage中
    await setForChromeStorage(COMMENT_LINK, linkEl.outerHTML);
    containerEl.removeChild(linkEl);
  } else {
    console.info("original comments system do not exist");
  }
};

/**
 * 恢复原来的评论系统
 */
export const recoverOriginalCommentSystem = async () => {
  const linkElStr = await getFromChromeStorage(COMMENT_LINK);
  const linkEl = stringToDom(linkElStr);
  // 创建link元素
  // const linkEl = document.createElement("a");
  // const text = document.createTextNode("See Responses");
  // linkEl.appendChild(text);
  // linkEl.setAttribute("href", link);
  // const linkStyle = {
  //   display: "block",
  //   border: "1px solid rgba(41, 122, 255, 1)",
  //   padding: "20px",
  //   textAlign: "center",
  //   borderRadius: "4px",
  //   cursor: "pointer"
  // };
  // for (const key in linkStyle) {
  //   linkEl.style[key] = linkStyle[key];
  // }
  const placeholderEl = document.getElementById(COMMENT_PLACEHOLDER);
  const containerEl = placeholderEl.parentElement;
  containerEl.appendChild(linkEl);
  containerEl.removeChild(placeholderEl);
};
