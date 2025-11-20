import React from "react";
import "./DashboardChart.css";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

export default function DashboardChart({ assignments, exams }) {
  const doneCount = assignments.filter((a) => a.done).length;
  const notDoneCount = assignments.length - doneCount;

  const examLabels = exams.map((exam) => exam.subject);
  const examCounts = exams.map(() => 1);

  const doughnutData = {
    labels: ["완료", "미완료"],
    datasets: [
      {
        data: [doneCount, notDoneCount],
        backgroundColor: ["#7c4dff", "#e0d4ff"],
        borderWidth: 0
      }
    ]
  };

  const barData = {
    labels: examLabels.length > 0 ? examLabels : ["시험 없음"],
    datasets: [
      {
        label: "시험 수",
        data: examCounts.length > 0 ? examCounts : [0],
        backgroundColor: "#7c4dff"
      }
    ]
  };

  // --------------------------------------------------------
  // ✔ 방법 2: 데이터 없을 때 "빈 상태 UI"를 보여주는 코드
  // --------------------------------------------------------
  if (assignments.length === 0 && exams.length === 0) {
    return (
      <div className="dc-card empty">
        <h3 className="dc-title">📊 학습 대시보드</h3>

        <div className="empty-box">
          <p>아직 등록된 과제/시험이 없습니다.</p>
          <p>좌측 입력창에서 새로운 과제나 시험을 추가해 주세요!</p>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------

  return (
    <div className="dc-card">
      <h3 className="dc-title">📊 학습 대시보드</h3>

      <div className="dc-charts">
        <div className="dc-chart-item">
          <h4>진행률</h4>
          <Doughnut data={doughnutData} />
        </div>

        <div className="dc-chart-item">
          <h4>시험 수</h4>
          <Bar data={barData} />
        </div>
      </div>
    </div>
  );
}