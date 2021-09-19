const times = document.querySelector(".grid")
const datepoint = document.querySelectorAll(".dates")
const allTimes = document.querySelectorAll(".square")
const finalSelection = document.querySelector(".confirm")

function get_dates() {
    let now = new Date() // current date
    let months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'] 
    let currentDate = now.getDate()
    
    for (let i = 1; i < 6; i++) {
        day = [months[now.getMonth()], currentDate, 
                now.getFullYear()].join(' ')
        const date = document.getElementById(i + '.0')
        date.textContent = day
        currentDate += 1
    }
}

function get_times() {
    let times = ['07:00-10:00','10:00-12:00','12:00-15:30','15:30-17:30','17:30-20:30', '20:30-22:00']
    for (let i = 1; i < 7; i++) {
        const time = document.getElementById(i)
        var textTime = document.createElement('p')
        textTime.textContent = times[i-1]
        time.append(textTime)
    }
}

function SelectItem(all, ablock){
    all.forEach(className => {
        className.classList.remove('darker')
    })
    let selectedDate = ablock
    selectedDate.classList.add('darker')
    return selectedDate.textContent
}

function getpInput() {
    let phoneNum1 = document.getElementById("lname").value
    if (phoneNum1 === '') {
        phoneNum1 = null
    }
    return phoneNum1
}

function getnInput() {
    let user = document.getElementById("fname").value
    if (user === '') {
        user = null
    }
    return user
}

get_dates()
get_times()
var selectedDate = SelectItem(datepoint, datepoint[0])
var selectedTime = null
var nameUser = null
var phoneNum = null

datepoint.forEach(id => {
    id.addEventListener('click', () =>
        selectedDate = SelectItem(datepoint, id)
    )
    
})

allTimes.forEach(id => {
    id.addEventListener('click', () =>
        selectedTime = SelectItem(allTimes, id)
    ) 
})

finalSelection.addEventListener('click', () => {
    phoneNum = getpInput()
    nameUser = getnInput()
    if (selectedTime === null || nameUser === null || phoneNum === null) {
        console.log(nameUser + ' with phone number ' + phoneNum + ' have chosen ' + selectedTime + ' on ' + selectedDate)
        alert('Please select time and fill in the your name and phone number.')
    } else {
        console.log(nameUser + ' with phone number ' + phoneNum + ' have chosen ' + selectedTime + ' on ' + selectedDate)
        alert('Success!')
    }}
)

