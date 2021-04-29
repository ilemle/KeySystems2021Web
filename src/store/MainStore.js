import {observable,action, computed, makeObservable} from 'mobx';
import { check } from 'prettier';

export default class MainStore{
    constructor(){
        makeObservable(this);
    }
    @observable userLogin = 'Саша Петров';
    @action changeUserLogin (newUserLogin){
        this.userLogin=newUserLogin;
    }

    @observable isAutorise=false;
    @action changeUserAutoriseState=(log)=>{
        this.isAutorise=log;
    }

    @observable contentButton = '';
    @action setButtonContent=(buttonContent)=>{
        this.contentButton=buttonContent;
    }

    @observable currentIdStudent=-1;
    @action setSelectIdStudent=(id)=>{
        this.currentIdStudent=id;
    }

    @observable checkedUsers=Array(11).fill(false);
    @observable counterClicer=0;
    @action checkOrAddCheckedUser=(id,arr)=>{

        for (let i = 0; i < this.checkedUsers.length; i++) {
           
            if(i===id&&this.checkedUsers[i]==false){
                this.checkedUsers[i]=true;
                arr[i-1].style.backgroundColor='lightgrey' ;
                this.counterClicer++;
            }
        }
    }

}
//<tr class="ant-table-row ant-table-row-level-0">