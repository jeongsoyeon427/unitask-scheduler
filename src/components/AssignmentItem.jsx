const AssignmentItem = ({ item, toggleComplete }) => {
  const daysLeft = item.deadline
    ? Math.ceil((new Date(item.deadline) - new Date()) / (1000 * 60 * 60 * 24))
    : null;

  return (
    <div className={`task-item ${item.completed ? "done" : ""}`}>
      <div>
        <strong>[{item.subject}]</strong> {item.title}
        <div className="meta">
          마감일: {item.deadline || "없음"}  
          / 난이도: {item.difficulty}  
          / 예상 시간: {item.time || 0}분
        </div>
        {daysLeft !== null && <div className="meta">D-{daysLeft}</div>}
      </div>

      <input type="checkbox" checked={item.completed} onChange={toggleComplete} />
    </div>
  );
};

export default AssignmentItem;