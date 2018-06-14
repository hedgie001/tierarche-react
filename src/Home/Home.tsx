import * as React from 'react';
import Content from '../Api/Content';
import Button from '../UI/Button';
import FacebookProvider, { Page } from 'react-facebook';
import Row from '../Layout/Row';
import Header from './Header';
import TierItem from '../Tiere/TierItem/TierItem';

interface IState {
    content: {
        lead: string;
        text1: string;
        title: string;
    };
    featured_tiere: any;
}

class Home extends React.Component<{},IState> {
    constructor(props) {
        super(props);
        this.state = {
            content: {
                lead: "",
                text1: "",
                title: "",
            },
            featured_tiere: [
                {"name":"Sandy","age": "2 Jahre", "sex": "m", "race" : "Simmentaler", "image": "http://www.tierarche.ch/images/Tiere/Luigi/IMG_20180413_181406_2.jpg"},
                {"name":"Dandy","age": "2 Jahre", "sex": "w", "race" : "Aubic", "image": "http://www.tierarche.ch/images/Tiere/Luigi/IMG_20180413_181406_2.jpg"},
                {"name":"Goodoo","age": "9 Jahre", "sex": "m", "race" : "Friburger", "image": "http://www.tierarche.ch/images/Tiere/Luigi/IMG_20180413_181406_2.jpg"}
                ]
        };
    }
    public componentDidMount(){
        new Content().getContent((data)=>{
            this.setState({
                content: {
                    lead: data["lead-1"],
                    text1:  data["text-1"],
                    title: data["title-1"],
                }
            });
        });
    }

    public render() {
        return (
            <div>
                <Row isFluid={true}>
                    <Header/>
                </Row>
                <Row offset={3}>
                    <h1 className={"home___title"}>{this.state.content.title}</h1>
                    <p className={"home___lead"}>{this.state.content.lead}</p>
                    <div className={"home___ctabuttons"}>
                        <Button className={'home___ctabuttons___button button---secondary'} href={'/tiere'}>Zu den Tieren</Button>
                        <Button className={'home___ctabuttons___button button---secondary'} href={'/verein'}>Jetzt unterstützen</Button>
                    </div>
                    <p className={"home___text"}>{this.state.content.text1}</p>
                </Row>
                <Row dark={true}>
                    <div className={'home___featured'}>
                        <TierItem id={0} tier={this.state.featured_tiere[0]} value={50}/>
                        <TierItem id={1} tier={this.state.featured_tiere[1]} value={75}/>
                        <TierItem id={2} tier={this.state.featured_tiere[2]} value={20}/>
                    </div>
                </Row>
                <Row>
                    <FacebookProvider appId="938568736270505">
                        <Page href="https://www.facebook.com/TierarcheSeeland/" tabs="timeline" />
                    </FacebookProvider>
                </Row>
            </div>
        );
    }
}
export default Home;
