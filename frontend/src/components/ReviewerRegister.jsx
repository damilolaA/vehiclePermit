import React, { Component } from 'react';
import axios from 'axios';

class ApplicantRegister extends Component {
	constructor() {
		super()
		this.state = {
      errorMessages: {},
      adminData: {
        email: '',
        password: ''
      },
      redirect: false,
    };

    this.submitForm = this.submitForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
	}

	submitForm(e) {
    e.preventDefault();

    this.validateForm();

    this.postAdminData();

    this.clearForm();
  }

  handleChange(e) {
    let dummy = this.state.adminData,
      input = e.target.name;

    dummy[input] = e.target.value;

    this.setState(dummy);
  }

  clearForm() {
    let id = this.state.id;

    if (id) {
      this.setState({ adminData: '' });
    }
  }

  validateForm() {
    let data = this.state.adminData,
      errors = { errorMessages: {} };

    for (let value in data) {
      if (data[value] === '') {
        errors.errorMessages[value] = 'Please enter your ' + value;
        this.setState(errors);
      }
    }

    return;
  }

  postAdminData() {
    let data = this.state.adminData;

    console.log(data);

    if (data['email'] !== '' && data['password'] !== '') {
      this.setState({ loading: true });

      axios({
        method: 'post',
        url: 'http://localhost:4000/api/v1/reviewer',
        data: data
      })
      .then(response => {
        this.setState({loading: false});
        this.setState({ redirect: true });
      })
      .catch(err => {
        console.log(err);
      });
    } else {
      console.log('request not successful');
    }
  }

	render() {
		return (
	    <div>
        <div className="wrapper">
          <h1 id="register-label">Reviewer Register</h1>
          <hr />
          <form id="register" onSubmit={this.submitForm}>
            <div>
              <p className="err">{this.state.errorMessages.email ? this.state.errorMessages.email : ''}</p>
              <label>email:</label>
              <input onChange={this.handleChange} type="text" name="email" placeholder="email" />
            </div>

            <div>
              <p className="err">{this.state.errorMessages.password ? this.state.errorMessages.password : ''}</p>
              <label>password:</label>
              <input onChange={this.handleChange} type="password" name="password" placeholder="password" />
            </div>

            <input type="submit" name="register" value="register" />
          </form>

          <h4 className="jumpto">
            Have an account? <a href="/login">login</a>
          </h4>
        </div>
      </div>
	  );
	}
}

export default ApplicantRegister;