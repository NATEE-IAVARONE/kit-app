"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "kit" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('kit.helloWorld', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        vscode.window.showInformationMessage('Hello World from kit! wow');
    });
    context.subscriptions.push(disposable);
    context.subscriptions.push(vscode.commands.registerCommand('kit.start', () => {
        // Create and show a new webview
        const panel = vscode.window.createWebviewPanel('kit', // Identifies the type of the webview. Used internally
        'KIT', // Title of the panel displayed to the user
        vscode.ViewColumn.One, // Editor column to show the new webview panel in.
        {
            // Enable scripts in the webview
            enableScripts: true
        });
        // And set its HTML content
        panel.webview.html = getWebviewContent();
    }));
    const provider = new KitViewProvider(context.extensionUri);
    context.subscriptions.push(vscode.window.registerWebviewViewProvider(KitViewProvider.viewType, provider));
}
exports.activate = activate;
class KitViewProvider {
    constructor(_extensionUri) {
        this._extensionUri = _extensionUri;
    }
    resolveWebviewView(webviewView, context, _token) {
        this._view = webviewView;
        webviewView.webview.options = {
            // Allow scripts in the webview
            enableScripts: true,
            localResourceRoots: [
                this._extensionUri
            ]
        };
        webviewView.webview.html = getWebviewContent();
    }
}
KitViewProvider.viewType = 'kit.kitView';
function getWebviewContent() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>KIT</title>
	<style>
		iframe {
			height: 100vh;
		}
	</style
</head>
<body>
  <iframe src="http://localhost:5173" title="KIT" height="100%" width="100%" frameBorder="0" scrolling="no"></iframe>
</body>
</html>`;
}
// This method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map