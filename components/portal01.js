import React from 'react';
import {
    unstable_renderSubtreeIntoContainer,
    unmountComponentAtNode
} from 'react-dom';

// react 16 before
export default class Dialog extends React.Component {
    render() {
        return null;
    }

    componentDidMount() {
        const doc = window.document;
        this.node = doc.createElement('div');
        doc.body.appendChild(this.node);

        this.renderPortal(this.props);
    }

    componentDidUpdate() {
        this.renderPortal(this.props);
    }

    componentWillUnmount() {
        unmountComponentAtNode(this.node);
        window.document.body.removeChild(this.node);
    }

    renderPortal(props) {
        unstable_renderSubtreeIntoContainer(
            this, //代表当前组件
            <div class="dialog">{props.children}</div>, // 塞进传送门的JSX
            this.node // 传送门另一端的DOM node
        );
    }
}