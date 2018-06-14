import * as React from 'react';
import './Button.css';

interface IProps {
    className?: string;
    href?: string;
}

class Button extends React.Component<IProps> {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    public handleClick(){
        if(this.props.href){
            window.location.href = this.props.href;
        }
    }
    public render() {
        return (
            <button className={this.props.className} onClick={this.handleClick}>
                {this.props.children}
            </button>
        );
    }
}
export default Button;
