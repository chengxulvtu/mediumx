import {
  setForChromeStorage,
  getFromChromeStorage
} from "../../../utils/storage";
import {
  createCommentContainer,
  removeCommentContainer
} from "./commentContainer";
import { COMMENT_LINK, COMMENT_PLACEHOLDER } from "../../../configs/namespace";
import { stringToDom, getPostIdFromUrl } from "../../../utils";
import { Requeset } from "../../../utils/request";

const request = new Requeset();

// 移除原来的response button
export const removeOriginalReponseBtn = async () => {
  let containerEl, linkEl;
  const commentBtn =
    document.querySelector("span.as") || document.querySelector("span.be");
  if (commentBtn) {
    linkEl = commentBtn.parentElement.parentElement.parentElement;
    containerEl = linkEl.parentElement;
    // 保存link元素，注意DOM元素无法直接存储到local storage中
    await setForChromeStorage(COMMENT_LINK, linkEl.outerHTML);
    containerEl.removeChild(linkEl);
    // 创建一个占位元素
    const placeholderEl = document.createElement("div");
    placeholderEl.setAttribute("id", COMMENT_PLACEHOLDER);
    containerEl.appendChild(placeholderEl);
    // 创建评论区
    createCommentContainer();
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
  const placeholderEl = document.getElementById(COMMENT_PLACEHOLDER);
  const containerEl = placeholderEl.parentElement;
  containerEl.appendChild(linkEl);
  // 移除评论区
  removeCommentContainer();
  containerEl.removeChild(placeholderEl);
};

export const getAllResponsesFromPost = async () => {
  // 获取当前post id
  const rootPostId = getPostIdFromUrl();
  const url = `/_/api/posts/${rootPostId}/responsesStream?formate=json`;
  const config = {
    method: "GET",
    contentType: "application/json",
    accept: "application/json",
    SecFetchSite: "same-origin"
  };
  const response = await request.fetchData(url, config);
  console.log(response);
};
