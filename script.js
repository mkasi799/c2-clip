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

    videos.forEach(async (video) => {

        video.currentTime = startTime;

        try {
            await video.play();
        } catch (err) {
            console.error(err);
        }
    });

    /* P2 STARTS TALKING */

    setTimeout(() => {

        if (speakerMic) {
            speakerMic.style.display = "none";
        }

    }, 6000);

    /* P2 STOPS TALKING */

    setTimeout(() => {

        if (speakerMic) {
            speakerMic.style.display = "block";
        }

    }, 16000);

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
                "https://mtroyal.ca1.qualtrics.com/jfe/form/SV_2gALFMRats3XuBw?return=c2";

            }, 500);

        }

    });

});