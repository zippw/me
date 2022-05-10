document.body.onkeydown = function (o) { const e = o.keyCode || o.which; e === 76 ? changeTheme() : '' };
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    if (themeName === 'theme-dark') {
        document.body.style.background = `url(https://zippw.xyz/img/bg_light.png) #E3E3E8`
    } else {
        document.body.style.background = ``
    }
    for (i = 0; i < document.getElementsByClassName('lt').length; i++) {
        if (themeName == 'theme-dark') {
            document.getElementsByClassName('lt')[i].classList.add('ltOn')
        } else {
            document.getElementsByClassName('lt')[i].classList.remove('ltOn')
        }
    }
    document.getElementById('themeButtonIcon').classList.add(themeName == 'theme-dark' ? 'fa-moon-o' : 'fa-sun-o')
    document.getElementById('themeButtonIcon').classList.remove(themeName == 'theme-dark' ? 'fa-sun-o' : 'fa-moon-o')
    document.getElementById('themeButtonIconm').classList.add(themeName == 'theme-dark' ? 'fa-moon-o' : 'fa-sun-o')
    document.getElementById('themeButtonIconm').classList.remove(themeName == 'theme-dark' ? 'fa-sun-o' : 'fa-moon-o')
    document.getElementById('themeButton').innerText = themeName == 'theme-dark' ? 'Тёмная тема' : 'Светлая тема'
    document.getElementById('themeButtonm').innerText = themeName == 'theme-dark' ? 'Тёмная тема' : 'Светлая тема'
}

function changeTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
    } else {
        setTheme('theme-light');
    }
})();