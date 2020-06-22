import React, { useState, useEffect } from "react";
import Entry from "../Entry/Entry.jsx";
import classNames from "classnames";
import styles from "./App.css";

const App = () => {
  const imageUrl = chrome.runtime.getURL("static/icon128.png");

  // 是否可见
  const [visible, setVisible] = useState(false);
  // 是否展开
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", _scrollEventListener);
    return () => window.removeEventListener("scroll", _scrollEventListener);
  });

  const _scrollEventListener = () => {
    if (
      window.scrollY >= 500 &&
      document.body.scrollHeight - window.scrollY > 1800
    ) {
      if (!visible) {
        setVisible(true);
      }
    } else {
      if (visible) {
        setVisible(false);
      }
    }
  };

  const _getHeader = () => {
    return (
      <div>
        <div
          className={classNames(styles.handCursor, styles.closeButton, {
            [styles.visibleFadeIn]: expanded,
            [styles.hide]: !expanded
          })}
          onClick={() => {
            console.log("收拢");
            setExpanded(false);
          }}
        >
          <span className={classNames(styles.handCursor)}>&#x2715;</span>
        </div>
        <div
          className={classNames(styles.iconContainer)}
          onClick={() => {
            console.log("展开");
            setExpanded(!expanded);
          }}
        >
          <img className={classNames(styles.iconImg)} src={imageUrl} />
        </div>
        <div
          className={classNames(styles.headerContent, {
            [styles.visibleHeaderContent]: expanded,
            [styles.hideHeaderContent]: !expanded
          })}
        >
          <span className={classNames(styles.nowrap)}>Medium-Unlimited</span>
        </div>
      </div>
    );
  };

  const _getExpandedContent = () => {
    return (
      <div
        className={classNames(styles.bodyContent, {
          [styles.visibleBodyContent]: expanded,
          [styles.hideBodyContent]: !expanded
        })}
      >
        <Entry />
      </div>
    );
  };

  return (
    <div
      className={classNames(styles.container, {
        [styles.visibleFadeIn]: visible,
        [styles.hideFadeOut]: !visible
      })}
    >
      <div
        className={classNames(styles.headerContainer, {
          [styles.headerExpanded]: expanded
        })}
      >
        {_getHeader()}
      </div>
      {_getExpandedContent()}
    </div>
  );
};

export default App;
