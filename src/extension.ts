'use strict';
import * as vscode from 'vscode';
import * as parser from './parser/parser';
import * as configJSON from 'config.json'

var lenguages:Array<string>;
var currentParser:parser.IParser;

export function activate(context: vscode.ExtensionContext) {
    //TODO load languages from config**************
    //TODO check of current language
    lenguages = (<any>configJSON).languages;
    //***************/
    console.log('Congratulations, your extension "code-outline" is now active!');
    
    vscode.workspace.onDidOpenTextDocument(onOpenDocument);

    vscode.workspace.onDidChangeTextDocument(onChangeDocument);

}

function onOpenDocument(e:vscode.TextDocument):void {
    if(checkAvailableLanguage(e.languageId)) {
        initParser(e.languageId);
    }
}

function onChangeDocument(e:vscode.TextDocumentChangeEvent):void {
    console.log("doc is changed");
    console.log(e);
}

function initParser(languageId:string):void {
    //currentParser = parser.Parser.getParser(languageId);
}

function checkAvailableLanguage(languageId:string):Boolean {
    return lenguages.indexOf(languageId) != -1;
}

export function deactivate() {
    console.log('Congratulations, your extension "code-outline" is now deactive!');
}