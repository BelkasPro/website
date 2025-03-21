window.onload = function() {
    const overlay = document.getElementById('overlay');
    const logonSound = new Audio('aud/Logon.mp3');
    const blackScreen = document.createElement('div');
    const windowElement = document.getElementById('window');
    const explorerElement = document.getElementById('explorerWindow');
    windowElement.style.display = 'none';
    explorerElement.style.display = 'none';

    blackScreen.style.position = 'fixed';
    blackScreen.style.top = '0';
    blackScreen.style.left = '0';
    blackScreen.style.width = '100%';
    blackScreen.style.height = '100%';
    blackScreen.style.backgroundColor = 'black';
    blackScreen.style.opacity = '0';
    blackScreen.style.transition = 'opacity 0.2s';
    document.body.appendChild(blackScreen);

    setTimeout(() => {
        blackScreen.style.opacity = '1';

        logonSound.play();

        setTimeout(() => {
            logonSound.pause();
            logonSound.currentTime = 0;
        }, 6000);

        overlay.style.transition = 'opacity 0.6s';
        overlay.style.opacity = 0;

        setTimeout(() => {
            document.body.removeChild(overlay);

            setTimeout(() => {
                blackScreen.style.opacity = '0';

                setTimeout(() => {
                    document.body.removeChild(blackScreen);
                    
                    setTimeout(() => {
                        windowElement.classList.add('show');
                        logonSound.play();
                    }, 1000);
                }, 500);
            }, 100);
        }, 600);
    }, 1500);
};
