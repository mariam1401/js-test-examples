import React from 'react'
import {connect} from 'react-redux'
import arrow from "../../icons8-right-arrow-96.png";
import {addUserAsync} from "../../redux/actions/userActions";
import {REQUEST_STATUSES} from "../../utils/constants";
import Loading from "../../components/state_component/loading_state/loading";
import SuccessState from "../../components/state_component/success_state/successState";
import Error_state from "../../components/state_component/error_state/error_state";
import Login from "../Sign-In/login";
import image from "../../pexels-cottonbro-4065891.jpg";
import './addUser.css'


const mapStateToProps = store =>({ addUser: store.addUser });
function mapDispatchToProps(dispatch) {
    return {
        addUserAsync: addUserAsync(dispatch),
    };
}

class AddUser extends React.Component{
constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.animate=this.animate.bind(this)
    this.state={clicked:false}
}
    state = {
        userName: null,
        email: null,
        password: null,
        repeatPassword: null,
        userNameError:null,
        emailError:null,
        passwordError:null,
        repeatPasswordError:null,
        loading:true,
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
       let userNameError='';
       let emailError = '' ;
       let passwordError = '';
       let repeatPasswordError =''
        if(!this.state.userName){
            userNameError = 'Name field is required';
        }
        const reg =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!this.state.email || reg.test(this.state.email) === false || this.state.email === null){
            emailError = 'Email Field is Invalid';
        }
        if(!this.state.password ) {
            passwordError = 'Password field is required';
        }
        if(!this.state.repeatPassword || this.state.repeatPassword !== this.state.password ){
            repeatPasswordError = 'repeatPassword field is required';
        }
        if(emailError|| userNameError || passwordError || repeatPasswordError){
        this.setState({userNameError,emailError,passwordError,repeatPasswordError});
        return false;
    }
        return true
    }
    submit(){
        if(this.validate()){
            this.props.addUserAsync((this.state));
            this.setState({
                userName: '',
                email: '',
                password: '',
                repeatPassword: '',
            })
       }
    }
animate(){
    this.setState( ()=> {
        return this.setState({clicked:true})
        })
}
        render() {
            const clicked =this.state.clicked
                return (
                    <>
                        <div className="flex-item-left">
                            <img src={image} className="background_image" />
                        </div>
                        {this.props.addUser.status === 'initial' && (
                    <div className={clicked ? `'flex-item-right animation`:'flex-item-right'}>
                        <div className="header"><h1 >Sign Up</h1></div>
                        <div className="form">
                            <div>
                                <label className="label"><b>Username</b></label>
                                <input name='userName' className="input" onChange={this.handleInputChange}value={this.state.userName} type="text" placeholder="Username..."/>
                                <span className="text-danger"> {this.state.userNameError}</span>
                            </div>
                            <div>
                                <label className="label"><b>Email</b></label>
                                <input name='email' className="input" onChange={this.handleInputChange} value={this.state.email} type='email' placeholder="Email..."/>
                                <span className="text-danger">{this.state.emailError}</span>
                            </div>
                            <div>
                                <label className="label"><b>Password</b></label>
                                <input name='password' onChange={this.handleInputChange} value={this.state.password} className="input" type="password" placeholder="**************"/>
                                <span className="text-danger">{this.state.passwordError}</span>
                            </div>
                            <div>
                                <label className="label"><b>Repeat Password</b></label>
                                <input name='repeatPassword' onChange={this.handleInputChange} value={this.state.repeatPassword} className="input" type="password" placeholder="**************"/>
                                <span className="text-danger">{this.state.repeatPasswordError}</span>
                            </div>
                        </div>
                        <div className="privacy"><p><input type="checkbox"/> I agree to the <span>Terms of User</span></p></div>
                        <div className="buttons">
                            <div className='submitSignUp'><button className="submit" onClick={() => this.submit()}> Sign up</button></div>
                            <button onClick={()=>this.animate()} className='signInArrow' >
                                <label>Sign in</label>
                                <div><img src={arrow} className="arrow"/></div>
                            </button>
                        </div>
                    </div>
                        )}
                        {this.props.addUser.status === REQUEST_STATUSES.ERROR && (
                          <Error_state message='Something was wrong'/>
                        )}
                        {this.props.addUser.status===REQUEST_STATUSES.LOADING && (
                           <Loading/>
                        )}
                        {this.props.addUser.status=== REQUEST_STATUSES.SUCCESS && (
                            <SuccessState/>
                        )}
                        <Login clicked={clicked}  />
                    </>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddUser)