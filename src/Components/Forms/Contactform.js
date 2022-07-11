import React from 'react';

class ContactForm extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {},
        touched: {},
        formSubmitted: false
      }
// this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
};
handleChange(e) {
      let fields = this.state.fields;
      console.log("dfddf",e.target.name,e.target.value);
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });
}
  
    handleTouch(e){
       let {touched} = this.state;
      if(e.target.name && touched[e.target.name] != true){
          touched[e.target.name] = true;
           this.setState({
            touched
          });
      }
    }
  
    submituserRegistrationForm(e) {
      e.preventDefault();
      this.setState({
        formSubmitted: true
      });
      if (this.validateForm()) {
          let fields = {};
          fields["username"] = "";
          fields["emailid"] = "";
          fields["mobileno"] = "";
          fields["message"] = "";
          this.setState({fields:fields});
          this.setState({
            formSubmitted: false
          });
          alert("Thankyou for contacting us and giving us your reviews!");
      }
}
validateForm() {
let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;
      console.log(fields, "fields");
      if (!fields["username"]) {
        formIsValid = false;
        errors["username"] = "*Please enter your username.";
      }
if (typeof fields["username"] !== "undefined") {
        if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["username"] = "*Please enter alphabet characters only.";
        }
      }
if (!fields["emailid"]) {
        formIsValid = false;
        errors["emailid"] = "*Please enter your email-ID.";
      }
if (typeof fields["emailid"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["emailid"])) {
          formIsValid = false;
          errors["emailid"] = "*Please enter valid email-ID.";
        }
      }
if (!fields["mobileno"]) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter your mobile no.";
      }
if (typeof fields["mobileno"] !== "undefined") {
        if (!fields["mobileno"].match(/^[0-9]{11}$/)) {
          formIsValid = false;
          errors["mobileno"] = "*Please enter valid mobile no.";
        }
      }
if (!fields["message"]) {
        formIsValid = false;
        errors["password"] = "*Please enter your message!";
      }

this.setState({
        errors: errors
      });
      return formIsValid;
}
render() {
    return (
    <div id="main-registration-container">
     <div id="register">
        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >

    
        <label>Name</label>
        <input type="text" name="username" value={this.state.fields.username} 
          onChange={ (e) => {this.handleChange(e);this.validateForm();} }
            onBlur = {(e) => {this.handleTouch(e);this.validateForm();} } />
        {
            this.state.formSubmitted || this.state.touched.username
            ?
              <div className="errorMsg">{this.state.errors.username}</div>
            :
              ''
        }

      
        <label>Email ID:</label>
        <input type="text" name="emailid" value={this.state.fields.emailid} 
           onChange={ (e) => {this.handleChange(e);this.validateForm();} }
            onBlur = {(e) => {this.handleTouch(e);this.validateForm();} } />
           {
            this.state.formSubmitted || this.state.touched.emailid
            ?
              <div className="errorMsg">{this.state.errors.emailid}</div>
            :
              ''
          }
        
        <label>Mobile No:</label>
        <input type="text" name="mobileno" value={this.state.fields.mobileno} 
           onChange={ (e) => {this.handleChange(e);this.validateForm();} }
            onBlur = {(e) => {this.handleTouch(e);this.validateForm();} }   />
          {
            this.state.formSubmitted || this.state.touched.mobileno
            ?
              <div className="errorMsg">{this.state.errors.mobileno}</div>
            :
              ''
          }
        <label>Message</label>
        <textarea
           type="text" name="message" value={this.state.fields.message} 
           rows = {8}
           cols = {31}
           onChange={ (e) => {this.handleChange(e);this.validateForm();} }
            onBlur = {(e) => {this.handleTouch(e);this.validateForm();} } />
           {
            this.state.formSubmitted || this.state.touched.message
            ?
             
              <div className="errorMsg">{this.state.errors.message}</div>
            :
              ''
          }
          <center><input type="submit" className="button"  id = "contact_button" value="Register"/></center>
        </form>
    </div>
</div>
);
  }
}
export default ContactForm;