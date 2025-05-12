

# QT/QML Log Remover

This Visual Studio Code extension removes all Qt log statements like `qDebug()`, `qWarning()`, `qCritical()`, and `qInfo()` from C++ source files.

🛠️ **Now available on the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=sanecodeguy.qt-log-remover&ssr=false#overview)**
🔍 You can install it directly by searching `QT Log Remover` in the Extensions panel of VS Code.

## Features

* Removes **single-line and multi-line** Qt log statements.
* Supports `qDebug()`, `qWarning()`, `qCritical()`, and `qInfo()`.
* Automatically cleans up empty lines left behind.
* Right-click in the editor and select **"Remove Qt Logs"** to activate.

## Supported Formats

* C++ `.cpp`, `.h`, and `.qml` files using Qt logging macros.

## How to Use

1. Install the extension:

   * Search for **"QT Log Remover"** in the VS Code Extensions Marketplace, or
   * [Click here to open it in the Marketplace](https://marketplace.visualstudio.com/items?itemName=sanecodeguy.qt-log-remover&ssr=false#overview)
2. Open a C++ or QML file.
3. Right-click anywhere in the editor.
4. Click **"Remove Qt Logs"** from the context menu.

## Demo

![Demo](https://raw.githubusercontent.com/sanecodeguy/QT-QML-Log-Remover/master/resources/demo.gif)

## Known Limitations

* Currently optimized for common log patterns.
* Some highly complex/macro-wrapped logs may require future enhancement.

---

Developed with ❤️ by [sanecodeguy](https://github.com/sanecodeguy)

