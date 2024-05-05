import { render } from "react-dom";
import React, { Component } from "react";

class CreateComment extends Component{
    constructor(props){
        super(props);
        this.state = {
            content:'',
            user:''
        };
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUserChange(event){
        this.setState(()=>({
            user:event.target.value
        }));
    }

    handleTextChange(event){
        this.setState(()=>({
            content:event.target.value
        }));
    }    
    handleSubmit(event){
        event.preventDefault();
        this.props.onCommentSubmit({
            user:this.state.user.trim(),
            content:this.state.content.trim()
        })
        this.setState(()=>({
            text:'',
            user:''
        }))
    }
    


    render(){
        return React.createElement(
            'form',
            {className:'createComment',onSubmit:this.handleSubmit},
            React.createElement('input',{type:'text', placeholder:'Your name',value:this.state.user,onChange:this.handleUserChange}),
            React.createElement('input',{type:'text',placeholder:"Thoughts?",value:this.state.content,onChange:this.handleTextChange}),
            React.createElement('input',{type:'submit',value:'Post'})        
        )
    }
}

/* CreateComment.propTypes ={
    content:React.Proptypes.string
} */

export default CreateComment