# [PreView]

<br>

- 배포링크 : https://mandelina.github.io/ToDoList_TypeScript/

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

# 💻 투두리스트 사용방법

- 할 일 추가 : 할 일을 작성후 enter키를 누르거나 추가 버튼을 누름
- 할 일 수정 : 리스트를 더블클릭하면 input box가 나오는데 여기에 글을 입력하고 enter키를 누르면 수정완료
- 할 일 삭제 : 쓰레기통 아이콘을 클릭하면 삭제 가능
- 할 일 전체삭제 : 전체삭제 버튼을 클릭시 모든 투두리스트 삭제
- 완료한 일 체크 : 체크박스를 누르면 완료한 일이 체크되고 선이 그어짐

<br>
<br>

# 💻 프로젝트를 통해 배운점

- TypeScript에서 interface사용하여 타입 지정하고, 각 event type을 사용해보았다.

- `React`의 `useRef Hook`을 이용하여 mount여부를 확인해 주었다.

- 기존에 리스트의 id값을 `useRef`를 이용하여 number값으로 주었지만, 재렌더링시 key값이 다시 1부터 시작하여 키 값 중복이 발생했다. 따라서 uuidv4 라이브러리를 이용하여 id값을 unique한 string값으로 설정해주었다.

- `useEffect`를 이용하여 의존성 배열에 각각 todo와 빈 배열을 사용해주어 todo가 변경되었을 경우와 마운트/언마운트 되었을 때 실행시킬 로직을 넣어주었다.

- input값이 변경될 때마다 전체 컴포넌트가 재렌더링 되는것을 방지하고자 `memo`를 사용하였다.

- localStorage를 이용하여 페이지를 새로고침 하더라도 값이 남아있도록 유지시켰다.
