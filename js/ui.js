const tl = new TimelineMax();

export const scoreboardProjectVideo = document.getElementById('project-scoreboard-video');
scoreboardProjectVideo.loop = true;

const fullIntroductionContainer = document.getElementById('introduction-dark');
export const exitIntroductionButton = document.getElementById('exit-intorduction-button');

export var ui_fading = false;
const fader = document.getElementById('fader');
fader.style.display = 'none';

// ABOUT
export const aboutContainer = document.getElementById('about-container');
aboutContainer.style.display = 'none';
const aboutFeatureContainer = document.getElementById('about-feature-container');
aboutFeatureContainer.style.display = 'none';
const aboutFeatures = document.getElementsByClassName('about-feature');
const aboutFeatureTexts = [
    `<p>Robotics:</p>
    <p>I am a third-year member on First Robotics Team #3197, the HexHounds. FRC robotics is a global robotics competition involving skills such as manufacturing, programming, CAD, marketing, etc. As lead programmer, I am in charge of overseeing all control systems as well as programming our team's robot, setting up data collection systems, and more. On our robots, I've used coprocessors like the Orange Pi to run vision algorithms that detect objects, tags, and more. Advanced PID algorithms allow for refined position control. Autonomous features allow the robot to think and drive with no human input. Besides the robot, I also created our team's data collection database in order to give us a strategic advantage in scoping out other teams. Currently on the web, this season it will run on an Android app. Finally, I advise and mentor newer members, teaching them the logic and syntax fundamentals of programming.</p>
    <p id="close-about-feature-button">Close</p>`,
    `<p>Volunteering:</p>
    <p>Through my first 2-3 years in high school, I have volunteered over 200 hours with a variety of organizations. Over multiple summers, I have advised "summer academy" at the local middle school, mentoring kids 5-13 in a variety of ways. At the local elementary schools, I volunteer with my high school's coding club to introduce 5th graders to programming. With the county's historical society, I have helped serve food at 10+ of their summer events. With the local art museum, I have helped vendors set up and arrange items. Volunteering at each of my city's two main festivals, I have served food and helped festival-goers. I have helped out many other organizations as well. Volunteering never ends!</p>
    <p id="close-about-feature-button">Close</p>`,
    `<p>Baseball:</p>
    <p>I love baseball! My favorite sport to watch, I love the physics and data behind it. Being from Wisconsin, I root for the Brewers. I've been able to visit 5 stadiums, my favorite being the historic and oldest stadium, Fenway Park! Baseball inspires a lot of the projects I make, such as my home run Twitter bot as well as my home run derby game. Check those out in the projects section!</p>
    <p id="close-about-feature-button">Close</p>`,
    `<p>School:</p>
    <p>At school, I tend to take the hardest classes as I love the workload and sense of accomplishment when I do well. From Calculus III to psycology to app development, I've taken a wide range of classes. I also do many clubs! Featured above, I dedicate the majority of my time towards robotics, about 30 hours a week during the busiest months. I also do other clubs, including Spanish club, coding club, math team, drone club, and Key club.</p>
    <p id="close-about-feature-button">Close</p>`,
    `<p>Profile & Qualifications:</p>
    <p style="text-align: left;"><strong>Classwork & Classes:</strong>
    -Calculus III through UW Whitewater
    -COSC 2100 Data Structures through Marquette University
    -10+ AP Classes
    -3 College Classes

    <strong>Experience:</strong>
    -Congressional App Challenge winner 2023, 6th district
    -3+ articles written in collaboration with computer vision company Roboflow
    -Cybersecutiry camp through UW Whitewater
    -Cyberpatriot competitor

    <strong>Skills:</strong>
    -Java
    -HTML, CSS
    -Node & vanilla JavaScript
    -Full stack web development
    -Raspberry, orange pi with Kali Linux, Debian, Ubuntu, etc.
    -Infrequent usage of C#, python, C++, & niche languages such as gdscript
    -IDEs such as VS Code, Visual Studio, Eclipse, JetBrains, etc.
    </p>
    <p id="close-about-feature-button">Close</p>`
];
Array.prototype.forEach.call(aboutFeatures, element => {
    element.addEventListener('click', function () {
        switch (this.id) {
            case 'robotics-feature':
                aboutFeatureContainer.innerHTML = aboutFeatureTexts[0];
                break;
            case 'volunteer-feature':
                aboutFeatureContainer.innerHTML = aboutFeatureTexts[1];
                break;
            case 'baseball-feature':
                aboutFeatureContainer.innerHTML = aboutFeatureTexts[2];
                break;
            case 'school-feature':
                aboutFeatureContainer.innerHTML = aboutFeatureTexts[3];
                break;
            case 'profile-feature':
                aboutFeatureContainer.innerHTML = aboutFeatureTexts[4];
                break;
            default:
                break;
        }

        document.getElementById('close-about-feature-button').addEventListener('click', closeAboutFeature);

        aboutFeatureContainer.style.display = 'flex';
        aboutFeatureContainer.scrollTo(0, 0);
        tl.fromTo(aboutFeatureContainer, 0.5, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1 });
    });
});

export async function closeAboutFeature() {
    tl.fromTo(aboutFeatureContainer, 0.5, { scale: 1, opacity: 1 }, { scale: 0, opacity: 0.5 });
    await sleep(500);
    aboutFeatureContainer.style.display = 'none';
}

// PROJECTS
export const projectContainer = document.getElementById('project-container');
projectContainer.style.display = 'none';
export const projectsTitle = document.getElementById('projects-title');

const projectCards = document.getElementsByClassName('project-card');
for(let i = 0; i < projectCards.length; i ++) {
    if(i % 2 == 0) {
        projectCards[i].style.transform = `skew(${Math.random() * 3 }deg, 0deg) rotate(${Math.random() * 10}deg)`;
    } else {
        projectCards[i].style.transform = `skew(${Math.random() * -3 }deg, 0deg) rotate(${Math.random() * -10}deg)`;
    }
    projectCards[i].style.filter = `hue-rotate(${-10 + (Math.random() * 20)}deg)`;
}







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

export async function openAboutSection() {
    fade();

    await sleep(500);

    aboutContainer.style.display = 'block';
    tl.fromTo(aboutContainer, 0.5, { opacity: 0 }, { opacity: 1 }, '-=1.5');

    tl.fromTo('#about-section-title', 1.15, { marginRight: "-25vw", opacity: 0 }, { marginRight: "0", opacity: 1 }, '+=0');
}

export async function openProjectSection() {
    fade();

    await sleep(600);

    projectContainer.style.display = 'flex';
    tl.fromTo(projectContainer, 0.5, { opacity: 0 }, { opacity: 1 }, '-=1.5');

    for(let i = 0; i < projectCards.length; i ++) {
        projectCards[i].style.opacity = 0;
    }

    await sleep(1250);

    for(let i = 0; i < projectCards.length; i ++) {
        tl.fromTo(projectCards[i], 2.5, { marginRight: `${-20+(Math.random() * -100)}vw`, marginTop: `${-50+(Math.random() * -100)}vw`, opacity: 0, scale: 0 }, { marginRight: "0", marginTop: "0", opacity: 1, scale: 0.85 }, '-=2.325');
    }

}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}