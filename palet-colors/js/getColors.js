const getColors = () => {
    colorCounter.innerHTML = colorList.length;

    list.innerHTML = ""; 

    for (const color of colorList) {
        list.innerHTML += `<li style="background: ${color}">${color}</li>`
    }
}