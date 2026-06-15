const startTime = 30;
const endTime = 60;

/* ELEMENTS */

const startScreen =
    document.getElementById("startScreen");

const continueButton =
    document.getElementById("continueButton");

const meetingInterface =
    document.querySelector(".meeting-interface");

const videos =
    document.querySelectorAll("video");

const speakerMic =
    document.getElementById("speakerMic");

/* HIDE MEETING UNTIL CLICK */

meetingInterface.style.display = "none";

/* START STUDY */

continueButton.addEventListener("click", () => {

    /* HIDE INSTRUCTION PAGE */

    startScreen.style.display = "none";

    /* SHOW MEETING */

    meetingInterface.style.display = "flex";

    /* START ALL VIDEOS AT 30 SECONDS */

    videos.forEach(video => {

        video.currentTime = startTime;

        video.play();

    });

    /* P2 STARTS TALKING */

    setTimeout(() => {

        if (speakerMic) {
            speakerMic.style.display = "none";
        }

    }, 5000);

    /* P2 STOPS TALKING */

    setTimeout(() => {

        if (speakerMic) {
            speakerMic.style.display = "block";
        }

    }, 10000);

});

/* STOP VIDEOS AT 60 SECONDS */

let redirected = false;

videos.forEach(video => {

    video.addEventListener("timeupdate", () => {

        if (
            video.currentTime >= endTime &&
            !redirected
        ) {

            redirected = true;

            setTimeout(() => {

                window.location.href =
                    "https://mtroyal.ca1.qualtrics.com/jfe/form/SV_2gALFMRats3XuBw";

            }, 500);

        }

    });

});