const clock = document.querySelector('#clock');

const getCurrentHour = () => {

    const currentDate = new Date();
    const currentHour = {
        hour: currentDate.getHours(),
        minute: currentDate.getMinutes(),
        second: currentDate.getSeconds()
    }

    clock.innerHTML = `${currentHour.hour} : ${currentHour.minute} : ${currentHour.second}`;
    console.log('updated')
}

getCurrentHour();


setInterval(getCurrentHour, 200)