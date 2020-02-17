import React, { Component } from 'react'
import { Button,Form,FormGroup,label,Input,FormText} from 'reactstrap';
import'./Style.css';
import{Link, Redirect} from 'react-router-dom';
import axios from 'axios';

export default class Login extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             email: '',
             password: '',
             isLoggedIn: false
        }
    }

    
    handleChange=(e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    handleSubmit=(event) =>{
        event.preventDefault();
        axios.post('http://localhost:3000/staffs/login', this.state)
        .then((response)=>{
            console.log(response)

            localStorage.setItem('token', response.data.token)
            this.setState({isLoggedIn:true})
        }).catch((err)=>console.log(err.response.data))
        this.setState({email: '', password: ''})
    }

    render() {
        if(this.state.isLoggedIn){
            return <Redirect to='/reminder'/>
        }
        return (
            <div className="box">
                <h1>LOGIN FORM</h1>
                <Form>
                    <FormGroup>
                        <label for='email'>Email</label>
                        <Input type="email" id='email' name='email' placeholder="Enter Email" value={this.state.email} onChange={this.handleChange}/>
                    </FormGroup>

                    <FormGroup>
                        <label for='password'>Password</label>
                        <Input type="password" id='username' name='password' placeholder="Enter Password"  value={this.state.password} onChange={this.handleChange}/>
                    </FormGroup>

                    <Button className="btn-primary" onClick={this.handleSubmit}>Login</Button>
                    <FormText>Not register yet?<Link to='/register'>Register here</Link></FormText>
                    </Form>
            </div>
        )
    }
}