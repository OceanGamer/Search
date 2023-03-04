const optionMenu = document.getElementById('optionsmenu');
const settingsbtn = document.getElementById('settingsbtn');
const searchinput = document.getElementById('srchinput')
const webmotors = {
    google: 'https://www.google.com/search?q=',
    bing: 'https://www.bing.com/search?q=',
    yahoo: 'https://espanol.search.yahoo.com/search;_ylt=AwrEmFFlaQNkbQYkwDYDEQx.;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZAMEc2VjA3Fydw--?fr=sfp&ei=UTF-8&p=',
    duckduckgo: 'https://duckduckgo.com/?q='
};
let openmenu = false;
let actualmotor = document.cookie || 0;
console.log(document.cookie)
optionMenu.style.display = 'none';

function OpenCloseMenu() {
    if (openmenu == false) {
        optionMenu.style.display = 'block';
        openmenu = true;
    }else if (openmenu == true) {
        optionMenu.style.display = 'none';
        openmenu = false;
    }
}

function ChangeBrowser(id) {
    actualmotor = id;
    document.cookie = "browsermotor="+id;
    OpenCloseMenu()
    LoadAll()
}

function LoadAll() {
    switch (actualmotor) {
        case 0:
            settingsbtn.style.backgroundImage = 'url("img/google.png")';
            searchinput.placeholder='Busca algo en Google o escribe una URL';
        break;
        case 1:
            settingsbtn.style.backgroundImage = 'url("img/bing.png")';
            searchinput.placeholder='Busca algo en Bing o escribe una URL';
        break;
        case 2:
            settingsbtn.style.backgroundImage = 'url("img/yahoo.png")';
            searchinput.placeholder='Busca algo en Yahoo o escribe una URL';
        break;
        case 3:
            settingsbtn.style.backgroundImage = 'url("img/duckduckgo.png")';
            searchinput.placeholder='Busca algo en Duckduckgo o escribe una URL';
        break;
    }
}


settingsbtn.addEventListener('click', OpenCloseMenu);
LoadAll();



