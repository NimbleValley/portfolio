const tl = new TimelineMax();

export const scoreboardProjectVideo = document.getElementById('project-scoreboard-video');
scoreboardProjectVideo.loop = true;

const fullIntroductionContainer = document.getElementById('introduction-dark');
const exitIntroductionButton = document.getElementById('exit-intorduction-button');

export var ui_fading = false;
const fader = document.getElementById('fader');
fader.style.display = 'none';

exitIntroductionButton.addEventListener('click', async function () {
    tl.fromTo(fullIntroductionContainer, 0.25, { opacity: 1 }, { opacity: 0 });
    scoreboardProjectVideo.play();
    await sleep(250);
    fullIntroductionContainer.style.display = 'none';
});

export async function fade() {
    await sleep(250);

    ui_fading = true;
    fader.style.display = 'block';

    tl.fromTo(fader, 1, { opacity: 0 }, { opacity: 1 });
    tl.fromTo(fader, 0.5, { opacity: 1 }, { opacity: 0 }, '+=0.5');

    await sleep(2000);
    fader.style.display = 'none';
    ui_fading = false;
}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}