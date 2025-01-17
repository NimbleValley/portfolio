const tl = new TimelineMax();
const tl2 = new TimelineMax();

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
const projectSummaryContainer = document.getElementById('project-summary-container');
projectSummaryContainer.style.display = 'none';
const projectTitleText = document.getElementById('project-summary-title');

const projectInformationContainer = document.getElementById('project-information-container');
const projectInformationTexts = [
    `<div><a href="https://nimblevalley.github.io/home-run-api/site/" target="_blank">View Project</a>, <a href="https://github.com/NimbleValley/home-run-api/" target="_blank">View Code</a>, and <a href="https://x.com/distancetracker/" target="_blank">View Bot</a></div>
    <h2><span style="font-weight: bold;">Idea:</span> Real-time bot and website for viewing MLB hits in 3d, with ability to switch stadiums to see where hit would have landed elsewhere</h2>
    <h4>The initial vision worked out perfectly. The live update part runs on my laptop and connects to MLB APIs. It then pushes data to my local server, which in turn posts a graphic to Twitter and updates the data files of the website. The hits are then viewable on the website linked above. Check out the components below:</h4>
    <img src="img/project/1.png" alt="Flow chart part 1">
    <img src="img/project/2.png" alt="Flow chart part 2">
    <h4>The site then references stored CSV files. Using THREE.js, it loads in stadium models provided by MLB themselves and visualizes selected hits by the user.</h4>
    `,
    `<div><a href="https://github.com/NimbleValley/Scouting2024" target="_blank">View Code</a></div>
    <h2><span style="font-weight: bold;">Use:</span> Data collection website for use with robotics team. In competitions, high ranking teams must draft other teams. In order to gain a competitive advantage, it is important to have numerous ways to analyze opponents and possible teammates.</h2>
    <h2><span style="font-weight: bold;">Speed:</span> By not basing system around Google forms but instead a custom solution, it is much faster to upload data, as there are less security features and redirects. While less secure, this is important at competitions with limited access to wifi and cellular data.</h2>
    <h2><span style="font-weight: bold;">Insights:</span> Data can be analyzed in many layers. Head to head comparisons of other teams, hypothetical simulations, and percentile graphs help eliminate time spent discussing possible partners and add to strategy.</h2>
    <h4>On the client end, a custom HTML page allows easy data collection during matches. Then, the data is posted to a Google sheet using a custom Apps script. This allows for backups in case data is somehow corrupted or mismanaged. A separate static HTML page then loads a CSV file of the data hosted by Google that updates with the spereadsheet. Tools such as Chart.js allow for deep visualizations, insights, and analaysis.</h4>
    <h4>Why not use a language such as R or python? JavaScript is the language I've used most and a big requirement for this project was to be hosted on the web. Additionally, using a static page keeps the price to nothing versus having some backend do calculations. However, the client side form is being updated to run on an Android app this year instead of a website.</h4>
    `,
    `<h2><span style="font-weight: bold;">Idea:</span> Create utility to determine distances from home plate on baeball fields using image segmentation. User can click anywhere on image and recieve a distance.</h2>
    <h2>Roboflow, an open source project for image annotation and model training, was used to annotate image segmentation models. The model was then trained using YOLOv8.</h2>
    <h2>A very detailed explanation can be found in the GitHub READ.md linked above.</h2>
    <h4>
        <span style="font-weight: bold;">Summary:</span> The project cotnains a backend using Node.js and a front end page. The ends communicate using Socket.io. 
        <br><br>
        <span style="font-weight: bold;">Image Segmentation: </span>
        A trained YOLOv8 segmentation model identifies potential points along the infield. These points are processed through a connection between the client and server.
        <br><br>
        <span style="font-weight: bold;">User Input and Point Selection: </span>
        Users select inner infield points to form bouding lines between bases. The intersection of these lines are the location of bases on the baseball diamond.
        <br><br>
        <span style="font-weight: bold;">Field Square Formation:</span>
        The intersections of selected lines form a theoretical square, approximated to have sides of 86 feet. Vanishing points (two primary and one middle) are calculated to establish perspective lines.
        <br><br>
        <span style="font-weight: bold;">Grid Construction:</span>
        Additional squares are iteratively drawn up the third base line and along the first base line using intersection points. A grid of 25 squares is created, aligned with the camera's perspective.
        <br><br>
        <span style="font-weight: bold;">World Coordinates:</span>
        World coordinates are assigned to points, starting with home plate at (0, 0). These are calculated by adding the 86-foot constant to prior coordinates.
        <br><br>
        <span style="font-weight: bold;">Distance Calculation:</span>
        When a user clicks, the algorithm locates the clicked point in the grid. If found, the large square containing the point is subdivided 10 times, with each iteration more precisely finding location. The final distance is computed using the Pythagorean theorem.
        <br><br>
        <span style="font-weight: bold;">Outfield Spot Segmentation: </span>
        The image is segmented again to identify points along the outfield wall. While not always accurate, this works in well-lit, high-contrast environments.
        <br><br>
        The process combines geometry, iteration, and image segmentation to create a perspective-aligned grid and measure distances within the image.</h4>
        `,
        `<div><a href="https://github.com/NimbleValley/home-run-derby" target="_blank">View Code</a> and <a href="https://nimblevalley.github.io/home-run-derby/" target="_blank">View Project</a></div>
        <h2><span style="font-weight: bold;">Summary:</span> Light and fun 3D web game! Play in a home run derby with scoring and physics. Hit as many home runs as possible. The game ends after 10 outs.</h2>
        <h4>Developed using THREE.js for 3D rendering and Ammo.js for physics, creating a 3D game for the web was both diffcult and easy. On one hand, creating a smooth running 3D web game was a challenge. It's much easier to use a real game engine or make a stand alone executable. On the other hand, THREE and Ammo made it somewhat easy to create this game. Although simple, the logic behind it was a great exercise to learn more about these cool web tools. Projects like this led me to creating this 3D portfolio!</h4>
        `,
        `<div><a href="https://github.com/NimbleValley/auto-scout" target="_blank">View Code</a> and <a href="https://blog.roboflow.com/robot-path-mapping/" target="_blank">View Article</a></div>
        <h2><span style="font-weight: bold;">Summary:</span> Designed for FIRST robotics competition, this tool allows teams to track robot's path using match footage, similar to player trackers in soccer and baseball. It allows for deeper strategy and analysis of opponents as well as team mates.</h2>
        <h4>This project has multiple parts: A <span style="font-weight: bold;">node.js</span> server to communicate with the front end, a trained <span style="font-weight: bold;">YOLOv8 object segmentation model</span> to detect field areas, and one more trained <span style="font-weight: bold;">YOLOv8 object detection model</span> to detect robots on the field. Then, it uses an object tracker to detect paths and poses as the video progresses. Using Roboflow's inference tools, a video is sent to their servers to segment frames. The video is processed beforehand using <span style="font-weight: bold;">FFMPEG</span>. Then, a user interface allows teams to analyze opponents' robot paths. </h4>
    `,
    `<div><a href="https://github.com/adamwilson24/congressional-app-challenge-2022" target="_blank">View Code</a>, <a href="https://adamwilson24.github.io/congressional-app-challenge-2022/" target="_blank">View Website</a>, and <a href="https://www.congressionalappchallenge.us/22-WI06/" target="_blank">View Challenge Page</a></div>
    <h2><span style="font-weight: bold;">Creation:</span> Created on a team of three as a submission to the 2022 Congressional App Challenge. As the main team programmer, this served as one of my first websites.</h2>
    <h2><span style="font-weight: bold;">Our project won FIRST PLACE in Wisconsin's 6th District, allowing us to travel to the U.S. capital building to share our creation.</span></h2>
    <h4>Description: Mathware is an app that will start users with simple questions and work its way up in difficulty as the user progresses. Levels are locked until the user completes the previous level to ensure that the user has a fulfilling learning experience.</h4>`
]

const closeProjectButton = document.getElementById('close-project-button');
closeProjectButton.addEventListener('click', async function() {
    document.getElementById('home-button').style.display = 'inline';
    tl.fromTo(projectSummaryContainer, 0.5, {scaleX: `1`}, {scaleX: `0`, ease: "bounce.out" });
    await sleep(500);
    projectSummaryContainer.style.display = 'none';
});

const projectCards = document.getElementsByClassName('project-card');
for(let i = 0; i < projectCards.length; i ++) {
    if(i % 2 == 0) {
        projectCards[i].style.transform = `skew(${Math.random() * 3 }deg, 0deg) rotate(${Math.random() * 10}deg)`;
    } else {
        projectCards[i].style.transform = `skew(${Math.random() * -3 }deg, 0deg) rotate(${Math.random() * -10}deg)`;
    }
    projectCards[i].style.filter = `hue-rotate(${-10 + (Math.random() * 20)}deg)`;

    projectCards[i].addEventListener('click', function(e) {
        console.log(projectSummaryContainer.style.display == 'flex');
        if(projectSummaryContainer.style.display == 'flex') {
            return;
        }
        projectInformationContainer.innerHTML = '';
        projectInformationContainer.innerHTML = projectInformationTexts[parseInt(this.getAttribute('data-id'))];
        projectInformationContainer.opacity = 0;

        document.getElementById('home-button').style.display = 'none';

        projectTitleText.innerText = this.getElementsByTagName('h3')[0].innerText;

        projectSummaryContainer.style.width = 0;
        projectSummaryContainer.style.height = 0;

        let x = e.clientX;
        let y = e.clientY;

        projectTitleText.opacity = 0;
        projectSummaryContainer.style.transform = `scale(1, 1)`;

        projectSummaryContainer.style.display = 'flex';
        tl2.fromTo(projectSummaryContainer, 0.85, { left: `${x/window.innerWidth*100}vw`, top: `${y/window.innerHeight*100}vh`, width: 0, height: 0}, {left: `5vw`, top: `5vh`, width: '90vw', height: '90vh', ease: "bounce.out" });
        tl2.fromTo(projectTitleText, 0.4, { opacity: 0, scaleX: 0.5, scaleY: 0.5}, {opacity: 1, scaleX: 1, scaleY: 1 });
        tl2.fromTo(projectInformationContainer, 0.5, {opacity: 0}, {opacity: 1 }, "-=0.15");
    });
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
        tl.fromTo(projectCards[i], 2.5, {opacity: 0, scale: 0.85 }, { marginRight: "0", marginTop: "0", opacity: 1, scale: 0.85 }, '-=2.325');
    }

}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}