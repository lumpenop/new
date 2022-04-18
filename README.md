# 원티드 프리온보딩 코스


## 과제 안내

- 다섯 가지의 주요 컴포넌트
    - Toggle.js
    - Tab.js
    - Slider.js
    - Input.js
    - Dropdown.js

---

## Toggle.js 



https://user-images.githubusercontent.com/68418005/163585419-dfc854c3-663e-46de-a5b1-0941e0cf1219.mov



핵심 요소 : 버튼을 누를 때 마다 선택된 항목이 변한다.

부가 요소 : 슬라이드 애니메이션


### 구현 방법


useState를 사용하여 boolean값을 갖는 state를 onClick 이벤트에 따라 변경하고, 

state에 따라 className을 변경할 수 있도록 하였습니다.

className에 따라 버튼의 위치와 글씨의 opacity를 변경하도록 css를 작성하였습니다.

버튼을 움직이게 하기 위해서 position을 absolute로 주어 left 값을 사용했습니다.



### 구현 시 어려웠던 점과 해결 과정

버튼을 여러 번 빠르게 연속 클릭하였을 때, 글씨의 전체 선택이 되는 경우가 빈번히 발생하여

user-select를 none으로 처리하였습니다.

Toggle은 버튼이어서 다른 이슈가 없지만 user-select를 none으로 처리하면 글씨 선택 자체가 되지 않기 때문에

추후에 다른 것을 구현할 때는 다른 방안도 고려해볼 수 있어야 할 것 같습니다.

---

## Tab.js 



https://user-images.githubusercontent.com/68418005/163585477-6eea4cba-b370-49cb-8159-e88e70cd2f3f.mov



핵심 요소 : 버튼을 누를 때 마다 선택된 탭이 변한다.

부가 요소 : 슬라이드 애니메이션


### 구현 방법


배열 함수 map()을 이용해 탭 메뉴를 생성하였습니다. 

useState를 이용해 onClick 이벤트 시 탭의 인덱스를 전달할 수 있게 함수를 생성하였습니다.

각각의 인덱스가 state과 같아지면 className을 부여하여 css를 변경할 수 있도록 하였습니다.

탭의 선택을 알려주는 color slider의 position을 relative로 주어 움직일 수 있도록 하였습니다.

state 값을 slider의 속성으로 주어 로 주어 0, 1, 2의 인덱스를 props로 전달할 수 있게 하였습니다.

left의 값을 index * 33%로 주어 움직일 수 있도록 하였습니다.



### 구현 시 어려웠던 점과 해결 과정

메뉴 3개를 갖는 탭을 구현하는데 map()을 사용하는게 맞는가에 대한 고민을 잠시 하였습니다.

하지만 코드의 중복을 막아 더욱 간결하게 하고, 인덱스를 일일히 손으로 주지 않아도 되는 장점이 있다고 판단 되어 사용하였습니다.

---

## Slider.js 



https://user-images.githubusercontent.com/68418005/163585575-c2def359-2fcb-49a4-825e-16f0a057b59f.mov


핵심 요소 : 슬라이더를 움직이면 상단의 값이 자동으로 변한다.

부가 요소 : 하단 버튼과 미려한 픽셀 매칭



### 구현 방법


버튼을 갖는 프로그레스 바 형식의 모양을 구현한 뒤, 길이를 변경 할 수 있도록 하였습니다.

현재 바의 길이/전체 길이 * 100의 퍼센트 창을 구현하기 위하여 base가 되는 회색 바 하위의 색상 바의 %길이를 사용하였습니다.

이벤트 발생 시 바의 길이가 변경되도록 함수를 구현하였습니다.

베이스가 되는 회색 바에서 onMouseDown 이벤트 발생 시 색상 막대의 길이가 현재 마우스의 위치 까지 변경되도록 하였고, 

state의 isClicked 를 false -> true로 변경하였습니다.

isClicked === true일 경우 전체 영역에서 onMouseMove 이벤트를 읽도록 하여, 

사용자의 마우스 X좌표만 받아 바의 길이를 조절할 수 있도록 하였습니다. 

onMouseUp 이벤트 또한 전체 영역에서 읽을 수 있도록 하여, 어디에서든 마우스를 떼면 슬라이드 바의 조절을 멈출 수 있도록 하였습니다.

또한 현재 엘리먼트 크기를 넘어가는 마우스 이동에 대해서 1~100의 값만을 가질 수 있도록 함수를 구현하였습니다.

1, 25, 50, 75, 100 %를 갖는 버튼을 map()을 이용하여 생성 후 props로 값을 전달하였습니다.

position을 absolute로 두고 left에 props로 가져온 값으로 %를 주어 위치를 설정하였습니다.

각각의 버튼을 onClick 시 현재 바 길이를 버튼이 갖는 값으로 state를 변경할 수 있도록 하였습니다.


### 구현 시 어려웠던 점과 해결 방법

처음 구현된 모습에서는 바를 조정하기 위해 마우스가 정확히 바 범위 안에 위치해야만 위치 조정이 가능했습니다.

onMouseDown 이벤트가 해당 엘리먼트를 벗어나면 동작 하지 않을 것이라는 생각을 하지 못했습니다.

사용자의 편의를 고려하여 바 밖에서도 마우스의 움직임에 따라 길이가 변경될 수 있도록 수정하였습니다.

때문에 처음 엘리먼트 내에서 이벤트 객체의 offsetX로 마우스 위치를 구하였던 것을

전체 화면에서의 현재 마우스의 위치를 구해서 state로 전달하는 함수로 변경하였습니다.

엘리먼트를 화면 중앙에 배치하였으므로, 이벤트가 일어나는 엘리먼트 내에서의 마우스 x 좌표 값에서

window.outerWidth로 구하여 반으로 나눈 값과 이벤트가 발생할 가장 상위 영역의 길이를 useRef를 사용하여 current.offsetWidth로 구하

여 반으로 나눈 값을 빼는 방법으로 구하였습니다. 제가 만든 버튼의 크기가 x좌표값으로 약 14정도를 차지하여 추가로 7을 더해주어 

버튼이 중앙에 위치할 수 있도록 하였습니다. 

-> Code Sandbox와 같은 페이지에서 window 사이즈로 좌표를 구하는 것이 문제가 되는 것으로 확인되어 client나 document.body 등으로

변경 예정입니다.

사용자 마우스의 자유로운 이동을 위해 함수와 state의 위치를 App.js로 옮겨 

전체 페이지 영역에 onMouseMove 이벤트를 준 뒤, props로 받아 사용하였습니다.

추후 redux등을 이용하여 상태 관리를 하면 더 좋은 방안이 될 수 있다고 생각됩니다.

-> redux를 적용 시 기분은 좋아졌지만 오히려 복잡성이 증가하였습니다.

---

## Input.js 



https://user-images.githubusercontent.com/68418005/163585516-bac9dd94-be71-4a49-ba74-6f60e1c1adfb.mov




핵심 요소 : 인풋창에 이메일과 비밀번호 입력이 가능하다

부가 요소 : 이메일 형식에 맞을 경우 자동으로 체크 표시

부가 요소 : 비밀번호 입력란 우측 눈 표시를 누르면 비밀번호가 노출된다


### 구현 방법


e-mail과 password를 받을 수 있는 input을 생성하였습니다.

e-mail onChange 시 정규표현식으로 e-mail 형식을 검사할 수 있도록 하였으며,

e-mail 형식에 맞으면 boolean 값을 갖는 state를 연결하여 className으로 삽입된 icon의 css를 변경하도록 구현하였습니다.

password 내부 아이콘에 onClick 이벤트를 주어 클릭하면 boolean 값을 갖는 state를 변경하고,

state가 변경되면 input type이 password면 text로, text면 password로 변경될 수 있도록 하였습니다.


### 구현 시 어려웠던 점과 해결 방법

styled component로 작성된 input에서 type을 state에 따라 변경하는 방법을 찾지 못하였습니다.

때문에 password만 부득이 html로 작성하였습니다.

추후 방법을 찾아 업데이트 하겠습니다.




---

## Dropdown.js 



https://user-images.githubusercontent.com/68418005/163585533-d200c1d3-e4a0-4129-82f8-decef2412744.mov



핵심 요소 : 드롭다운을 누르면 선택창이 펼쳐지고, 아무거나 골라 클릭하면 선택된 항목으로 변경됨

부가 요소 : 키워드 필터 기능 구현


### 구현 방법 

Dropdown 메뉴를 map()을 통해 작성하였습니다. 

readOnly속성을 갖는 input을 onClick 시 boolean 값을 갖는 state를 변경하여, 

className을 주어 input 아래에 메뉴가 dropdown 될 수 있도록 하였습니다.

menu list와 index를 각각 state로 갖고있도록 하였으며, readOnly input의 value로 menuList[index] 형식으로 주었습니다.

ul로 이루어진 drop down 메뉴가 활성화 되었을 경우 li로 검색창과 전체 menu가 나오도록 하였습니다.

검색창에 onChange 이벤트로 자동 완성이 되는 함수를 주었습니다. 함수에 이벤트 객체의 target value를 넘겨주어,

해당 string을 포함하는 menu를 filter()를 통해 골라내었습니다. 일치하는 메뉴가 없을 경우 All Symbols 메뉴만 남게 하였습니다.

각각의 메뉴를 onClick 시 index state를 해당 메뉴의 index 값으로 변경되게 하였고, 

boolean state를 함께 변경하여 menu 창이 닫히게 하였습니다.


### 구현 시 어려웠던 점과 해결 방법

readOnly 속성을 갖는 input을 선택하여 css를 변경하려 하였을 때 방법이 쉽게 떠오르지 않았습니다.

검색을 통해 여러 가상 선택자를 찾을 수 있었고, :read-only 선택자가 있다는 것을 알 수 있었습니다.
