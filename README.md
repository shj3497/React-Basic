# React-Basic

## React

- npm install yarn --global
- yarn add @fortawesome/fontawesome-free

<br/>

## Class 형식의 React

- React.Component
- React.PureComponent

<br/>

## Function 형식의 React

- function
- memo(function)(Higher Order Component)(HOC)
- React Hook

<br/>

## React-DOM

React라는 것은 순수 자바스크립트이고 자바스크립트를 이용해서 컴포넌트들을 만든다.  
브라우저는 HTML, CSS, 순수 JavaScript 만을 이용할 수 있다.  
BABEL을 이용해서 순수 JavaScript로 변환이 되고, 이렇게 변환된 아이들(컴포넌트)을 HTML과 연결해주는 작업을 해야하는데 이것이 React-DOM이 한다.

<br/>

## JSX

- JSX 파일 render()할 때에는 형제노드로 묶어서 보낼 수는 없다.
- React.Fragment 태그로 묶어서 return() 한다.
- 의미없이 그냥 묶을 때는 React.Fragment를 사용하고, div로 묶어줘야 할때는 div로 묶어줘서 return() 가능 >> 하나의 태그만 리턴해야한다.

### HTML과의 차이점

- className <-> class
- onClick <-> onclick

```Javascript
// JSX
function App(){
  const name = 'Shim'
  return (
    <React.Fragment>
      <h1 className='title' onClick="">Hello {name}</h1>
      <h2>React</h2>
    </React.Fragment>
  )
}
```

```HTML
<!-- HTML -->
<h1 class='title' onclick="">Hello Shim</h1>
<h2>React</h2>
```

<br/>

## State VS Props

### 1. State

- 컴포넌트 안에서 정의한 컴포넌트의 state 오브젝트이다.
- 컴포넌트 UI를 위한 데이터를 보관하는 오브젝트로, 이 State라는 오브젝트를 통해서 데이터에 업데이트가 발생하면 리액트가 자동적으로 render() 함수를 호출한다.
- [참고](.\habit-tracker\src\components\habit.jsx)

  ```javascript
  import React from "react";

  class LikeButton extends Component {
    state = {
      numberOfLikes: 0,
    };
    render() {
      return <button>{this.state.numberOfLikes}</button>;
    }
  }

  export default LikeButton;
  ```

### 2. Props

- 컴포넌트 밖에서 주어지는 데이터이다.
- 컴포넌트 안에서 자체적으로 데이터를 정의해서 사용하는 State와는 다르게, Props는 컴포넌트 `외부`에서 데이터를 제공받는다.
- 아래처럼 부모컴포넌트에서 LikeButton 컴포넌트를 사용할 때 `title`, `onClick`을 인자로 전달해 주면, 이것들이 props 오브젝트로 묶여서 LikeButton 컴포넌트에 전달된다.

  ```javaScript
  class App extends Component{
    handleClick= event => {
      console.log(event);
    }
    render() {
      return
        <LikeButton title={'Like'} onClick={this.handleClick}></LikeButton>
    }
  }
  ```

- 그래서 LikeButton안에서 `this.props.title`, `this.props.onClick` 으로 각각 전달된 'Like'와 'this.handleClick' 함수에 접근 할 수 있다.
