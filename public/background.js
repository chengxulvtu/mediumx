let app = {};

// 生成twiter短链
app.generateReferer = function() {
  var linkId = (1 + Math.random()).toString(36).substring(2, 12);
  return `https://t.co/${linkId}`;
};

// 修改请求头Referer
app.modifyHeaders = function(details) {
  let newReferer = app.generateReferer();
  let refExists = false;
  for (var n in details.requestHeaders) {
    refExists = details.requestHeaders[n].name.toLowerCase() == "referer";
    if (refExists) {
      details.requestHeaders[n].value = newReferer;
      break;
    }
  }
  if (!refExists) {
    details.requestHeaders.push({ name: "Referer", value: newReferer });
  }
  return { requestHeaders: details.requestHeaders };
};

// 修改请求头
chrome.webRequest.onBeforeSendHeaders.addListener(
  app.modifyHeaders,
  {
    urls: [
      "*://*.medium.com/*",
      "*://writingcooperative.com/*",
      "*://psiloveyou.xyz/*",
      "*://uxplanet.org/*",
      "*://towardsdatascience.com/*",
      "*://codeburst.io/*",
      "*://levelup.gitconnected.com/*",
      "*://itnext.io/*",
      "*://entrepreneurshandbook.co/*",
      "*://arcdigital.media/*",
      "*://femsplain.com/*",
      "*://fityourself.club/*",
      "*://byrslf.co/*",
      "*://blog.qz.com/*",
      "*://bullshit.ist/*",
      "*://blog.pramp.com/*",
      "*://uxdesign.cc/*",
      "*://medium.muz.li/*",
      "*://blog.usejournal.com/*",
      "*://timeline.com/*",
      "*://substance.media/*",
      "*://thebolditalic.com/*",
      "*://thecreative.cafe/*",
      "*://theascent.pub/*",
      "*://ceoplaybook.io/*",
      "*://dayoneperspective.com/*",
      "*://eand.co/*",
      "*://extranewsfeed.com/*",
      "*://democracyguardian.com/*",
      "*://blog.issuevoter.org/*",
      "*://blog.prototypr.io/*",
      "*://proandroiddev.com/*",
      "*://medium.mybridge.co/*",
      "*://code.likeagirl.io/*",
      "*://blog.bitsrc.io/*",
      "*://stories.mlh.io/*",
      "*://android.jlelse.eu/*",
      "*://govtrackinsider.com/*",
      "*://myvanderbilt.life/*",
      "*://blog.devartis.com/*",
      "*://blog.maddevs.io/*",
      "*://productcoalition.com/*",
      "*://engineering.opsgenie.com/*",
      "*://instagram-engineering.com/*",
      "*://calia.me/*",
      "*://becominghuman.ai/*"
    ]
  },
  ["blocking", "requestHeaders", "extraHeaders"]
);
