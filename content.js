function showCopyPopup() {
  const selection = window.getSelection();
  if (!selection.rangeCount) return;

  const selectedText = selection.toString().trim();
  if (!selectedText || isInsideEditable(selection)) return;

  chrome.storage.sync.get("enabled", (data) => {
    if (data.enabled === false) return;

    navigator.clipboard.writeText(selectedText).then(() => {
      const notification = document.createElement("div");
      notification.innerText = "✅ コピーしました";
      notification.style.position = "fixed";
      notification.style.bottom = "20px";
      notification.style.right = "20px";
      notification.style.background = "#4CAF50";
      notification.style.color = "#fff";
      notification.style.padding = "10px 20px";
      notification.style.borderRadius = "10px";
      notification.style.zIndex = 9999;
      notification.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
      document.body.appendChild(notification);
      setTimeout(() => notification.remove(), 2000);
    });
  });
}

function isInsideEditable(selection) {
  const range = selection.getRangeAt(0);
  let node = range.commonAncestorContainer;
  while (node) {
    if (node.nodeType === Node.ELEMENT_NODE) {
      const tagName = node.tagName || "";
      if (node.isContentEditable || tagName === "INPUT" || tagName === "TEXTAREA") {
        return true;
      }
    }
    node = node.parentElement;
  }
  return false;
}

document.addEventListener("mouseup", () => {
  setTimeout(showCopyPopup, 100);
});