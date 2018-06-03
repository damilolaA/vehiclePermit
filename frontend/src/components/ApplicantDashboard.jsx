import React, { Component } from 'react';
import axios from 'axios';

class ApplicantDashBoard extends Component {

	constructor(props) {
    super(props);
    this.state = {
      applicationData: {
      	'firstname': '',
      	'lastname': '',
      	'email': '',
      	'date': '',
      	'occupation': '',
      	'sex': '',
      	'address': '',
      	'state': '',
      	'imagePath': ''
      },
      errorMessages: {},
      response: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let applicationData = this.state.applicationData,
      inputName = e.target.name;

    applicationData[inputName] = e.target.value;

    this.setState(applicationData);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.validateLoginDetails();

    this.postApplicationData();
  }

  validateLoginDetails() {
    let data = this.state.applicationData,
      errors = { errorMessages: {} };

    for (let value in data) {
      if (data[value] === '') {
        errors.errorMessages[value] = 'Please enter your ' + value;
        this.setState(errors);
      }
    }

    return;
  }

  postApplicationData() {
    let applicationData = this.state.applicationData;

    if (applicationData) {
      this.setState({ loading: true });
      axios({
        method: 'post',
        url: 'http://localhost:4000/api/v1/application',
        data: applicationData
      })
        .then(response => {
          console.log(response);   
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      console.log('no data to post');
    }
  }

	render() {

		return(
			<div>
        <div className="wrapper">
          <h1 id="register-label">Driver Registration</h1>
          <hr />
          <form id="register" action="" formEncType="multipart/form-data" onSubmit={this.handleSubmit}>
            <div>
              <label>FirstName:</label>
              <input onChange={this.handleChange} type="text" name="firstname" placeholder="firstname" />
            </div>

            <div>
              <label>LastName:</label>
              <input onChange={this.handleChange} type="text" name="lastname" placeholder="lastname" />
            </div>

            <div>
              <label>Email:</label>
              <input onChange={this.handleChange} type="text" name="email" placeholder="email" />
            </div>

            <div>
              <label>Date of Birth:</label>
              <input onChange={this.handleChange} type="text" name="date" placeholder="date" />
            </div>

            <div>
              <label>Occupation:</label>
              <input onChange={this.handleChange} type="text" name="occupation" placeholder="occupation" />
            </div>

            <div>
              <label>Sex:</label>
              <select onChange={this.handleChange} name="sex">
                <option>Select Sex</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div>
              <label>Residential Address:</label>
              <input onChange={this.handleChange} type="text" name="address" placeholder="address" />
            </div>

            <div>
              <label>State Of Origin:</label>
              <select onChange={this.handleChange} name="state">
                <option>Select State</option>
               	<option value="lagos">Lagos</option>
                <option value="ogun">Ogun</option>
                <option value="edo">Edo</option>
                <option value="enugu">Enugu</option>
                <option value="kano">Kano</option>
                <option value="Plateau">Plateau</option>
              </select>
            </div>

            <div>
              <label>Image:</label>
              <input onChange={this.handleChange} type="file" name="imagePath" />
            </div>

            <input type="submit" name="registration" value="Submit" />
          </form>
        </div>
		  </div>
		);
	}
}

export default ApplicantDashBoard;