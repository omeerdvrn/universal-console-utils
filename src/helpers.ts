import * as vscode from 'vscode';
import { languageMappingsWithText, languageMappingsBase, languageImportMappings } from './constants/configs';

export const insertLogWithText = (selectedText: string, range: vscode.Range, resolve: any = Promise.resolve) => {
    const editor = vscode.window.activeTextEditor;

    if (!editor) {
        vscode.window.showErrorMessage(`There is no active document, no log statements inserted.`);
        return;
    }

    if (!editor.document.languageId) {
        vscode.window.showErrorMessage(`The language used in this file is not determined.`);
        return;
    }

    const logStatement = getLogStatementWithText(selectedText, editor.document.languageId);
    if (!logStatement) {
        return;
    }
    return editor.edit((editBuilder) => {
        editBuilder.replace(range, logStatement);
    }).then(() => resolve());
};

export const insertBaseLog = () => {
    const editor = vscode.window.activeTextEditor;

    if (!editor) {
        vscode.window.showErrorMessage(`There is no active document, no log statements inserted.`);
        return;
    }

    if (!editor.document.languageId) {
        vscode.window.showErrorMessage(`The language used in this file is not determined.`);
        return;
    }

    const logStatement = getLogStatementBase(editor.document.languageId);
    if (!logStatement) {
        return;
    }

    const selection = editor.selection;
    const range = new vscode.Range(selection.start, selection.end);

    editor.edit((editBuilder) => {
        editBuilder.replace(range, logStatement);
    });
};

export const getLogStatementWithText = (logText: string, languageId: string): string => {
    const templateText = languageMappingsWithText[languageId];
    if (!templateText) {
        vscode.window.showErrorMessage(`The language used in this file is not supported.`);
        return '';
    }

    const logStatement = templateText.replace(/\{selectedSnippet\}/g, logText);
    return logStatement;
};

export const getImportStatement = (languageId: string): string => {
    const templateText = languageImportMappings[languageId];
    if (!templateText) {
        vscode.window.showErrorMessage(`The language used in this file is not supported.`);
        return '';
    }
    return templateText;
};

const getLogStatementBase = (languageId: string): string => {
    const templateText = languageMappingsBase[languageId];
    if (!templateText) {
        vscode.window.showErrorMessage(`The language used in this file is not supported.`);
        return '';
    }
    return templateText;
};


export const setTextToTheSecondLine = (text: string, editor: vscode.TextEditor) => {
	const firstLine = new vscode.Range(new vscode.Position(1, 0), new vscode.Position(1, 0));
	editor.edit((editBuilder: vscode.TextEditorEdit) => {
		editBuilder.insert(firstLine.start, text);
	});
}

export const checkIfTextExist = (text: string, editor: vscode.TextEditor) => {
	const document = editor.document;
	const textToSearch = text;
	const regex = new RegExp(textToSearch, 'g');
	const match = document.getText().match(regex);
	if (match) {
		return true;
	}
	return false;
}