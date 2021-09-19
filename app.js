const times = document.querySelector(".grid")
const datepoint = document.querySelectorAll(".dates")


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

get_dates()
get_times()
