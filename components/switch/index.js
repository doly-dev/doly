import { GlobalStyle } from '../_style/common'
import createTag from '../_utils/createTag'

import React from 'react'
import PropTypes from 'prop-types'

import styled, {css} from 'styled-components'

const labelTag = createTag({
    tag: 'label',
    propsToOmit: ['color', 'platform']
})

const StyleCheckbox = styled.div``;

const StyleSwitch = styled(labelTag) `
    box-sizing: border-box;
    position: relative;
    cursor: pointer;
    display: inline-block;
    vertical-align: middle;
    align-self: center;

    ${StyleCheckbox}{
        box-sizing: border-box;
        position: relative;
        cursor: pointer;
        
        z-index: 0;
        margin: 0;
        padding: 0;
        appearance: none;
        border: 0;
        transition: all .3s;

        ${props=>{

            let width = '51px',
                height = '31px',
                round = '31px',
                backgroundColor = '#e5e5e5';

            if(props.platform === 'android'){
                width = '72px';
                height = '23px';
                round = '3px';
                backgroundColor = '#a7aaa6';
            }

            return `
                width: ${width};
                height: ${height};
                border-radius: ${round};
                background: ${backgroundColor};
            `
        }}

        &::before, &::after{
            content: "";
            position: absolute;
            background: #fff;
            transition: all .2s;

            height: ${props=>props.platform === 'android' ? '21px' : '28px'};
            left: ${props=>props.platform === 'android' ? '1px' : '1.5px'};
            top: ${props=>props.platform === 'android' ? '1px' : '1.5px'};
            border-radius: ${props=>props.platform === 'android' ? '2px' : '28px'};
        }

        &::before{
            box-sizing: border-box;
            z-index: 1;
            width: 48px;
            transform: scale(1);

            ${props=>props.platform === 'android' ? 'display: none' : ''};
        }

        &::after{
            z-index: 2;
            box-shadow: 2px 2px 4px rgba(0,0,0,0.2);

            width: ${props=>props.platform === 'android' ? '35px' : '28px'};
        }
    }
    
    input{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        border: 0 none;

        &:checked+${StyleCheckbox}{

            ${props=>{

                let color = props.platform === 'android' ? '#108ee9' : '#4dd865';

                if(props.color){
                    color = props.color;
                }

                return 'background: ' + color + ';'
            }};

            &::before{
                transform: scale(0);
            }

            &::after{
                transform: translateX(${props=>props.platform === 'android' ? '35px' : '20px'});
            }
        }

        &:disabled+${StyleCheckbox}{
            opacity: 0.3;
        }
    }
`;

const noop = ()=>{};

export default class Switch extends React.Component{
    
    constructor(props){
        super(props);

        let checked = false;

        if ('checked' in props) {
            checked = !!props.checked;
        } else {
            checked = !!props.defaultChecked;
        }

        this.state = {
            checked: checked
        }
    }

    static propTypes = {
        checked: PropTypes.bool,
        defaultChecked: PropTypes.bool,
        disabled: PropTypes.bool,
        color: PropTypes.string,
        platform: PropTypes.oneOf(['ios', 'android']),
        name: PropTypes.string,
        onChange: PropTypes.func
    }

    static defaultProps = {
        // checked: false,
        // defaultChecked: false,
        // disabled: false,
        // color: '#4dd865',
        platform: 'ios',
        name: '',
        onChange: noop
    }

    handleChange=e=>{
        const {onChange, onClick, disabled} = this.props;
        let {checked} = this.state;

        if (!disabled) {
            checked = !checked;
            if (!('checked' in this.props)) {
                this.setState({
                    checked
                })
            }
        }

        onChange(checked);
    }

    componentWillReceiveProps(nextProps) {
        if('checked' in nextProps){
            this.setState({
                checked: !!nextProps.checked
            })
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(('checked' in nextProps)){
            return nextProps.checked !== this.state.checked;
        }else{
            if(this.state.checked !== nextState.checked){
                return true;
            }else{
                return false;
            }
        }
    }

    render(){
        const {
            disabled,
            name,
            color,
            platform,
            ...rest
        } = this.props;

        const {checked} = this.state;

        const globalProps = Object.keys(rest).reduce((prev, key) => {
            if (
                key.substr(0, 5) === 'aria-' ||
                key.substr(0, 5) === 'data-' ||
                key === 'role'
            ) {
                prev[key] = rest[key];
            }
            return prev;
        }, {});

        return(
            <StyleSwitch platform={platform} color={color}>
                <GlobalStyle />
                <input 
                    type="checkbox" 
                    name={name} 
                    checked={checked} 
                    disabled={disabled} 
                    value={checked ? 'on' : 'off'} 
                    onChange={this.handleChange}
                    {...globalProps}
                />
                <StyleCheckbox/>
            </StyleSwitch>
        )
    }
}
