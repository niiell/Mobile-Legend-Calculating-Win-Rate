/**
 * Initializes localStorage item 'cookies' if not present.
 */
function checkLS() {
    if (localStorage.getItem('cookies') === null) {
        localStorage.setItem('cookies', 0);
    }
}

/**
 * Handles the result button click event.
 * Calls validation function.
 */
function res() {
    validation();
}

/**
 * Displays rotating welcome messages with contact info.
 */
function welcomeMsg() {
    const welcomeMsgEl = document.querySelector("#welcomeMsg");
    let array = 0;

    const MacengIG = `<a href="https://www.instagram.com/maceeeeng/" target="_blank">maceeeeng</a>`;
    const MacengWA = `<a href="https://api.whatsapp.com/send?phone=6285161602919" target="_blank">6285161602919</a>`;

    let arrayEl = [
        `<p class="animation mb-0 text-truncate">IG: ${MacengIG} / WA: ${MacengWA}</p>`,
    ];
    setInterval(() => {
        welcomeMsgEl.innerHTML = arrayEl[array];

        array++;
        if (array >= arrayEl.length) {
            array = 0;
        }
    }, 5000);
}

// Google Analytics setup
window.dataLayer = window.dataLayer || [];

function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'UA-206846692-3');
