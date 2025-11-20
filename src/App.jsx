import { useState, useEffect } from "react";
import "./App.css";
import "./styles.css";

import SubjectFilter from "./components/SubjectFilter";
import OverviewCards from "./components/OverviewCards";
import TodayTasks from "./components/TodayTasks";
import AssignmentInput from "./components/AssignmentInput";
import AssignmentList from "./components/AssignmentList";
import ExamInput from "./components/ExamInput";
import ExamList from "./components/ExamList";
import DashboardChart from "./components/DashboardChart";
import CalendarView from "./components/CalendarView";

export default function App() {
  const [assignments, setAssignments] = useState([]);
  const [exams, setExams] = useState([]);
  const [filter, setFilter] = useState("전체");

  /* ⭐ 다크 모드 상태 */
  const [darkTheme, setDarkTheme] = useState(false);

  /* ⭐ body 태그에 dark-theme 클래스를 토글 */
  useEffect(() => {
    document.body.classList.toggle("dark-theme", darkTheme);
  }, [darkTheme]);

  const addAssignment = (newItem) => {
    setAssignments([...assignments, newItem]);
  };

  const toggleAssignment = (id) => {
    setAssignments(
      assignments.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  const addExam = (newExam) => {
    setExams([...exams, newExam]);
  };

  const filteredAssignments =
    filter === "전체"
      ? assignments
      : assignments.filter((a) => a.subject === filter);

  return (
    <div className="dashboard-wrapper">
      {/* =========================
          헤더
      ========================== */}
      <header className="dashboard-header">
        <h1>📁 UniTask Scheduler</h1>

        <div className="top-controls">
          <SubjectFilter setFilter={setFilter} />

          {/* ⭐ 다크 모드 버튼 */}
          <button onClick={() => setDarkTheme(!darkTheme)}>
            {darkTheme ? "☀ 라이트 모드" : "🌙 다크 모드"}
          </button>
        </div>
      </header>

      {/* =========================
          상단 요약 카드
      ========================== */}
      <div className="dashboard-top">
        <OverviewCards assignments={assignments} exams={exams} />
      </div>

      {/* 오늘 해야 할 일 */}
      <section className="section-card">
        <TodayTasks assignments={assignments} exams={exams} />
      </section>

      {/* =========================
          메인 2열 레이아웃
      ========================== */}
      <div className="main-grid">

        {/* ------- 왼쪽 컬럼 ------- */}
        <div className="left-column">
          <section className="section-card">
            <AssignmentInput addAssignment={addAssignment} />
          </section>

          <section className="section-card">
            <AssignmentList
              assignments={filteredAssignments}
              toggleAssignment={toggleAssignment}
            />
          </section>

          <section className="section-card">
            <ExamInput addExam={addExam} />
          </section>

          <section className="section-card">
            <ExamList exams={exams} />
          </section>
        </div>

        {/* ------- 오른쪽 컬럼 ------- */}
        <div className="right-column">
          <section className="section-card">
            <DashboardChart assignments={assignments} exams={exams} />
          </section>

          {/* ❗ CalendarView는 section-card로 감싸지 않는다 */}
          <CalendarView />
        </div>
      </div>
    </div>
  );
}