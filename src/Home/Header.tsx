import * as React from 'react';
import Button from '../UI/Button';
import HeaderVideo from '../Assets/Homevideo.mp4';
import './Home.css';
import LogoBig from '../Assets/LogoBig.svg';
import Vignette from '../Assets/vignette.png';


class Header extends React.Component {

    public render() {
        return (
            <header className={'home___header'}>
                <video className={'home___video'} autoPlay={true} loop={true} muted={true}>
                    <source src={HeaderVideo} />
                </video>
                <div className={'home___header___logo'}>
                    <img className={'home___header___logo___image'} src={LogoBig} />
                    <Button className={'home___header___logo___button'} href={'/tiere'}>Zu den Tieren</Button>
                </div>
                <img className={'home___header___vignette'} src={Vignette} />
            </header>
        );
    }
}
export default Header;
