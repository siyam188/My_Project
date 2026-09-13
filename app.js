
/* =========================
   GET ELEMENTS
========================= */

const openBtn =
    document.getElementById("openBtn");

const gift =
    document.getElementById("gift");

const welcome =
    document.getElementById("welcome");

const main =
    document.getElementById("main");

const wishBtn =
    document.getElementById("wishBtn");

const popup =
    document.getElementById("popup");

const closePopup =
    document.getElementById("closePopup");

const musicBtn =
    document.getElementById("musicBtn");



/* =========================
   BIRTHDAY MESSAGE
========================= */

const message =
    "Happy Birthday to the most beautiful person in my world. ❤️ You make my life brighter, my heart happier, and every moment more special. I hope your beautiful smile stays forever. May every dream of yours come true. I love you more than words can explain. 💖";


let index = 0;



/* =========================
   TYPEWRITER
========================= */

function typeWriter() {

    const text =
        document.getElementById(
            "typewriter"
        );


    if (index < message.length) {

        text.innerHTML +=
            message.charAt(index);

        index++;

        setTimeout(
            typeWriter,
            35
        );

    }

}



/* =========================
   OPEN BIRTHDAY
========================= */

function openBirthday() {

    welcome.style.display =
        "none";


    main.style.display =
        "block";


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });


    index = 0;


    document.getElementById(
        "typewriter"
    ).innerHTML = "";


    typeWriter();


    createConfetti();

}



/* Open button */

openBtn.addEventListener(
    "click",
    openBirthday
);


/* Gift */

gift.addEventListener(
    "click",
    openBirthday
);



/* =========================
   COUNTDOWN
========================= */

/*
    Birthday:
    14 September 2027
    2:00 PM
*/

const birthdayDate =
    new Date(
        "2027-09-14 14:00:00"
    ).getTime();



function updateCountdown() {

    const now =
        new Date().getTime();


    const distance =
        birthdayDate - now;



    /* Birthday reached */

    if (distance <= 0) {

        document.getElementById(
            "days"
        ).innerText = "00";


        document.getElementById(
            "hours"
        ).innerText = "00";


        document.getElementById(
            "minutes"
        ).innerText = "00";


        document.getElementById(
            "seconds"
        ).innerText = "00";


        return;

    }



    /* Days */

    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );



    /* Hours */

    const hours =
        Math.floor(

            (
                distance %
                (1000 * 60 * 60 * 24)
            )
            /
            (1000 * 60 * 60)

        );



    /* Minutes */

    const minutes =
        Math.floor(

            (
                distance %
                (1000 * 60 * 60)
            )
            /
            (1000 * 60)

        );



    /* Seconds */

    const seconds =
        Math.floor(

            (
                distance %
                (1000 * 60)
            )
            /
            1000

        );



    /* Display */

    document.getElementById(
        "days"
    ).innerText =
        String(days)
        .padStart(2, "0");


    document.getElementById(
        "hours"
    ).innerText =
        String(hours)
        .padStart(2, "0");


    document.getElementById(
        "minutes"
    ).innerText =
        String(minutes)
        .padStart(2, "0");


    document.getElementById(
        "seconds"
    ).innerText =
        String(seconds)
        .padStart(2, "0");

}



/* Update every second */

setInterval(
    updateCountdown,
    1000
);


/* Initial */

updateCountdown();



/* =========================
   WISH POPUP
========================= */

wishBtn.addEventListener(
    "click",
    function () {

        popup.style.display =
            "flex";


        createConfetti();

    }
);



/* Close */

closePopup.addEventListener(
    "click",
    function () {

        popup.style.display =
            "none";

    }
);



/* Click outside */

popup.addEventListener(
    "click",
    function (event) {

        if (
            event.target === popup
        ) {

            popup.style.display =
                "none";

        }

    }
);



/* =========================
   CONFETTI
========================= */

function createConfetti() {

    const items = [

        "❤️",
        "💕",
        "💖",
        "✨",
        "🎉",
        "🎊",
        "🌹",
        "🌸",
        "🌷",
        "💗"

    ];


    for (
        let i = 0;
        i < 70;
        i++
    ) {


        const item =
            document.createElement(
                "div"
            );


        item.className =
            "confetti";


        item.innerText =
            items[
                Math.floor(
                    Math.random() *
                    items.length
                )
            ];


        item.style.left =
            Math.random() *
            100 +
            "vw";


        item.style.fontSize =
            Math.random() * 18 +
            12 +
            "px";


        item.style.animationDuration =
            Math.random() * 3 +
            3 +
            "s";


        document.body.appendChild(
            item
        );


        setTimeout(
            () => {

                item.remove();

            },
            7000
        );

    }

}



/* =========================
   FLOATING FLOWERS
========================= */

function createFlowers() {

    const flowers = [

        "🌹",
        "🌸",
        "🌷",
        "🌺",
        "💐",
        "🌼"

    ];


    for (
        let i = 0;
        i < 15;
        i++
    ) {


        const flower =
            document.createElement(
                "div"
            );


        flower.className =
            "flower";


        flower.innerText =
            flowers[
                Math.floor(
                    Math.random() *
                    flowers.length
                )
            ];


        flower.style.left =
            Math.random() *
            100 +
            "vw";


        flower.style.fontSize =
            Math.random() * 20 +
            20 +
            "px";


        flower.style.animationDuration =
            Math.random() * 5 +
            5 +
            "s";


        flower.style.animationDelay =
            Math.random() * 3 +
            "s";


        document.body.appendChild(
            flower
        );


        setTimeout(
            () => {

                flower.remove();

            },
            12000
        );

    }

}


/* Create flowers */

setInterval(
    createFlowers,
    4000
);


createFlowers();



/* =========================
   MUSIC BUTTON
========================= */

let musicPlaying = false;


musicBtn.addEventListener(
    "click",
    function () {

        musicPlaying =
            !musicPlaying;


        if (musicPlaying) {

            musicBtn.innerText =
                "🔊";


            alert(
                "🎵 Music button is ready!\n\n" +
                "You can add your own romantic MP3 file."
            );


        } else {

            musicBtn.innerText =
                "🎵";

        }

    }
);