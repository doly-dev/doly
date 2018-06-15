import {injectGlobal} from 'styled-components';

// 移动端:active伪类无效的解决方法
document.body.addEventListener('touchstart', ()=>{});

injectGlobal `
    *, *:after, *:before {
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
`;