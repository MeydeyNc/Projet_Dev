import React from 'react';

interface CalendarProps {
    month: number;
    year: number;
    calendarContainer: HTMLElement;
    monthYearText: HTMLElement;
    currentMonth: number;
    currentYear: number;
    prevMonth: () => void;
    nextMonth: () => void;
    monthYear: string;
}

const Calendar: React.FC<CalendarProps> = ({ month, year, calendarContainer, monthYearText, currentMonth, currentYear, monthYear }) => {
    const renderCalendar = (month: number, year: number) => {
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
    };

    const createCell = (day: number | string) => {
        const cell = document.createElement('div');
        cell.textContent = day.toString();
        cell.className = 'cell';
        return cell;
    };

    const getMonthName = (month: number) => {
        const monthNames = [
            "Jan", "Fév", "Mar", "Avr", "Mai", "Jui",
            "Jui", "Aoû", "Sep", "Oct", "Nov", "Déc"
        ];
        return monthNames[month];
    };

    const nextMonth = () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar(currentMonth, currentYear);
    };

    const prevMonth = () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar(currentMonth, currentYear);
    };

    renderCalendar(month, year);

    return (
        <div className="calendar">
            <div className="grid grid-cols-1 gap-4">
                <div className="flex justify-center mb-2">
                    <button className="px-2 py-1 mr-1 bg-red-400 text-white rounded hover:bg-red-600" onClick={prevMonth}>Précédent</button>
                    <h2 className="text-sm font-bold px-2 py-2" id="monthYear">{monthYear}</h2>
                    <button className="px-2 py-1 ml-1 bg-red-400 text-white rounded hover:bg-red-600" onClick={nextMonth}>Suivant</button>
                </div>
                <div className="flex">
                    <div className="cell font-bold">Dim</div>
                    <div className="cell font-bold">Lun</div>
                    <div className="cell font-bold">Mar</div>
                    <div className="cell font-bold">Mer</div>
                    <div className="cell font-bold">Jeu</div>
                    <div className="cell font-bold">Ven</div>
                    <div className="cell font-bold">Sam</div>
                </div>
                <div id="calendar" className="flex flex-wrap"></div>
            </div>
        </div>
    );
};

export default Calendar;