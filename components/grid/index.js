import React from 'react'
import PropTypes from 'prop-types'

import styled, {css} from 'styled-components'
import TouchFeedback from 'rmc-feedback';

import createTag from '../utils/createTag'

const divTag = createTag({
    tag: 'div',
    propsToOmit: ['data','hasLine','renderItem','square','columnNum','activeStyle','activeClassName','itemStyle']
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

const hairlineTop = css`
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

const hairlineRight = css`
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

const hairlineBottom = css`
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

const hairlineLeft = css`
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

const StyledGrid = styled(divTag) `
    position: relative;
    background: #fff;

    ${props=>props.hasLine ? hairlineRight + hairlineTop : ''}
`;
const StyledRow = styled(divTag) `
    box-sizing: border-box;
    display: flex;
    width: 100%;
    position: relative;

    ${props=>props.hasLine ? hairlineLeft + hairlineBottom : ''}
`;
const StyledCol = styled(divTag) `
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    flex-shrink: 1;
    flex-grow: 0;
    flex-basis: ${props=>(100/props.columnNum).toFixed(2)}%;

    ${props=>props.square ? squareCol : ''}

    ${props=>props.hasLine ? hairlineRight : ''}
`;

const StyledContent = styled(divTag) `
    box-sizing: border-box;
    padding: 15px 0;
    width: 100%;
    height: 100%;
    text-align: center;

    ${props=>props.square ? squareContent : ''}
`;

const StyledContentInner = styled(divTag) `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const StyledIcon = styled(divTag)`
    img{
        max-width: 100%;
        width: 28% !important;
    }
`;
const StyledText = styled(divTag)`
    margin-top: 9px;
    padding:0 10px;
    color: #000;
    text-align: center;
    word-break: break-all;
    word-wrap: break-word;
    
    font-size: ${props=>props.columnNum <= 3 ? '16px' : '12px'};
`;

const noop = ()=>{};

let unqueId = 0;

const getUnqueId = ()=>{
    return ++unqueId;
}

export default class Grid extends React.Component{
    constructor(props){
        super(props);

        this.id = getUnqueId();
        this.columnNum = props.columnNum;
    }
    static propTypes = {
        data: PropTypes.array.isRequired,
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
        activeStyle: {},
        activeClassName: '',
        itemStyle: {}
    }

    renderItem(item, index){
        const {renderItem} = this.props;

        if(renderItem){
            return renderItem(item, index);
        }else{
            return (
                <StyledContentInner>
                    <StyledIcon>
                        {
                            React.isValidElement(item.icon) ? (item.icon) : <img src={item.icon} />
                        }
                    </StyledIcon>
                    <StyledText columnNum={this.columnNum}>
                        {item.text}
                    </StyledText>
                </StyledContentInner>
            )
        }
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
        const {
            data,
            onClick,
            hasLine,
            renderItem,
            square,
            columnNum,
            activeStyle,
            activeClassName,
            itemStyle
        } = this.props;

        if(data.length <= 0){
            return null;
        }

        if(columnNum < 1){
            this.columnNum = 4;
        }

        const dataArr = this.processData(this.columnNum);
        
        let defaultActiveStyle = {
            backgroundColor: '#ddd'
        };

        let _activeStyle = activeStyle;

        if(activeStyle !== false){
            _activeStyle = {...defaultActiveStyle, ...activeStyle};
        }

        return(
            <StyledGrid hasLine={hasLine}>
                {
                    dataArr.map((rowItem, rowIndex)=>{
                        return (
                            <StyledRow key={`${this.id + rowIndex}`} hasLine={hasLine}>
                                {
                                    rowItem.map((colItem, colIndex)=>{
                                        return (
                                            <TouchFeedback 
                                                key={`${this.id + rowIndex + colIndex}`} 
                                                activeClassName={activeClassName}
                                                activeStyle={_activeStyle}
                                                onClick={()=>{onClick && onClick(colItem, rowIndex*this.columnNum+colIndex)}}
                                            >
                                                <StyledCol
                                                    style={itemStyle}
                                                    square={square}
                                                    hasLine={hasLine}
                                                    columnNum={this.columnNum}
                                                >
                                                    <StyledContent square={square}>
                                                        {this.renderItem(colItem, rowIndex*this.columnNum+colIndex)}
                                                    </StyledContent>
                                                </StyledCol>
                                            </TouchFeedback>
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
