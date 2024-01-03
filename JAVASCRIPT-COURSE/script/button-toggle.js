function toggle(className) {
    const innerButton = document.querySelector(className);

    if (innerButton.classList.contains('is-toggled')) {
        innerButton.classList.remove('is-toggled');
    } else {
        innerButton.classList.add('is-toggled');
    }

    if(className === '.js-gaming-button')
    {
        document.querySelector('.js-music-button').classList.remove('is-toggled');
        document.querySelector('.js-tech-button').classList.remove('is-toggled');
    } else if (className === '.js-music-button') {
        document.querySelector('.js-gaming-button').classList.remove('is-toggled');
        document.querySelector('.js-tech-button').classList.remove('is-toggled');
    } else if (className === '.js-tech-button') {
        document.querySelector('.js-gaming-button').classList.remove('is-toggled');
        document.querySelector('.js-music-button').classList.remove('is-toggled');
    }
}