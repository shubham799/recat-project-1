import React,{Component} from 'react';
import RegisterForm from './component';
import { submitUserInfo } from '../actions/register';
import { connect } from 'react-redux';

class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo:{
                firstname:'',
                lastname:'',
                email:'',
                password:'',
                mobileNumber:''
            }
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onSubmit(event){
        event.preventDefault();
        const user = this.state.userInfo;
        this.props.submitUserInfo(user);
        this.props.history.push('/login')
    }

    onChange(event){
        const field = event.target.name;
        const userInfo = this.state.userInfo;
        userInfo[field] = event.target.value;
        this.setState({
            userInfo
        }); 
    }
    render(){
        return(
            <section>
                <RegisterForm onChange={this.onChange} onSubmit={this.onSubmit} isLogin={this.props.isLogin}/>
            </section>
        )
    }
}
const mapStateToProps = state => {
    return {
        userInfo:state.userInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        submitUserInfo:(user)=>{
            dispatch(submitUserInfo(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);