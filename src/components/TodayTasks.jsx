import "./TodayTasks.css";

export default function TodayTasks({ assignments, exams }) {
  const today = new Date().toISOString().slice(0, 10);

  const todayAssignments = assignments.filter((a) => a.date === today);
  const todayExams = exams.filter((e) => e.date === today);

  return (
    <div className="tt-card">
      <h3 className="tt-title">🔥 오늘 해야 할 일</h3>

      {todayAssignments.length === 0 && todayExams.length === 0 && (
        <div className="tt-empty">오늘 일정이 없습니다.</div>
      )}

      {todayAssignments.map((a) => (
        <div key={a.id} className="tt-item">
          📘 {a.subject} - {a.title}
        </div>
      ))}

      {todayExams.map((e) => (
        <div key={e.id} className="tt-item">
          📝 {e.subject} - {e.title} (시험)
        </div>
      ))}
    </div>
  );
}