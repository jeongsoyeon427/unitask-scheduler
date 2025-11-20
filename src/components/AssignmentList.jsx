import "./AssignmentList.css";

export default function AssignmentList({ assignments, toggleAssignment }) {
  return (
    <div className="al-card">
      <h3 className="al-title">📚 과제 목록</h3>

      {assignments.length === 0 && (
        <div className="al-empty">등록된 과제가 없습니다.</div>
      )}

      {assignments.map((item) => (
        <div
          className={`al-item ${item.done ? "done" : ""}`}
          key={item.id}
        >
          <div className="al-left">
            <input
              type="checkbox"
              checked={item.done}
              onChange={() => toggleAssignment(item.id)}
              className="al-check"
            />

            <div className="al-info">
              <div className="al-title-row">
                <span className="al-subject">{item.subject}</span>
                <span className="al-text">{item.title}</span>
              </div>

              <div className="al-meta">
                <span className="al-date">{item.date}</span>
                <span className={`al-level ${item.level}`}>
                  {item.level}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}