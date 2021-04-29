# nextjs 공부 중

## 그 전에 react hook 정리하기

### 1. useState
- 함수 컴포넌트 안에서 state를 사용할 수 있음(상태값 업데이트가 가능)
<br/>
<br/>
- initialState를 파라미터로 받는다.
<br/>
- state와 state를 변경할 setState 함수를 반환
<br/>
- <strong>setState로 state를 변경하면 렌더링이 다시 일어남</strong>
<br/><br/>
  
### 2. useEffect
- vuejs에서 mount와 unmount 같은 life cycle API 대신 사용하는 것
- 렌더링 완료 후 실행 || 어떤 값이 변경되었을 경우 실행
<br/>
<br/>
- 두번째 파라미터인 inputs를 통해 특정한 상태가 update 되었을 때만 effect가 실행되도록 설정 가능
<br/>
- effect 함수의 return 값이 있는 경우 hook의 <strong>cleanup 함수로 인식 -> 다음 effect가 실행되기 전에 실행</strong>
- cleanup 함수는 <strong>새로운 effect 실행 전 매번 호출</strong>
- inputs에 빈 배열을 넘겨주게 되면 unmount 될 때 1번만 실행
<br/><br/>
  
### 3. useRef
- 렌더링 간에 공유되는 변경 가능한 current 프로퍼티를 반환
- <strong>DOM 노드에 참조 가능</strong>
- <code>document.querySelector(".cindy")</code>와 동일
```javascript
import React, { useRef } from "react";

const SampleComponent = () => {
  const textInputRef = useRef(null);

  const buttonClick = () => textInputRef.current.focus();

  return (
    <React.Fragment>
      <input type="text" ref={textInputRef} />
      <button onClick={buttonClick}>Focus on the text</button>
    <React.Fragment/>
  );
}

export default SampleComponent
```
이 예제가 제일 이해하기 쉬웠다. 
input에 포커싱 되어있는지 확인하는 예제이다😆
<br/>
<br/>

### 4. useContext
- common data에서 액세스할 수 있는 공통 데이터를 생성하는데 사용
- props를 포함하지 않고 모든 child components에서 사용할 수 있음
```javascript
import { useContext } from "react";
import FavoritesContext from "./store/favorites-context";

function MeetupItem(props) {
  const favoritesContext = useContext(FavoritesContext);
  const itemIsFavorite = favoritesContext.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesContext.removeFavorite(props.id);
    } else {
      favoritesContext.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address
      });
    }
  }
}
```
FavoritesContext가 공통으로 사용하는 store이다. 요럴때 쓰는 것 같다
- <strong>The useContext hook only takes the context object itself as a parameter.</strong>
