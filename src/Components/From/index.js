import React from "react";
import './style.scss';
import styles from './style.module.css';
import clsx from "clsx";



class Form extends React.Component{
    constructor(){
        super();        
        this.Change = this.Change.bind(this);
        this.ButtonClick = this.ButtonClick.bind(this);
    }
    state = {
        login: '',
        password: '',
        trueLogin: 'sasha',
        truePassword: '12345',
        isChangeColor: false       
    }
    Change(e){
        const {value, name} = e.target;
        this.setState({
            [name]: value,
        });
    }
    ButtonClick(){
        const log = this.state.trueLogin;
        const pass = this.state.truePassword;
        if(log === this.state.login && pass === this.state.password){
            this.setState({
                isChangeColor: false
            })
            console.log(`Авторизація успішна`);
        }else{
            console.log(`Авторизація не успішна`);
            this.setState({
                isChangeColor: true
            })
        } 
        
    }
    render(){
       console.log(this.state);
        return(
            <div className="container">                
                <form className="container-form" >
                <label className={clsx('text', this.state.isChangeColor && 'erorText'  )} >Login</label>
                <input className={clsx(`${styles.inputText}`, this.state.isChangeColor && `${styles.eror}`  )} type='text' name="login" value={this.state.login} onChange={this.Change}></input>    
                <br />
                <label className={clsx('text', this.state.isChangeColor && 'erorText'  )}>Password</label>                
                <input className={clsx(`${styles.inputText}`, this.state.isChangeColor && `${styles.eror}`  )} type='text' name="password" value={this.state.password} onChange={this.Change}></input>
                <br />
                <button onClick={this.ButtonClick}>Авторизуватися</button>
                </form>                            
              
                <button className="button" onClick={this.ButtonClick} >Авторизуватися</button>
                           
            </div>
        )       
    }
}

export default Form;