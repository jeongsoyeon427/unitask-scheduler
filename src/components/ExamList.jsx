import "./ExamList.css";

export default function ExamList({ exams }) {
  const today = new Date();

  const getDDay = (date) => {
    const target = new Date(date);
    const diff = target - today;
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  };

  return (
    <div className="el-card">
      <h3 className="el-title">📖 시험 일정</h3>

      {exams.length === 0 && (
        <div className="el-empty">등록된 시험이 없습니다.</div>
      )}

      {exams.map((exam) => (
        <div key={exam.id} className="el-item">
          <div className="el-left">
            <span className="el-subject">{exam.subject}</span>
            <span className="el-name">{exam.title}</span>
          </div>

          <div className="el-right">
            <span className="el-date">{exam.date}</span>
            <span className="el-dday">
              D-{getDDay(exam.date)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}