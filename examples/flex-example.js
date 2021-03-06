import React from 'react'

import styled from 'styled-components'

import './style'
import {Flex, FlexItem} from '../components/flex'

const StyledGridDemo = styled.div`
    .row-demo{
        padding-top: 10px;

        >div{
            text-align: center;
            color: #fff;
            background: #00a0e9;
        }
        >div:nth-child(2n){
            background: rgba(0,160,233,.7);
        }

        &:last-child{
            padding-bottom: 10px;
        }
    }
    .row-demo-1{
        background-image: linear-gradient(90deg,#f5f5f5 4.16666667%,transparent 0,transparent 8.33333333%,#f5f5f5 0,#f5f5f5 12.5%,transparent 0,transparent 16.66666667%,#f5f5f5 0,#f5f5f5 20.83333333%,transparent 0,transparent 25%,#f5f5f5 0,#f5f5f5 29.16666667%,transparent 0,transparent 33.33333333%,#f5f5f5 0,#f5f5f5 37.5%,transparent 0,transparent 41.66666667%,#f5f5f5 0,#f5f5f5 45.83333333%,transparent 0,transparent 50%,#f5f5f5 0,#f5f5f5 54.16666667%,transparent 0,transparent 58.33333333%,#f5f5f5 0,#f5f5f5 62.5%,transparent 0,transparent 66.66666667%,#f5f5f5 0,#f5f5f5 70.83333333%,transparent 0,transparent 75%,#f5f5f5 0,#f5f5f5 79.16666667%,transparent 0,transparent 83.33333333%,#f5f5f5 0,#f5f5f5 87.5%,transparent 0,transparent 91.66666667%,#f5f5f5 0,#f5f5f5 95.83333333%,transparent 0);

        >div{
            background: rgba(0,160,233,.5);
        }
        >div:nth-child(2n){
            background: hsla(0,0%,100%,.2);
            color: #999;
        }
    }

    .row-demo-2{
        background: #f5f5f5;
    }
`;

const StyledPlaceHolder = styled.div `
    ${props=>{
        if(props.height > 20){
            return 'height: ' + props.height + 'px; line-height:' + props.height + 'px;';
        }else{
            return 'height: 50px; line-height: 50px;' 
        }
    }}
`;

class PlaceHolder extends React.Component{
    render(){
        return (
            <StyledPlaceHolder {...this.props} />
        )
    }
}


export default class Example extends React.Component {
    render(){
        return (
            <div>
                <h2>Flex 布局</h2>
                <h3>基础删格</h3>
                <blockquote>FlexItem组件span 占用剩余空间比例。width 占用大小。同时有width和span的情况下，仅width有效</blockquote>
                <StyledGridDemo>
                    <Flex className="row-demo row-demo-1" gutter={10}>
                        <FlexItem>
                            <PlaceHolder>100%</PlaceHolder>
                        </FlexItem>
                    </Flex>
                    <Flex className="row-demo row-demo-1">
                        <FlexItem>
                            <PlaceHolder>1/2</PlaceHolder>
                        </FlexItem>
                        <FlexItem>
                            <PlaceHolder>1/2</PlaceHolder>
                        </FlexItem>
                    </Flex>
                    <Flex className="row-demo row-demo-1">
                        <FlexItem span={2}>
                            <PlaceHolder>2/3</PlaceHolder>
                        </FlexItem>
                        <FlexItem span={1}>
                            <PlaceHolder>1/3</PlaceHolder>
                        </FlexItem>
                    </Flex>
                    <Flex className="row-demo row-demo-1">
                        <FlexItem>
                            <PlaceHolder>1/4</PlaceHolder>
                        </FlexItem>
                        <FlexItem>
                            <PlaceHolder>1/4</PlaceHolder>
                        </FlexItem>
                        <FlexItem span={2}>
                            <PlaceHolder>2/4</PlaceHolder>
                        </FlexItem>
                    </Flex>
                    <Flex className="row-demo row-demo-1">
                        <FlexItem>
                            <PlaceHolder>1/12</PlaceHolder>
                        </FlexItem>
                        <FlexItem>
                            <PlaceHolder>1/12</PlaceHolder>
                        </FlexItem>
                        <FlexItem>
                            <PlaceHolder>1/12</PlaceHolder>
                        </FlexItem>
                        <FlexItem>
                            <PlaceHolder>1/12</PlaceHolder>
                        </FlexItem>
                        <FlexItem>
                            <PlaceHolder>1/12</PlaceHolder>
                        </FlexItem>
                        <FlexItem>
                            <PlaceHolder>1/12</PlaceHolder>
                        </FlexItem>
                        <FlexItem>
                            <PlaceHolder>1/12</PlaceHolder>
                        </FlexItem>
                        <FlexItem>
                            <PlaceHolder>1/12</PlaceHolder>
                        </FlexItem>
                        <FlexItem>
                            <PlaceHolder>1/12</PlaceHolder>
                        </FlexItem>
                        <FlexItem>
                            <PlaceHolder>1/12</PlaceHolder>
                        </FlexItem>
                        <FlexItem>
                            <PlaceHolder>1/12</PlaceHolder>
                        </FlexItem>
                        <FlexItem>
                            <PlaceHolder>1/12</PlaceHolder>
                        </FlexItem>
                    </Flex>
                    <Flex className="row-demo row-demo-1">
                        <FlexItem width="50px">
                            <PlaceHolder>50px</PlaceHolder>
                        </FlexItem>
                        <FlexItem>
                            <PlaceHolder>auto</PlaceHolder>
                        </FlexItem>
                    </Flex>
                    <Flex className="row-demo row-demo-1">
                        <FlexItem width="100px">
                            <PlaceHolder>100px</PlaceHolder>
                        </FlexItem>
                        <FlexItem>
                            <PlaceHolder>auto</PlaceHolder>
                        </FlexItem>
                        <FlexItem width="50px">
                            <PlaceHolder>50px</PlaceHolder>
                        </FlexItem>
                    </Flex>
                    <Flex className="row-demo row-demo-1">
                        <FlexItem width="100px">
                            <PlaceHolder>100px</PlaceHolder>
                        </FlexItem>
                        <FlexItem width="50px">
                            <PlaceHolder>50px</PlaceHolder>
                        </FlexItem>
                        <FlexItem width="100px">
                            <PlaceHolder>100px</PlaceHolder>
                        </FlexItem>
                    </Flex>
                </StyledGridDemo>
                <h3>区间间隔</h3>
                <blockquote>Flex组件的gutter属性是对全部FlexItem组件设置</blockquote>
                <blockquote>单独FlexItem也可设置gutter，如果Flex也有该值会覆盖Flex的gutter</blockquote>
                <StyledGridDemo>
                    <Flex className="row-demo row-demo-2" gutter={10}>
                        <FlexItem>
                            <PlaceHolder>col</PlaceHolder>
                        </FlexItem>
                        <FlexItem>
                            <PlaceHolder>col</PlaceHolder>
                        </FlexItem>
                        <FlexItem>
                            <PlaceHolder>col</PlaceHolder>
                        </FlexItem>
                        <FlexItem>
                            <PlaceHolder>col</PlaceHolder>
                        </FlexItem>
                        <FlexItem>
                            <PlaceHolder>col</PlaceHolder>
                        </FlexItem>
                    </Flex>
                    <Flex className="row-demo row-demo-2">
                        <FlexItem>
                            <PlaceHolder>col</PlaceHolder>
                        </FlexItem>
                        <FlexItem gutter={30}>
                            <PlaceHolder>col</PlaceHolder>
                        </FlexItem>
                    </Flex>
                </StyledGridDemo>
                <h3>水平对齐</h3>
                <blockquote>Flex组件的 justify 支持 start、center、end、space-between、space-around</blockquote>
                <StyledGridDemo>
                    <Flex className="row-demo row-demo-2" justify="start">
                        <FlexItem width="20%">
                            <PlaceHolder>col</PlaceHolder>
                        </FlexItem>
                        <FlexItem width="20%">
                            <PlaceHolder>col</PlaceHolder>
                        </FlexItem>
                        <FlexItem width="20%">
                            <PlaceHolder>col</PlaceHolder>
                        </FlexItem>
                    </Flex>
                    <Flex className="row-demo row-demo-2" justify="center">
                        <FlexItem width="20%">
                            <PlaceHolder>col</PlaceHolder>
                        </FlexItem>
                        <FlexItem width="20%">
                            <PlaceHolder>col</PlaceHolder>
                        </FlexItem>
                        <FlexItem width="20%">
                            <PlaceHolder>col</PlaceHolder>
                        </FlexItem>
                    </Flex>
                    <Flex className="row-demo row-demo-2" justify="end">
                        <FlexItem width="20%">
                            <PlaceHolder>col</PlaceHolder>
                        </FlexItem>
                        <FlexItem width="20%">
                            <PlaceHolder>col</PlaceHolder>
                        </FlexItem>
                        <FlexItem width="20%">
                            <PlaceHolder>col</PlaceHolder>
                        </FlexItem>
                    </Flex>
                    <Flex className="row-demo row-demo-2" justify="space-between">
                        <FlexItem width="20%">
                            <PlaceHolder>col</PlaceHolder>
                        </FlexItem>
                        <FlexItem width="20%">
                            <PlaceHolder>col</PlaceHolder>
                        </FlexItem>
                        <FlexItem width="20%">
                            <PlaceHolder>col</PlaceHolder>
                        </FlexItem>
                    </Flex>
                    <Flex className="row-demo row-demo-2" justify="space-around">
                        <FlexItem width="20%">
                            <PlaceHolder>col</PlaceHolder>
                        </FlexItem>
                        <FlexItem width="20%">
                            <PlaceHolder>col</PlaceHolder>
                        </FlexItem>
                        <FlexItem width="20%">
                            <PlaceHolder>col</PlaceHolder>
                        </FlexItem>
                    </Flex>
                </StyledGridDemo>
                <h3>垂直对齐</h3>
                <blockquote>Flex组件的 align 支持 top、center、bottom</blockquote>
                <StyledGridDemo>
                    <Flex className="row-demo row-demo-2" align="top">
                        <FlexItem>
                            <PlaceHolder height={100}>col</PlaceHolder>
                        </FlexItem>
                        <FlexItem>
                            <PlaceHolder height={70}>col</PlaceHolder>
                        </FlexItem>
                        <FlexItem>
                            <PlaceHolder height={30}>col</PlaceHolder>
                        </FlexItem>
                        <FlexItem>
                            <PlaceHolder>col</PlaceHolder>
                        </FlexItem>
                    </Flex>
                    <Flex className="row-demo row-demo-2" align="center">
                        <FlexItem>
                            <PlaceHolder height={100}>col</PlaceHolder>
                        </FlexItem>
                        <FlexItem>
                            <PlaceHolder height={70}>col</PlaceHolder>
                        </FlexItem>
                        <FlexItem>
                            <PlaceHolder height={30}>col</PlaceHolder>
                        </FlexItem>
                        <FlexItem>
                            <PlaceHolder>col</PlaceHolder>
                        </FlexItem>
                    </Flex>
                    <Flex className="row-demo row-demo-2" align="bottom">
                        <FlexItem>
                            <PlaceHolder height={100}>col</PlaceHolder>
                        </FlexItem>
                        <FlexItem>
                            <PlaceHolder height={70}>col</PlaceHolder>
                        </FlexItem>
                        <FlexItem>
                            <PlaceHolder height={30}>col</PlaceHolder>
                        </FlexItem>
                        <FlexItem>
                            <PlaceHolder>col</PlaceHolder>
                        </FlexItem>
                    </Flex>
                </StyledGridDemo>
                <h3>删格排序</h3>
                <blockquote>FlexItem组件的order值越小越靠前</blockquote>
                <StyledGridDemo>
                    <Flex className="row-demo row-demo-2">
                        <FlexItem order={4}>
                            <PlaceHolder>order-4</PlaceHolder>
                        </FlexItem>
                        <FlexItem order={3}>
                            <PlaceHolder>order-3</PlaceHolder>
                        </FlexItem>
                        <FlexItem order={2}>
                            <PlaceHolder>order-2</PlaceHolder>
                        </FlexItem>
                        <FlexItem order={1}>
                            <PlaceHolder>order-1</PlaceHolder>
                        </FlexItem>
                    </Flex>
                </StyledGridDemo>
                <h3>API</h3>
                <h4>Flex</h4>
                <table>
                    <tbody>
                        <tr>
                            <th>属性</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                        </tr>
                        <tr>
                            <td>gutter</td>
                            <td>栅格间隔。数字、px值、百分比</td>
                            <td>number/string</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>justify</td>
                            <td>水平排列方式。start end center space-around space-between</td>
                            <td>string</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>align</td>
                            <td>垂直对齐方式。top middle bottom</td>
                            <td></td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                <h4>FlexItem</h4>
                <table>
                    <tbody>
                        <tr>
                            <th>属性</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                        </tr>
                        <tr>
                            <td>span</td>
                            <td>占用剩余空间比例</td>
                            <td>number</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>width</td>
                            <td>占用大小。如果设置 width，span将失效。</td>
                            <td>string</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>align</td>
                            <td>垂直对齐方式。top middle bottom</td>
                            <td>string</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>gutter</td>
                            <td>栅格间隔，可以覆盖Row组件也设置gutter。数字、px值、百分比</td>
                            <td>number|string</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>order</td>
                            <td>栅格顺序，值越小越靠前</td>
                            <td>number</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
