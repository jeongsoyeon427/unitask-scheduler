import { useState, useRef, useEffect } from "react";
import "./SubjectFilter.css";

const SUBJECTS = [
  "전체",
  "액션! ESG 라이프",
  "IT스타트업",
  "4차산업혁명 머신러닝실습",
  "드림업 취업코칭",
  "자바스크립트서버플랫폼",
  "캡스톤디자인 졸업작품",
  "기초워드문서작성법"
];

export default function SubjectFilter({ setFilter }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("전체");
  const ref = useRef();

  const selectItem = (item) => {
    setSelected(item);
    setFilter(item);
    setOpen(false);
  };

  // 드롭다운 외부 클릭 → 닫기
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="sf-wrapper" ref={ref}>
      <div className="sf-selected" onClick={() => setOpen(!open)}>
        {selected}
        <span className={`sf-arrow ${open ? "up" : "down"}`}></span>
      </div>

      {open && (
        <ul className="sf-list">
          {SUBJECTS.map((item) => (
            <li
              key={item}
              className="sf-item"
              onClick={() => selectItem(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}