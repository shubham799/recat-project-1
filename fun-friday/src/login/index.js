import React,{Component} from 'react';
import LoginForm from './component';
import { connect } from 'react-redux';
import './login.css'

class Login extends Component{
    constructor(props){
        super(props);
        this.state ={
            user:{
                username:'',
                password:''
            },
            notValidUser:false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.redirectToRegister = this.redirectToRegister.bind(this);
    }

    componentDidMount(){
        console.log('users1----',this.props.users.userInfo)
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
        const users = this.props.users.userInfo;
        let isAuthenticated = users.some((user) => {
            return user.email == this.state.user.username
        })
        if(isAuthenticated){
            localStorage.setItem('Email_id',this.state.user.username); 
            this.setState({notValidUser:false})
        }else{
            this.setState({notValidUser:true})
        }

    }
    redirectToRegister(event){
        event.preventDefault();
        this.props.history.push('/register');

    }
    render(){
        return(
            <section class="login-form">
                <LoginForm onChange={this.onChange} onSubmit={this.onSubmit} isLogin={this.props.isLogin} redirectToRegister={this.redirectToRegister} notValidUser={this.state.notValidUser}/>
            </section>
        )
    }
}
const mapStateToProps = state => {
    return {
        users:state.registerdUsers
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);