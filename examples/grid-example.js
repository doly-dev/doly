import React from 'react'

import styled, {injectGlobal} from 'styled-components'

import Grid from '../components/grid'

injectGlobal`
    body{
        background: #f5f5f5;
    }
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
        background: #fff;

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

const StyledDemo = styled.div`
    
`;

const sizeMap = {
    xxs: '15px',
    xs: '18px',
    sm: '21px',
    md: '22px',
    lg: '36px'
}

const StyledIcon = styled.div`
    display: inline-block;
    width: ${props=>sizeMap[props.size] || sizeMap[md]};
    height: ${props=>sizeMap[props.size] || sizeMap[md]};
    background: #ccc;
`;

class Icon extends React.Component{
    static defaultProps = {
        size: 'md'
    }

    render(){
        return <StyledIcon {...this.props} />
    }
}

const data1 = [
    {
        icon: <Icon />,
        text: 'test'
    },
    {
        icon: <Icon />,
        text: 'test'
    },
    {
        icon: <Icon />,
        text: 'test'
    },
    {
        icon: <Icon />,
        text: 'test'
    },
    {
        icon: <Icon />,
        text: 'test'
    },
    {
        icon: <Icon />,
        text: 'test'
    },
    {
        icon: <Icon />,
        text: 'test'
    },
    {
        icon: <Icon />,
        text: 'test'
    },
    {
        icon: <Icon />,
        text: 'test'
    }
]

export default class Example extends React.Component {
    render(){
        return (
            <div>
                <h2>Grid</h2>
                <StyledDemo>
                    <h3>基础</h3>
                    <Grid data={data1} />
                    <h3>3列</h3>
                    <Grid data={data1} columnNum={3} />
                    <h3>3列高度自适应</h3>
                    <Grid data={data1} columnNum={3} square={false} />

                    <h3>API</h3>
                    <h4>Grid</h4>
                    <table>
                        <tbody>
                            <tr>
                                <th>属性</th>
                                <th>说明</th>
                                <th>类型</th>
                                <th>默认值</th>
                            </tr>
                            <tr>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                        </tbody>
                    </table>
                </StyledDemo>
            </div>
        )
    }
}
