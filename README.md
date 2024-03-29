# 멋쟁이 사자처럼 Front-End School 9기: JavaScript 프로그래밍
GitHub Page에서 보기: https://uzoolove.github.io/FES09-Javascript
소스 코드(GitHub): https://github.com/uzoolove/FES09-Javascript
예제 테스트(GitHub Page): https://uzoolove.github.io/FES09-Javascript/workspace-ins

## 수업 진도(예정)
### 2월 29(목)
#### 1강 데이터 타입
* 개발 환경 구축
* 데이터 타입
  - 기본 데이터 타입: 숫자, 문자열, 논리, null, undefined, Bigint, Symbol
  - 참조형 데이터 타입: Object
  
### 3월 4(월)
#### 1강 데이터 타입
* 객체 생성
* JSON 표기법
* for in
* 배열

### 3월 5(화)
#### 1강 데이터 타입
* 배열
* 함수(기본)
* 기본 데이터 타입과 참조형 데이터 타입의 차이
* 전역변수, 지역변수
* ES6
  - var, let, const
  - Template literals
  - 구조 분해 할당
  - 기본값 매개변수
  - 나머지 매개변수
  - 전개 연산자

### 3월 6(수)
#### 1강 데이터 타입
* 일급 객체
* 함수를 생성하는 4가지 방법
  - 선언문
  - 표현식
  - Function 생성자 함수
  - 화살표 함수

### 3월 7(목)
#### 2강 함수
* 호이스팅
* 매개변수와 인자의 수
* 암묵적 매개변수
* 함수를 호출하는 4가지 방법
  - 일반적인 함수 호출
  - 객체의 메서드로 호출
  - call(), apply()

### 3월 11(월)
#### 2강 함수
* 함수를 호출하는 4가지 방법
  - ......
  - 생성자 함수
* 익명함수, 콜백함수

### 3월 12(화)
#### 2강 함수
* 고차함수
* 메모이제이션(정규 수업)

#### 3강 프로토타입, 상속과 클래스
* 프로토타입

### 3월 13(수)
#### 3강 프로토타입, 상속과 클래스
* 상속
* 클래스(정규 수업)

### 3월 14(목)
#### 4강 클로저
* 클로저란?

### 3월 18(월)
#### 4강 클로저
* 클로저 용법
  - 캡슐화
  - 콜백과 타이머
  - 커링
  - 부분 적용 함수
  - 메모이제이션(정규 수업)
* 즉시 실행 함수

### 3월 19(화)
#### 5강 DOM, Ajax
* DOM API(정규 수업)
* Ajax(정규 수업)


## 개발환경 구축
### 프로그램 설치
* 본인의 OS에 맞는 버전 다운로드 후 설치
1. Nodejs 설치: https://nodejs.org/en/download
2. Visual Studio Code 설치: https://code.visualstudio.com/download
3. Git 설치: https://git-scm.com/downloads

### Visual Studio Code 설정
1. VSCode 실행
  * 이미 실행중이면 File > New Window 메뉴로 새로운 VS Code 실행
2. File > Preferences > Settings
	* "Files: Auto Save": onFocusChange
	* "Editor: Font Size": 각자 맞춰서 조절
	* "Editor: Tab Size": 2
	* "Editor: Detect Indentation": 체크 해제
	* "Files: Readonly Include"
		- Add Pattern > workspace-ins/** 입력한 후 OK 선택
		- Add Pattern > sample/** 입력한 후 OK 선택
		- Readonly Include가 보이지 않을 경우 VSCode를 최신 버전(1.79 이상)으로 업데이트
3. Github 레퍼지토리 복사
	* View > Source Control > Clone Repository 선택
	* <nohyper>https</nohyper>://github.com/uzoolove/FES09-Javascript.git 입력
	* 복사할 적당한 폴더 선택 후 Select as Repository Destination 선택
	* Open 선택

### 웹 서버 구동
1. Live Server 설치
	- VS Code Extention에서 live server 검색 후 설치
2. workspace/index.html 파일을 열고 Live Server 실행
	- VS Code 우측 하단의 Go Live 클릭
3. 각 예제 클릭해서 브라우저 개발자 도구 > 콘솔 탭에서 결과 확인

## 수업 자료
* PPT 폴더 확인

## 팁
* VSCode에서 소스코드 비교
  - 비교할 두개의 파일을 오픈
  - View > Command Palette > Compare Active File With... 선택
  - 비교할 대상 파일 선택

## 질문


## 참고 사이트
