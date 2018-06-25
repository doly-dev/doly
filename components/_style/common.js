import {injectGlobal, css} from 'styled-components';

// 移动端:active伪类无效的解决方法
document.body.addEventListener('touchstart', ()=>{});

injectGlobal `
    *, *:after, *:before {
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
`;

const hairline = (position = 'bottom', color = '#ddd')=>{
    let _style = [];

    switch(position){
        case 'top':
            _style = css`
                &:before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: auto;
                    right: auto;
                    height: 1px;
                    width: 100%;
                    background-color: ${color};
                    display: block;
                    z-index: 15;
                    transform-origin: 50% 0%;
                    transform: scaleY(0.5);
                }
            `
            break;
        case 'right':
            _style = css`
                &:after {
                    content: '';
                    position: absolute;
                    left: auto;
                    top: 0;
                    bottom: auto;
                    right: 0;
                    height: 100%;
                    width: 1px;
                    background-color: ${color};
                    display: block;
                    z-index: 15;
                    transform-origin: 100% 50%;
                    transform: scaleX(0.5);
                }
            `
            break;
        case 'bottom':
            _style = css`
                &:after {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: auto;
                    bottom: 0;
                    right: auto;
                    height: 1px;
                    width: 100%;
                    background-color: ${color};
                    display: block;
                    z-index: 15;
                    transform-origin: 50% 100%;
                    transform: scaleY(0.5);
                }
            `
            break;
        case 'left':
            _style = css`
                &:before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: auto;
                    right: auto;
                    height: 100%;
                    width: 1px;
                    background-color: ${color};
                    display: block;
                    z-index: 15;
                    transform-origin: 0 50%;
                    transform: scaleX(0.5);
                }
            `
            break;
        default:
            break;
    }

    return [_style.join('')];
}

export {
    hairline
}

export default {
    hairline
}
