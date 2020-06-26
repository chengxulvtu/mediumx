import { exec, init } from "pell";
import { COMMENT_PLACEHOLDER } from "../../../configs/namespace";

export const editorInit = () => {
  const editor = init({
    element: document.getElementById("editor"),
    onChange: html => {
      //   document.getElementById("html-output").textContent = html;
      console.log(html);
    },
    defaultParagraphSeparator: "p",
    styleWithCSS: true,
    actions: [
      "bold",
      "underline",
      {
        name: "italic",
        result: () => exec("italic")
      },
      {
        name: "backColor",
        icon: '<div style="background-color:pink;">A</div>',
        title: "Highlight Color",
        result: () => exec("backColor", "pink")
      },
      {
        name: "image",
        result: () => {
          const url = window.prompt("Enter the image URL");
          if (url) exec("insertImage", url);
        }
      },
      {
        name: "link",
        result: () => {
          const url = window.prompt("Enter the link URL");
          if (url) exec("createLink", url);
        }
      }
    ],
    classes: {
      actionbar: "pell-actionbar",
      button: "pell-button",
      content: "pell-content",
      selected: "pell-button-selected"
    }
  });

  // editor.content<HTMLElement>
  // To change the editor's content:
  editor.content.innerHTML = "<b><u><i>Initial content!</i></u></b>";
};

export const createEditorEl = () => {
  // editor el
  const editorEl = document.createElement("div");
  editorEl.setAttribute("id", "editor");
  editorEl.setAttribute("class", "pell");
  // wrapperEl
  const wrapperEl = document.createElement("div");
  wrapperEl.append(editorEl);
  // button
  const publishBtn = document.createElement("button");
  publishBtn.setAttribute("class", `${COMMENT_PLACEHOLDER}-btn_publish`);
  publishBtn.textContent = "Publish";
  const goFullScreenBtn = document.createElement("button");
  goFullScreenBtn.textContent = "Go Full Screen";
  goFullScreenBtn.setAttribute(
    "class",
    `${COMMENT_PLACEHOLDER}-btn_full_screen`
  );
  wrapperEl.append(publishBtn);
  wrapperEl.append(goFullScreenBtn);

  return wrapperEl;
};

export const removeEditor = (wrapperEl, containEl) => {
  containEl.removeChild(wrapperEl);
};
