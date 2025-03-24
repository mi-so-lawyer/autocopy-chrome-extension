Auto Copy Chrome Extension 🚀

選択したテキストを自動的にコピーするChrome拡張機能です。編集可能なフィールド内の選択は除外され、視覚的な通知でコピー完了をお知らせします。コンテキストメニューのサポートやポップアップUIでのON/OFF切り替えも可能です。

✨ 主な機能

✅ 自動コピー：編集可能なフィールドを除くテキスト選択時に自動でコピーします。

✅ コンテキストメニュー：右クリックメニューから選択テキストをコピーできます。

✅ コピー通知：コピーが成功すると画面右下に通知を表示します。

✅ ポップアップUI：拡張機能のアイコンをクリックしてON/OFFを切り替えられます。

✅ Manifest V3対応：最新のChrome拡張機能仕様に準拠しています。

🧩 インストール方法

このリポジトリをクローンまたはZIPとしてダウンロードし、解凍します。

Chromeで chrome://extensions/ にアクセスします。

右上の「デベロッパーモード」を有効にします。

「パッケージ化されていない拡張機能を読み込む」をクリックし、解凍したフォルダを選択します。


🛠 プロジェクト構成


AutoCopyChromeExtension/

├── background.js

├── content.js

├── icon.png

├── manifest.json

├── popup.html

└── popup.js


⚙️ 使用技術

JavaScript：主要なロジックとDOM操作。

Chrome Extensions API：Chrome拡張機能の構築に使用。

Manifest V3：最新の拡張機能マニフェスト仕様。

Clipboard API：クリップボードへのコピー操作を実現。

DOM Notification：カスタムオーバーレイによる通知表示。

📄 ライセンス

このプロジェクトはMITライセンスの下で提供されています。

🙌 作者
mi-so-lawyer による制作。
ご意見やフィードバックは歓迎します！

