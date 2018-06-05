import React from 'react'

import styled, {injectGlobal} from 'styled-components'

import Button from '../components/button'

injectGlobal`
    blockquote{
        font-size: 12px;
        color: #999;
    }

    table{
        border-collapse: collapse;
        border-spacing: 0;
        empty-cells: show;
        border: 1px solid #ebedf0;
        width: 100%;
        margin: 8px 0 16px;
        font-size: 14px;
        line-height: 1.5;
        color: #314659;

        th, td{
            border: 1px solid #ebedf0;
            padding: 16px 24px;
            text-align: left;
        }

        th{
            white-space: nowrap;
            color: #5c6b77;
            font-weight: 500;
            background: rgba(0,0,0,.02);
        }

        td{
            font-weight: 500;
            width: 20%;
            font-family: Lucida Console,Consolas,Menlo,Courier,monospace;
        }
    }
`;


export default class Example extends React.Component {
    render(){
        return (
            <div>
                <h2>Button</h2>
                <h3>基础</h3>
                <Button>按钮</Button>
            </div>
        )
    }
}
