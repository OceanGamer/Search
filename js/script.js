const optionMenu = document.getElementById('optionsmenu');
const backgroundMenu = document.getElementById('backgroundMenu');
const settingsbtn = document.getElementById('settingsbtn');
const searchinput = document.getElementById('srchinput');
const webmotors = {
    '0': 'https://www.google.com/search?q=',
    '1': 'https://www.bing.com/search?q=',
    '2': 'https://espanol.search.yahoo.com/search;_ylt=AwrEmFFlaQNkbQYkwDYDEQx.;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZAMEc2VjA3Fydw--?fr=sfp&ei=UTF-8&p=',
    '3': 'https://duckduckgo.com/?q='
};

const backgrounds = {
    '0': 'img/backgrounds/background.jpg',
    '1': 'img/backgrounds/background2.jpg',
    '2': 'img/backgrounds/background3.jpg',
    '3': 'img/backgrounds/background4.jpg',
    '4': 'img/backgrounds/background5.jpg',
    '5': 'img/backgrounds/background6.jpg',
    
};
let openmenu = false;
let openback = false;
let cookiebrowser = document.cookie;
let separatedCookie = cookiebrowser.split(/,|[=;]/)
let actualmotor = separatedCookie[1] || '0';
let actualbackground = separatedCookie[3] || '0';
optionMenu.style.display = 'none';
backgroundMenu.style.display = 'none';

function OpenCloseMenu() {
    if (openmenu == false) {
        optionMenu.style.display = 'block';
        openmenu = true;
    }else if (openmenu == true) {
        optionMenu.style.display = 'none';
        openmenu = false;
    }
}

function OpenCloseBackgroundMenu() {
    if (openmenu == false) {
        backgroundMenu.style.display = 'block';
        openmenu = true;
    }else if (openmenu == true) {
        backgroundMenu.style.display = 'none';
        openmenu = false;
    }
}

function ChangeBrowser(id) {
    actualmotor = id;
    document.cookie = "browsermotor="+id;
    OpenCloseMenu()
    LoadAll()
}

function ChangeBackground(id) {
    const body = document.getElementById("bodyfull")
    actualbackground = id;
    document.cookie = "browserbackground="+id;
    body.style.backgroundImage = 'url("'+backgrounds[id]+'")';
    OpenCloseBackgroundMenu()
}

function LoadBackground() {
    const body = document.getElementById("bodyfull")
    body.style.backgroundImage = 'url("'+backgrounds[actualbackground]+'")';
}

function LoadAll() {
    switch (actualmotor) {
        case '0':
            settingsbtn.style.backgroundImage = 'url("img/google.png")';
            searchinput.placeholder='Busca algo en Google o escribe una URL';
        break;
        case '1':
            settingsbtn.style.backgroundImage = 'url("img/bing.png")';
            searchinput.placeholder='Busca algo en Bing o escribe una URL';
        break;
        case '2':
            settingsbtn.style.backgroundImage = 'url("img/yahoo.png")';
            searchinput.placeholder='Busca algo en Yahoo o escribe una URL';
        break;
        case '3':
            settingsbtn.style.backgroundImage = 'url("img/DuckDuckGo.png")';
            searchinput.placeholder='Busca algo en Duckduckgo o escribe una URL';
        break;
    }
}

function Search() {
    let searchindex = document.getElementById('srchinput').value;
    separatedindex = searchindex.split(/,|[/.]/)
    let islink = false
    if (separatedindex[0] == 'https:' || separatedindex[0] == 'http:') {
        islink = true
    }
    for (let i = 0; i < separatedindex.length; i++) {
        if (separatedindex[i] == 'com' || separatedindex[i] == 'net' || separatedindex[i] == 'org' || separatedindex[i] == 'io' || separatedindex[i] == 'tk' || separatedindex[i] == 'tv' || separatedindex[i] == 'ru' || separatedindex[i] == 'store') {
            islink = true
        }    
    }
    if (islink == true) {
        if (separatedindex[0] == 'https:' || separatedindex[0] == 'http:') {
            loadPage(searchindex);
        }else{
            loadPage('http://'+searchindex);
        }
    }else{
        loadPage(webmotors[actualmotor]+searchindex);
    }
    
}

function loadPage(url) {
    window.location.href = url;
}


document.addEventListener("keydown", function (event) {
    if (event.key == 'Enter') {
        Search()
    }
});
settingsbtn.addEventListener('click', OpenCloseMenu);
LoadAll();
LoadBackground();



