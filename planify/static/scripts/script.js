const button = document.querySelector('.relative button');
const menu = document.querySelector('.relative .hidden');
button.addEventListener('mouseenter', () => {
    menu.classList.remove('hidden');
});

button.addEventListener('mouseleave', () => {
    menu.classList.add('hidden');
});


function updateClock() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    const hourElement = document.getElementById('hour');
    const minuteElement = document.getElementById('minute');
    const secondElement = document.getElementById('second');
    const dateElement = document.getElementById('date');
    const hourAngle = hour * 30 + (0.5 * minute);
    const minuteAngle = minute * 6 + (0.1 * second);
    const secondAngle = second * 6;

    hourElement.style.transform = `rotate(${hourAngle}deg)`;
    minuteElement.style.transform = `rotate(${minuteAngle}deg)`;
    secondElement.style.transform = `rotate(${secondAngle}deg)`;

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = now.toLocaleDateString('fr-FR', options);
}

setInterval(updateClock, 1000);

updateClock();
const monthYearText = document.getElementById('monthYear');
const calendarContainer = document.getElementById('calendar');

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

function renderCalendar(month, year) {
    calendarContainer.innerHTML = '';
    monthYearText.textContent = `${getMonthName(month)} ${year}`;

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const startDay = firstDayOfMonth.getDay();
    const daysInMonth = lastDayOfMonth.getDate();

    let cellIndex = 0;

    for (let i = 0; i < startDay; i++) {
        const cell = createCell('');
        calendarContainer.appendChild(cell);
        cellIndex++;
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const cell = createCell(day);
        calendarContainer.appendChild(cell);
        cellIndex++;
    }

    while (cellIndex % 7 !== 0) {
        const cell = createCell('');
        calendarContainer.appendChild(cell);
        cellIndex++;
    }
}

function createCell(day) {
    const cell = document.createElement('div');
    cell.textContent = day;
    cell.className = 'cell';
    return cell;
}

function getMonthName(month) {
    const monthNames = [
        "Jan", "Fév", "Mar", "Avr", "Mai", "Jui",
        "Jui", "Aoû", "Sep", "Oct", "Nov", "Déc"
    ];
    return monthNames[month];
}

function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar(currentMonth, currentYear);
}

function prevMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar(currentMonth, currentYear);
}

renderCalendar(currentMonth, currentYear);