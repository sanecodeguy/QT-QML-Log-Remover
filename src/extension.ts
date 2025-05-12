import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Qt Log Remover is now active!');

    let disposable = vscode.commands.registerCommand('qt-log-remover.removeLogs', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active editor!');
            return;
        }

        const document = editor.document;
        const text = document.getText();

        const logPatterns = [
            /qDebug\([^)]*\)(\s*<<[^;]*)?;?/g,
            /qWarning\([^)]*\)(\s*<<[^;]*)?;?/g,
            /qCritical\([^)]*\)(\s*<<[^;]*)?;?/g,
            /qInfo\([^)]*\)(\s*<<[^;]*)?;?/g,
            /qDebug\([^)]*\)\s*(<<[^;]*\s*)?[\r\n]+(?:\s*.*\s*)?;/g,
            /qWarning\([^)]*\)\s*(<<[^;]*\s*)?[\r\n]+(?:\s*.*\s*)?;/g,
            /qCritical\([^)]*\)\s*(<<[^;]*\s*)?[\r\n]+(?:\s*.*\s*)?;/g,
            /qInfo\([^)]*\)\s*(<<[^;]*\s*)?[\r\n]+(?:\s*.*\s*)?;/g
        ];

        let newText = text;
        for (const pattern of logPatterns) {
            newText = newText.replace(pattern, '');
        }

        newText = newText.replace(/^\s*[\r\n]/gm, '');

        editor.edit(editBuilder => {
            const fullRange = new vscode.Range(
                document.positionAt(0),
                document.positionAt(text.length)
            );
            editBuilder.replace(fullRange, newText);
        });

        vscode.window.showInformationMessage('Removed Qt logs!');
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
