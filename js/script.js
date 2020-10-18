const allTerminals = document.querySelectorAll('[id^="terminal_"]');
const allBusstops = document.querySelectorAll('[id^="stop_"]');
const stop202 = document.querySelector(".stop_202");

// event's tiggered bu hovering over the terminals

document.querySelectorAll('[id^="terminal_"]').forEach(function (teminalElem) {

    const popup = "popup_" + teminalElem.id.split("_")[1];

    const popupElem = document.getElementById(popup)

    teminalElem.addEventListener("mouseover", function (event) {
        popupElem.classList.add("popup-open")
    })

    teminalElem.addEventListener("mouseout", function (event) {
        popupElem.classList.remove("popup-open")
    })

});


// event's tiggered bu hovering over the routelines

document.querySelectorAll('[id^="routeline_"]').forEach(function (routelineElem) {

    const stop = "stop_" + routelineElem.id.split("_")[1];

    const stopElem = document.getElementById(stop)

    routelineElem.addEventListener("mouseover", function (event) {

        event.currentTarget.parentElement.append(event.currentTarget)

        allTerminals.forEach(function (terminal) {
            terminal.parentElement.append(terminal)
            
        })

        allBusstops.forEach(function (busStop) {
            busStop.parentElement.append(busStop)
        })      
        if (stopElem.id === "stop_202") {
            stop202.classList.add("line-active")
            stopElem.classList.add("line-active")
        }
        else{
            stopElem.classList.add("line-active")
        }
    });

    routelineElem.addEventListener("mouseleave", function () {
        if (stopElem.id === "stop_202") {
            stop202.classList.remove("line-active")
            stopElem.classList.remove("line-active")
        }
        else{
            stopElem.classList.remove("line-active")
        }
        
    })

});

    
// event's tiggered bu hovering over the busstops


document.querySelectorAll('[id^="stop_"]').forEach(function (stopElem) {
    const routeLine = "routeline_" + stopElem.id.split("_")[1];

    const routeLineElem = document.getElementById(routeLine)

    stopElem.addEventListener("mouseover", function (event) {
        routeLineElem.parentElement.append(routeLineElem)

        allTerminals.forEach(function (terminal) {
            terminal.parentElement.append(terminal)     
        })

        allBusstops.forEach(function (busStop) {
            busStop.parentElement.append(busStop)
        })
 
        routeLineElem.classList.add("busstop-active")
    });

    stopElem.addEventListener("mouseout", function () {
        routeLineElem.classList.remove("busstop-active")
        
    })

});
