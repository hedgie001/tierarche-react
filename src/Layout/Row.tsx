import * as React from 'react';
import './Row.css';

interface IProps {
    isFluid?: boolean;
    dark?: boolean;
    offset?: number;
}
class Row extends React.Component<IProps> {
    public static defaultProps: Partial<IProps> = {
        dark: false,
        isFluid: false,
        offset: 0
    };

    public render() {
        return (
            <div className={"row " + (this.props.dark ? "dark" : "")}>
                <aside/>
                    <div className={
                        (this.props.isFluid ? "container-fluid " : "container ") + "container-offset-"+String(this.props.offset)
                    }>{this.props.children}</div>
                <aside/>
            </div>
        );
    }
}
export default Row;
