const {app, BrowserWindow, BrowserView} = require('electron');
const url = require('url');
const path = require('path');

let win

function createWindow() {
    win = new BrowserWindow({width: 800, height: 600, title:"Testing-Browser-View"});
    let view = new BrowserView({
    webPreferences: {
        nodeIntegration: false
    }
    })
    win.setBrowserView(view)
    view.setBounds({ x: 0, y: 0, width: 800, height: 600 })
    view.webContents.loadURL('https://electronjs.org')
}

app.on('ready', createWindow);
