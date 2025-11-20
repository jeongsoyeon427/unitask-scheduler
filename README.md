# Unitask Scheduler

React와 Vite 기반으로 개발된 개인 일정 및 작업(Task) 관리 웹 애플리케이션입니다.
사용자는 캘린더 UI를 기반으로 일정 관리 기능을 사용할 수 있으며, 작업 입력 완료 & 삭제 & 시각화 기능을 지원합니다.
본 프로젝트는 GitHub Pages를 통해 배포됩니다.

배포 URL : https://jeongsoyeon427.github.io/unitask-scheduler/

1. 개요 (Overview)

  본 애플리케이션은 다음 목적을 위해 설계되었습니다.

* 사용자의 친화적인 UI 기반 일정 및 업무(Task) 관리 제공
* 캘린더 및 차트를 활용한 직관적 데이터 확인
* 최소한의 구성으로 빠르게 동작하는 React + Vite 기반 구조 구축

2. 주요 기능 (Features)

2-1. 일정 관리 (Calendar)

* react-calendar 기반 월간 캘린더 인터페이스
* 날짜 선택 및 일정 조회 기능
* 필터링 및 일정 상태 확인 기능

2-2 Task 관리 (To-Do)

* 작업(Task) 생성, 완료 처리, 삭제 기능
* Chart.js 기반 작업 통계 시각화
* 상태 기반 실시간 UI 업데이트

3. 기술 스택 (Tech Stack)

프론트 엔드 : React, JavaScript
빌드 도구 : Vite
스타일링 : CSS
캘린더 : react-calendar
차트 : chart.js, react-chartjs-2
배포 : GitHub Pages

4. 프로젝트 구조 (Project Structure)

unitask-scheduler/
├─ public/
│  └─ index.html
├─ src/
│  ├─ components/
│  ├─ styles/
│  ├─ App.jsx
│  ├─ main.jsx
├─ package.json
└─ vite.config.js

5. 설치 및 실행 (Setup & Execution)

5-1. 프로젝트 클론

git clone https://github.com/jeongsoyeon427/unitask-scheduler.git
cd unitask-scheduler

5-2. 패키지 설치

npm install

5-3. 로컬 개발 실행

npm run dev

6. 빌드 및 배포 (Build & Deployment)

6-1. 빌드

npm run build

6-2. GitHub Pages 배포

npm run deploy

=> 빌드 결과물은 자동으로 gh-pages 브랜치에 업로드가 되며, GitHub Pages 설정에 따라 웹 사이트가 배포됩니다.

7. 라이선스 (License)

  본 프로젝트는 개인 학습 및 기말고사 과제 목적으로 제작되었습니다.
