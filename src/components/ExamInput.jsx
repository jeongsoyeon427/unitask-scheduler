import { useState } from "react";
import "./ExamInput.css";

export default function ExamInput({ addExam }) {
  const [subject, setSubject] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleAdd = () => {
    if (!subject || !title || !date)
      return alert("과목명, 시험명, 날짜는 필수입니다.");

    addExam({
      id: Date.now(),
      subject,
      title,
      date,
    });

    setSubject("");
    setTitle("");
    setDate("");
  };

  return (
    <div className="ex-card">
      <h3 className="ex-title">📝 시험 일정 추가</h3>

      <div className="ex-row">
        <input
          placeholder="과목명"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          placeholder="시험명"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="ex-row">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <button className="ex-btn" onClick={handleAdd}>
        시험 추가하기
      </button>
    </div>
  );
}