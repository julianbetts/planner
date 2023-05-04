const currentEl = document.querySelector("#date")

currentEl.textContent = moment().format('LL')




var currentHour = moment().hours()
var timeblock = document.querySelectorAll('.time-block')

timeblock.forEach(element => {
    var id = Number(element.getAttribute('id').split('-')[1])
    if (id < currentHour) {
        element.classList.add('past')
    }
    else if (id == currentHour) {
        element.classList.add('present')
    }
    else {
        element.classList.add('future')
    }
});

//save button, auto save on browser