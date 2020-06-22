/**
 * 生成referrer
 */
export const getTwitterReferer = () => {
  let linkId = (1 + Math.random()).toString(36).substring(2, 12);
  return `https://t.co/${linkId}`;
};
