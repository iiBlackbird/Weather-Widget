const {app, Menu, BrowserWindow, ipcMain} = require('electron')

const path = require('node:path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 400,
        height: 600,
        frame: false,
        //titleBarStyle: 'hidden',
        //...(process.platform !== 'darwin' ? { titleBarOverlay: true } : {}),
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            enableRemoteModule: false
        }

    });

    win.loadFile('index.html');
}

app.whenReady().then(() => {
    ipcMain.handle('ping', () => 'pong');
    Menu.setApplicationMenu(null);
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});