# Unitask Scheduler

간단하고 직관적인 UI로 할 일(Task)과 스케줄을 관리할 수 있는 React + Vite 기반 웹 애플리케이션입니다.

GitHub Pages를 통해 언제 어디서든 접근할 수 있습니다.

배포 링크 : https://jeongsoyeon427.github.io/unitask-scheduler/

[기능 소개]

일정(Calendar) 관리 : react-calendar 기반의 달력 UI, 날짜 선택 및 일정 확인
할 일(To-Do) 관리 : Task 입력, 완료 처리, Chart.js 기반 통계 시각화
실시간 업데이트 : React 상태 관리 기반의 즉각 반영

[기술 스택 (분야 및 기술)]

프론트엔드 : React, JavaScript
빌드 도구 : Vite
스타일링 : CSS
캘린더 : react-calendar
차트 : chart.js, react-chartjs-2
배포 : GitHub Pages

[프로젝트 구조]

unitask-scheduler/
 ├── src/
 │   ├── components/
 │   ├── App.jsx
 │   ├── main.jsx
 │   └── styles/
 ├── public/
 ├── index.html
 ├── package.json
 ├── vite.config.js

[설치 및 실행 방법]

<프로젝트 클론>

git clone https://github.com/jeongsoyeon427/unitask-scheduler.git
cd unitask-scheduler

<패키지 설치>

npm install

<로컬 실행>

npm run dev

<빌드>

npm run build

[GitHub Pages 배포]

npm run deploy

빌드 결과는 자동으로 gh-pages 브랜치로 push가 됩니다.
