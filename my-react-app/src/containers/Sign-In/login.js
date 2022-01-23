import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Loading from "../../components/state_component/loading_state/loading";
import './login.css'
import errorIcon from "../../error-905.svg";
import {loginAsync} from "../../redux/actions/userActions";
import {REQUEST_STATUSES} from "../../utils/constants";

const mapStateToProps = store =>({ userLogin: store.userLogin});
function mapDispatchToProps(dispatch) {
    return {
        loginAsync:loginAsync(dispatch),
    };
}
class Login extends React.Component{
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    state={
        email:null,
        password:null,
        emailError:null,
        passwordError:null,
    }
    handleInputChange(event){
        const target = event.target;
        let value = target.value;
        const name = target.name;
        this.setState({
            [name]:value,
        })
    }
    validate(){
        let emailError = '' ;
        let passwordError = '';

        const reg =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!this.state.email || reg.test(this.state.email) === false || this.state.email === null){
            emailError = 'Email Field is Invalid';
        }
        if(!this.state.password ) {
            passwordError = 'Password field is required';
        }
        if(emailError||  passwordError ){
            this.setState({emailError,passwordError});
            return false;
        }
        return true
    }
    submit(){
        if(this.validate()){
            this.props.loginAsync((this.state));
            this.setState({
                email: '',
                password: '',
            })
        }
    }
    render() {
        return(
            <>
            {this.props.userLogin.status ==='initial' &&(
                <div className={ this.props.clicked ? `'container2 animation1`:'container2 ' }>
                    <div className='container-form2'>
                        <div className='login'><p className="loginName">Login </p></div>
                        <div className="form3">
                            <div>
                                <label>Email</label>
                                <input type="email" name='email' onChange={this.handleInputChange} value={this.state.email} placeholder="Type your email"/>
                                    <span className="text-danger">{this.state.emailError}</span>
                                </div>
                                <div>
                                    <label>Password</label>
                                    <input type="text" name='password' onChange={this.handleInputChange} value={this.state.password} placeholder="Type your password"/>
                                    <span className="text-danger">{this.state.passwordError}</span>
                                </div>
                                <div>
                                    <div>
                                        <button type='checkbox' > </button>
                                        <label>Remember me</label>
                                    </div>
                                </div>
                            </div>
                            <div className="loginButton">
                                <button onClick={() => this.submit()} className='login-button'>Login</button>
                            </div>
                        </div>
                    </div>
                )}
                {this.props.userLogin.status === REQUEST_STATUSES.ERROR && (
                    <div className="error">
                        <div>
                            <img src={errorIcon}/><div>Something went wrong!
                            <span className="errorMessage">Please try again.</span></div>
                        </div>
                    </div>
                )}
                {this.props.userLogin.status===REQUEST_STATUSES.LOADING && (
                    <Loading/>
                )}
                {this.props.userLogin.status===REQUEST_STATUSES.SUCCESS && (
                    this.props.history.push({
                        pathname:'/home',
                    })
                )}
            </>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login))