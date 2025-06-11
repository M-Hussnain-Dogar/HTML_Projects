document.addEventListener("DOMContentLoaded", function () {
    const hours = 12;
    const minute = 60;
    const second = 60;
    let time = "AM";
    let m = 0, h = 0, s = 0;
    let intervalId = null;

    const Button = document.getElementById("Button");
    const Reset = document.getElementById("Reset");
    const display = document.getElementById("display");

    function updateDisplay() {
        display.innerHTML =
            `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')} ${time}`;
    }

    Button.addEventListener("click", function () {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
            Button.innerText = "Start";
        } else {
            intervalId = setInterval(() => {
                s++;
                if (s >= second) {
                    s = 0;
                    m++;
                }
                if (m >= minute) {
                    m = 0;
                    h++;
                }
                if (h >= hours) {
                    h = 0;
                    time = time === "AM" ? "PM" : "AM";
                }
                updateDisplay();
            }, 1000);
            Button.innerText = "Stop";
        }
    });

    Reset.addEventListener("click", function () {
        clearInterval(intervalId);
        intervalId = null;
        h = m = s = 0;
        time = "AM";
        Button.innerText = "Start";
        updateDisplay();
    });

    // Initialize display
    updateDisplay();
});
