import React from 'react'
import PropTypes from 'prop-types'

import styled, {css} from 'styled-components'

import {Flex, FlexItem} from '../flex'

import createTag from '../utils/createTag'

const divTag = createTag({
    tag: 'div',
    propsToOmit: ['data', 'renderItem', 'columnNum', 'activeClassName', 'hasLine', 'square', 'itemStyle']
})

const squareCol = css`
    &::before{
        content:"";
        display: block;
        padding-bottom: 100%;
    }
`;
const squareContent = css`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`;

const hairlineTop = ()=>{
    return `
        &:before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: auto;
            right: auto;
            height: 1px;
            width: 100%;
            background-color: #ddd;
            display: block;
            z-index: 15;
            transform-origin: 50% 0%;
            transform: scaleY(0.5);
        }
    `
}

const hairlineRight = ()=>{
    return `
        &:after {
            content: '';
            position: absolute;
            left: auto;
            top: 0;
            bottom: auto;
            right: 0;
            height: 100%;
            width: 1px;
            background-color: #ddd;
            display: block;
            z-index: 15;
            transform-origin: 100% 50%;
            transform: scaleX(0.5);
        }
    `
}

const hairlineBottom = ()=>{
    return `
        &:after {
            content: '';
            position: absolute;
            left: 0;
            top: auto;
            bottom: 0;
            right: auto;
            height: 1px;
            width: 100%;
            background-color: #ddd;
            display: block;
            z-index: 15;
            transform-origin: 50% 100%;
            transform: scaleY(0.5);
        }
    `
}

const hairlineLeft = ()=>{
    return `
        &:before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: auto;
            right: auto;
            height: 100%;
            width: 1px;
            background-color: #ddd;
            display: block;
            z-index: 15;
            transform-origin: 0 50%;
            transform: scaleX(0.5);
        }
    `
}

const StyledGrid = styled(divTag) `
    position: relative;
    background: #fff;

    ${props=>{
        let _st = '';
        if(props.hasLine){
            _st += hairlineRight();
            _st += hairlineTop();
        }
        return _st;
    }}
`;
const StyledRow = styled(divTag) `
    box-sizing: border-box;
    display: flex;
    width: 100%;
    position: relative;

    ${props=>{
        let _st = '';
        if(props.hasLine){
            _st += hairlineLeft();
            _st += hairlineBottom();
        }
        return _st;
    }}
`;
const StyledCol = styled(divTag) `
    box-sizing: border-box;
    position: relative;

    ${props=>props.square ? squareCol : ''}

    ${props=>{
        let _st = '';
        if(props=>props.hasLine){
            _st += hairlineRight();
        }
        return _st;
    }}
`;

const StyledContent = styled(divTag) `
    box-sizing: border-box;
    padding: 15px 0;
    width: 100%;
    height: 100%;
    text-align: center;

    ${props=>props.square ? squareContent : ''}
`;

const StyledIcon = styled.div`
    
`;
const StyledText = styled.div``;

const noop = ()=>{};

let unqueId = 0;

const getUnqueId = ()=>{
    return ++unqueId;
}

export default class Grid extends React.Component{
    constructor(props){
        super(props);

        this.id = getUnqueId();
    }
    static propTypes = {
        data: PropTypes.array,
        onClick: PropTypes.func,
        hasLine: PropTypes.bool,
        renderItem: PropTypes.func,
        square: PropTypes.bool,
        columnNum: PropTypes.number,
        activeStyle: PropTypes.object,
        activeClassName: PropTypes.string,
        itemStyle: PropTypes.object
    }

    static defaultProps = {
        data: [],
        onClick: noop,
        hasLine: true,
        square: true,
        columnNum: 4,
        // activeStyle: {},
        activeClassName: '',
        itemStyle: {}
    }

    renderItem(item){
        
    }

    /**
     * 数据处理，变成二维数组
     * @return {[type]} [description]
     */
    processData(columnNum){
        let {data} = this.props;
        let arr = [];

        data.forEach((item, i)=>{
            let rowIndex = Math.floor(i/columnNum);

            if(!arr[rowIndex]){
                arr[rowIndex] = [];
            }

            arr[rowIndex].push(item);
        });

        return arr;
    }

    render(){
        let {data, square, columnNum, renderItem, activeClassName, hasLine} = this.props;

        if(data.length <= 0){
            return null;
        }

        if(columnNum < 1){
            columnNum = 4;
        }

        const dataArr = this.processData(columnNum);

        return(
            <StyledGrid {...this.props}>
                {
                    dataArr.map((rowItem, rowIndex)=>{
                        return (
                            <StyledRow key={`${this.id + rowIndex}`} {...this.props}>
                                {
                                    rowItem.map((colItem, colIndex)=>{
                                        return (
                                            <StyledCol key={`${this.id + rowIndex + colIndex}`} style={{
                                                width: (100/columnNum).toFixed(2) + '%'
                                            }} {...this.props}>
                                                <StyledContent {...this.props}>
                                                    {colItem.icon}
                                                    {colItem.text}
                                                </StyledContent>
                                            </StyledCol>
                                        )
                                    })
                                }
                            </StyledRow>
                        )
                    })
                }
            </StyledGrid>
        )
    }
}
