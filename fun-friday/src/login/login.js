import React,{Component} from 'react';
import './login.css'

class Login extends Component{
    constructor(props){
        super(props);
        this.state ={
            user:{
                username:'',
                password:''
            }
        };
        this.onChange = this.onChange.bind(this);
    }
    onChange(event){
        event.persist();
        event.stopPropagation();
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;
        this.setState({user});
    }
    onSubmit(event){
        event.preventDefault();
        localStorage.setItem('Email_id',this.state.user.username); 
    }
    render(){
        return(
            <section class="login-form">
                <form>
                    <input required type="text" name="username" placeholder="Email" onChange={this.onChange} /><br/>
                    <input required type="password" name="password" placeholder="Enter password" onChange={this.onChange} /><br/>
                    <input type="submit" value="Login"/>
                </form>
                {/* <div>{this.state.user}</div> */}

            </section>
        )
    }
}
export default Login;