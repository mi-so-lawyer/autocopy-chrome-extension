chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "copySelectedText",
    title: "選択範囲をコピー",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "copySelectedText") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        const selection = window.getSelection().toString();
        if (selection) {
          navigator.clipboard.writeText(selection).then(() => {
            const notification = document.createElement("div");
            notification.innerText = "✅ コピーしました";
            notification.style.position = "fixed";
            notification.style.bottom = "20px";
            notification.style.right = "20px";
            notification.style.background = "#333";
            notification.style.color = "#fff";
            notification.style.padding = "10px 20px";
            notification.style.borderRadius = "10px";
            notification.style.zIndex = 9999;
            document.body.appendChild(notification);
            setTimeout(() => notification.remove(), 2000);
          });
        }
      }
    });
  }
});