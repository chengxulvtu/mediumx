import $ from "jquery";
import { COMMENT, COMMENT_PLACEHOLDER } from "../../../configs/namespace";

window.$ = $;

export const createCommentContainer = () => {
  const $container = $(`#${COMMENT_PLACEHOLDER}`);
  const $wrapper = $(
    "<div class='MEDIUM_ENHANCED_READER_COMMENT_wrapper'>测试jquery</div>"
  );
  $container.append($wrapper);
};

export const removeCommentContainer = () => {
  const $container = $(`#${COMMENT_PLACEHOLDER}`);
  $container.empty();
};
