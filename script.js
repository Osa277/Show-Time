window.onload = () => {
    const analogClock = document.getElementById("analog-clock");
    const digitalClock = document.getElementById("digital-clock");
    const dateElement = document.getElementById("date"); 

    // Analog Clock
    setInterval(() => {
        const analog = new Date();
        const second = analog.getSeconds() * 6;
        const minute = analog.getMinutes() * 6;
        const hour = (analog.getHours() % 12) * 30 + Math.round(minute / 12);

        document.querySelector(".second-hand-container").style.transform = `rotate(${second}deg)`;
        document.querySelector(".minute-hand-container").style.transform = `rotate(${minute}deg)`;
        document.querySelector(".hour-hand-container").style.transform = `rotate(${hour}deg)`;
    }, 1000);

    // Digital Clock
    setInterval(() => {
        const updateClock = new Date();
        let hours = updateClock.getHours();
        let minutes = updateClock.getMinutes();
        let seconds = updateClock.getSeconds();
        let amPm = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        digitalClock.innerText = `${hours}:${minutes}:${seconds} ${amPm}`;
    }, 1000);

    // Date Display
    setInterval(() => {
        if (dateElement) {  // Check if the element exists
            const now = new Date();
            const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
            dateElement.innerText = now.toLocaleDateString(undefined, options);
        }
    }, 1000);
};