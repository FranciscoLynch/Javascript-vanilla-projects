// Select the div with the id named clock
const clock = document.querySelector('#clock');

// Function to get the current hour
const getCurrentHour = () => {

    // get the complete date
    const currentDate = new Date();
    // make an object with the hour minute and second from the currentDate
    const currentHour = {
        hour: currentDate.getHours(),
        minute: currentDate.getMinutes(),
        second: currentDate.getSeconds()
    }

    // show in the div with the id named clock the value of the hour minute and second
    clock.innerHTML = `${currentHour.hour} : ${currentHour.minute} : ${currentHour.second}`;
}

// run the function
getCurrentHour();

// set the interval to 200(0,2seg) to update constantly the function and constantly update the current hour in the html
setInterval(getCurrentHour, 200)