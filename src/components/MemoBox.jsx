import { useState, useEffect } from "react";
import "./MemoBox.css";

export default function MemoBox() {
  const [memo, setMemo] = useState("");

  // 저장된 메모 불러오기
  useEffect(() => {
    const saved = localStorage.getItem("dailyMemo");
    if (saved) setMemo(saved);
  }, []);

  // 메모 저장
  const saveMemo = () => {
    localStorage.setItem("dailyMemo", memo);
  };

  return (
    <div className="memo-card">
      <h3 className="memo-title">📝 오늘의 메모</h3>

      <textarea
        className="memo-textarea"
        value={memo}
        onChange={(e) => setMemo(e.target.value)}
        placeholder="오늘의 공부 내용, 메모 등을 자유롭게 남겨보고 힘내세요."
      />

      <button className="memo-save-btn" onClick={saveMemo}>
        기록하기
      </button>
    </div>
  );
}