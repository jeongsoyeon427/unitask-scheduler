import { useState } from "react";
import "./CalendarView.css";

export default function CalendarView() {
  const today = new Date();
  const todayString = today.toISOString().slice(0, 10); // YYYY-MM-DD

  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); // 0 ~ 11

  // 이전 달 이동
  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  // 다음 달 이동
  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  // 달력 날짜 생성 함수
  const generateCalendar = () => {
    const firstDay = new Date(year, month, 1).getDay(); // 요일 (0:일 ~ 6:토)
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    let days = [];

    // 👉 첫 주 앞부분 (이전 달 날짜)
    for (let i = firstDay === 0 ? 6 : firstDay - 1; i > 0; i--) {
      days.push({
        date: daysInPrevMonth - i + 1,
        fullDate: "",
        currentMonth: false,
        weekday: (7 - i) % 7,
      });
    }

    // 👉 이번 달 날짜
    for (let i = 1; i <= daysInMonth; i++) {
      const full = new Date(year, month, i).toISOString().slice(0, 10);
      days.push({
        date: i,
        fullDate: full,
        currentMonth: true,
        weekday: new Date(year, month, i).getDay(),
      });
    }

    // 👉 마지막 주 뒷부분 (다음 달 날짜)
    while (days.length % 7 !== 0) {
      days.push({
        date: days.length + 1,
        fullDate: "",
        currentMonth: false,
        weekday: days.length % 7,
      });
    }

    return days;
  };

  const days = generateCalendar();

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={prevMonth}>‹</button>
        <h2>{year}년 {month + 1}월</h2>
        <button onClick={nextMonth}>›</button>
      </div>

      <div className="calendar-grid">
        {["월", "화", "수", "목", "금", "토", "일"].map((d) => (
          <div className="calendar-day-name" key={d}>{d}</div>
        ))}

        {days.map((day, index) => {
          const isToday = day.fullDate === todayString;
          const weekendClass =
            day.weekday === 5 ? "saturday" :
            day.weekday === 6 ? "sunday" : "";
          const disabledClass = day.currentMonth ? "" : "disabled";

          return (
            <div
              key={index}
              className={`calendar-day ${weekendClass} ${disabledClass} ${
                isToday ? "today" : ""
              }`}
            >
              {day.date}
            </div>
          );
        })}
      </div>
    </div>
  );
}