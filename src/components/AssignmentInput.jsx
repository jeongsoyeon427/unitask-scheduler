import { useState } from "react";
import "./AssignmentInput.css";

export default function AssignmentInput({ addAssignment }) {
  const [subject, setSubject] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [level, setLevel] = useState("보통");
  const [time, setTime] = useState("");

  const handleAdd = () => {
    if (!subject || !title || !date)
      return alert("과목명, 제목, 날짜는 필수입니다.");

    addAssignment({
      id: Date.now(),
      subject,
      title,
      date,
      level,
      time,
      done: false,
    });

    setSubject("");
    setTitle("");
    setDate("");
    setLevel("보통");
    setTime("");
  };

  return (
    <div className="ai-card">
      <h3 className="ai-title">📘 과제 추가</h3>

      <div className="ai-row">
        <input
          placeholder="과목명"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <input
          placeholder="과제 제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="ai-row">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <select value={level} onChange={(e) => setLevel(e.target.value)}>
          <option value="쉬움">쉬움</option>
          <option value="보통">보통</option>
          <option value="어려움">어려움</option>
        </select>

        <input
          placeholder="예상 시간(분)"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>

      <button className="ai-btn" onClick={handleAdd}>
        추가하기
      </button>
    </div>
  );
}