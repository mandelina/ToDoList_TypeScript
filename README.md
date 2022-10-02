# [PreView]

  <br>

![투두_type](https://user-images.githubusercontent.com/83548784/193462925-cbab15de-43fd-439f-bc79-c942c5d94aa2.gif)

<br>
<br>

# 💻 사용한 스택

- `HTML` , `CSS`
- `React`
- `TypeScript`
- `uuidv4` 라이브러리
  <br>
  <br>

# 💻 프로젝트 설명

- 할 일을 적어두는 투두 리스트
- `Vanilla JS`를 사용한(ver1)를 이은 `React`와 `TypeScript`를 이용한 투두리스트(ver2)
- ver1 레포 : https://github.com/mandelina/ToDoList

<br>
<br>

# 💻 메인 기능

- 상단에는 오늘의 날짜와 시간 표시
- 오늘 할 일 적어두는 기능
- 투두 리스트 추가 및 삭제 기능
- 전체삭제 버튼을 이용하여 모든 데이터 삭제하기
- `localstorage`를 이용하여 데이터 저장해두기

<br>
<br>

# 💻 프로젝트를 통해 배운점

- TypeScript에서 interface사용하여 타입 지정하고, 각 event type을 사용해보았다.

- `React`의 `useRef Hook`을 이용하여 mount여부를 확인해 주었다.

- 기존에 리스트의 id값을 `useRef`를 이용하여 number값으로 주었지만, 재렌더링시 key값이 다시 1부터 시작하여 키 값 중복이 발생했다. 따라서 uuidv4 라이브러리를 이용하여 id값을 unique한 string값으로 설정해주었다.

- `useEffect`를 이용하여 의존성 배열에 각각 todo와 빈 배열을 사용해주었다.

- input값이 변경될 때마다 전체 컴포넌트가 재렌더링 되는것을 방지하고자 `memo`를 사용하였다.

- localStorage를 이용하여 페이지를 새로고침 하더라도 값이 남아있도록 유지시켰다.
