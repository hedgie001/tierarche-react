import * as React from 'react';
import './TierItem.css';
import Button from "../../UI/Button";

interface IProps {
    id: number;
    tier: {
        name: string;
        value: number;
        age: string;
        sex: string;
        race: string;
        image: string;
    };
    value: number;
}
interface IState {
    circle_values: string;
}

class TierItem extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
        const circleUmfang = Math.PI*96;
        this.state = {
            circle_values : String(circleUmfang/100*this.props.value)+" "+String(circleUmfang)
        };
    }
    public render() {
        return (
            <div className={'tier-item'}>
                <h2>{this.props.tier.name}</h2>
                <div className={"tier-item___image-container"} style={{backgroundImage : "url("+this.props.tier.image+")"}}>
                    <svg className="tier-item___image-container___circle" width="100px" height="100px" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="48" stroke="white" fillOpacity="0" strokeWidth="4" />
                        <rect x="2" y="2" rx="48" ry="48" stroke="#92bf20" width="96" height="96" fillOpacity="0" strokeDasharray={(this.state.circle_values)} strokeWidth="4"/>
                    </svg>
                </div>
                <div className={'tier-item___infos'}>
                    <span>{this.props.tier.sex}</span>
                    <span>{this.props.tier.age}</span>
                    <span>{this.props.tier.race}</span>
                </div>
                <h3 className={'tier-item___value'}>{this.props.value}%</h3>
                <Button className={'tier-item___button'}>Infos Patenschaft</Button>
            </div>
        );
    }
}

export default TierItem;
