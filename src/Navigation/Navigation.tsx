import * as React from 'react';
import {NavLink} from 'react-router-dom';
import Logo from '../Assets/NavigationLogo.svg'
import './Navigation.css';

interface IProps {
    name: string;
}
class Navigation extends React.Component<IProps> {

    public render() {
        return (
            <nav>
                <img className={'nav___logo'} src={Logo} alt={"Tierarche Seeland"}/>
                <div className={'nav___links'}>
                    <NavLink exact={true} className={'nav___links___link'} activeClassName={'nav___links___link---active'} to={'/'}>Home</NavLink>
                    <NavLink className={'nav___links___link'} activeClassName={'nav___links___link---active'} to={'/tiere'}>Die Tiere</NavLink>
                    <NavLink className={'nav___links___link'} activeClassName={'nav___links___link---active'} to={'/hof'}>Der Hof</NavLink>
                    <NavLink className={'nav___links___link'} activeClassName={'nav___links___link---active'} to={'/faq'}>FAQ</NavLink>
                    <NavLink className={'nav___links___link'} activeClassName={'nav___links___link---active'} to={'/verein'}>Trägerverein</NavLink>
                    <NavLink className={'nav___links___link'} activeClassName={'nav___links___link---active'} to={'/kontakt'}>Kontakt</NavLink>
                </div>
            </nav>
        );
    }
}

export default Navigation;
