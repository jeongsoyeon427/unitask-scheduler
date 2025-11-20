import "./OverviewCards.css";

export default function OverviewCards({ assignments, exams }) {
  const today = new Date().toISOString().slice(0, 10);

  const todayTasks = assignments.filter((a) => a.date === today).length;
  const undone = assignments.filter((a) => !a.done).length;
  const todayExams = exams.filter((e) => e.date === today).length;

  const doneCount = assignments.filter((a) => a.done).length;
  const total = assignments.length;
  const progress = total === 0 ? 0 : Math.round((doneCount / total) * 100);

  return (
    <div className="oc-grid">

      <div className="oc-card purple">
        <div className="oc-icon">🔥</div>
        <div className="oc-title">오늘 해야 할 일</div>
        <div className="oc-value">{todayTasks}</div>
      </div>

      <div className="oc-card blue">
        <div className="oc-icon">📚</div>
        <div className="oc-title">미완료 과제</div>
        <div className="oc-value">{undone}</div>
      </div>

      <div className="oc-card mint">
        <div className="oc-icon">📅</div>
        <div className="oc-title">오늘 시험 수</div>
        <div className="oc-value">{todayExams}</div>
      </div>

      <div className="oc-card yellow">
        <div className="oc-icon">📈</div>
        <div className="oc-title">진행률</div>
        <div className="oc-value">{progress}%</div>
      </div>

    </div>
  );
}