const versionInfo = document.getElementById('version-info');

versionInfo.innerText = 'This application uses Electron ' + window.versions.electron() + ', Chrome ' + window.versions.chrome() + ', and Node.js ' + window.versions.node() + '.';

const func = async () => {
    const response = await window.versions.ping();
    console.log(response);
}

func();