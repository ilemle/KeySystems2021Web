import React from 'react';
import {observer,inject} from 'mobx-react';
import CloseButton from './CloseButton';
import './index.css';

@inject('MainStore')
@observer
class Header extends React.Component{
    render(){
       const {
        MainStore
       }=this.props
        return(
            <div className='Header'>
                <h2>Здравствуйте, {MainStore.userLogin}</h2>
                <h2>Проверено работ {MainStore.counterClicer}</h2>
                <CloseButton />
            </div>
        )
    }
}

export default Header;