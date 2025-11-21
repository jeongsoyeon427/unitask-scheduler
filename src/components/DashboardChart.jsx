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
  /* ================================
     📌 데이터 계산
  ================================= */
  const doneCount = assignments.filter((a) => a.done).length;
  const notDoneCount = assignments.length - doneCount;

  const hasExams = exams.length > 0;
  const examLabels = hasExams ? exams.map((e) => e.subject) : ["시험 없음"];
  const examCounts = hasExams ? exams.map(() => 1) : [0];

  /* ================================
     📌 도넛 차트
  ================================= */
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

  /* ================================
     📌 막대 차트
  ================================= */
  const barData = {
    labels: examLabels,
    datasets: [
      {
        label: "시험 수",
        data: examCounts,
        backgroundColor: "#7c4dff",
        borderRadius: 6
      }
    ]
  };

  /* ================================
     📌 빈 상태 안내 UI
  ================================= */
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

  /* ================================
     📌 정상 UI
  ================================= */
  return (
    <div className="dc-card">
      <h3 className="dc-title">📊 학습 대시보드</h3>

      <div className="dc-charts">
        {/* 진행률 */}
        <div className="dc-chart-item">
          <h4>진행률</h4>
          <Doughnut
            data={doughnutData}
            options={{
              plugins: { legend: { display: false } },
              maintainAspectRatio: false
            }}
          />
        </div>

        {/* 시험 수 그래프 */}
        <div className="dc-chart-item">
          <h4>시험 수</h4>
          <Bar
            data={barData}
            options={{
              plugins: { legend: { display: false } },
              maintainAspectRatio: false,
              scales: {
                y: { beginAtZero: true, ticks: { stepSize: 1 } }
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}