import {createElement} from 'react';
import {createRoot} from 'react-dom/client';

// 리액트 요소 만들기
const headlineelement = createElement(
    // component type
    'h1',
    // component props(properties)
    {},
    // spread syntax
    // ...children
    '헬로',
    ' ',
    '리액트!'
)
// console.log(headlineelement)

// React 요소 트리(element tree) -> 웹 앱 (react-dom)
// const reactDomRoot = ReactDOM.createRoot(actualDomElement)

const rootElement = document.getElementById('root');

// 조건 분기
if(rootElement) {
    // 존재할 경우
    // 리액트 돔의 루트 생성
    const reactDomRoot = createRoot(rootElement);
    console.log(reactDomRoot)
    reactDomRoot.render(headlineelement)
} else {
    // 존재하지 않을 경우
    alert('문서에 #root 요속가 존재하지 않습니다.');
}
