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
