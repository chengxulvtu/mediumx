/**
 * 生成referrer
 */
export const getTwitterReferer = () => {
  let linkId = (1 + Math.random()).toString(36).substring(2, 12);
  return `https://t.co/${linkId}`;
};

/**
 * 字符串转DOM元素
 * @param {*} str
 */
export const stringToDom = str => {
  // Can be any element
  const temp = document.createElement("div");
  temp.innerHTML = str;
  return temp.children[0];
};

/**
 * 给元素添加样式 (jquery)
 */
export const addStyle = (el, styles) => {
  for (const key in styles) {
    el.style[key] = styles[key];
  }
};

/**
 * 获取post id
 */
export const getPostIdFromUrl = () => {
  const url = window.location.href;
  const index = url.lastIndexOf("-");
  const postId = url.slice(index + 1);
  return postId;
};
