
import React, { Component } from 'react';

export class Validation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      Email: '',
      PhoneNumber: '',
      firstErr: '',
      lastErr: '',
      emailErr: '',
      PhoneErr: '',
      firstValid: false,
      lastValid: false,
      emailValid: false,
      phoneValid: false,
    };
  }

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
       [`${name}Valid`]: false,
       [`${name}Err`]: '',
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.handleFormValid();
  };

  handleFormValid = () => {
    let { firstName, lastName, Email, PhoneNumber } = this.state;
    let firstErr = '', lastErr = '', emailErr = '', PhoneErr = '';
    let firstValid = true, lastValid = true, emailValid = true, phoneValid = true;

    if (firstName.length < 3) {
      firstErr = 'First name should be at least 3 characters.';
      firstValid = false;
    }
    if (lastName.length < 2) {
      lastErr = 'Last name should be at least 2 characters.';
      lastValid = false;
    }
    if (!Email.includes('@')) {
      emailErr = 'Email should include "@".';
      emailValid = false;
    }
    if (PhoneNumber.length < 10) {
      PhoneErr = 'Phone number should be exactly 10 digits.';
      phoneValid = false;
    }

    this.setState({
      firstErr, lastErr, emailErr, PhoneErr,
      firstValid, lastValid, emailValid, phoneValid
    });

    if (firstValid && lastValid && emailValid && phoneValid) {
      alert('Form submitted successfully!');
    }
  };

  render() {
    return (
      <div>
        <h3>ContactUS</h3>
        <div className="container">
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
              <form onSubmit={this.handleSubmit}>
                {/* First Name */}
                <input
                  type="text"
                  name="firstName"
                  className={`form-control mb-2 ${this.state.firstValid ? 'is-valid' : this.state.firstErr ? 'is-invalid' : ''}`  }
                  placeholder="Enter your first name"
                  value={this.state.firstName}
                  onChange={this.handleInput}
                />
                {this.state.firstValid && !this.state.firstErr && (
                  <div className="valid-feedback d-block"> </div>
                )}
                {this.state.firstErr && (
                  <div className="invalid-feedback d-block">{this.state.firstErr}</div>
                )}

                {/* Last Name */}
                <input
                  type="text"
                  name="lastName"
                  className={`form-control  mb-2 ${this.state.lastValid ? 'is-valid' : this.state.lastErr ? 'is-invalid' : ''}`}
                  placeholder="Enter your last name"
                  value={this.state.lastName}
                  onChange={this.handleInput}
                />
                {this.state.lastValid && !this.state.lastErr && (
                  <div className="valid-feedback d-block"> </div>
                )}
                {this.state.lastErr && (
                  <div className="invalid-feedback d-block">{this.state.lastErr}</div>
                )}

                {/* Email */}
                <input
                  type="email"
                  name="Email"
                  className={`form-control mb-2 ${this.state.emailValid ? 'is-valid' : this.state.emailErr ? 'is-invalid' : ''}`}
                  placeholder="Enter your email"
                  value={this.state.Email}
                  onChange={this.handleInput}
                />
                {this.state.emailValid && !this.state.emailErr && (
                  <div className="valid-feedback d-block"> </div>
                )}
                {this.state.emailErr && (
                  <div className="invalid-feedback d-block">{this.state.emailErr}</div>
                )}

                {/* Phone Number */}
                <input
                  type="text"
                  name="PhoneNumber"
                  className={`form-control mb-2 ${this.state.phoneValid ? 'is-valid' : this.state.PhoneErr ? 'is-invalid' : ''}`}
                  placeholder="Enter your phone number"
                  value={this.state.PhoneNumber}
                  onChange={this.handleInput}
                />
                {this.state.phoneValid && !this.state.PhoneErr && (
                  <div className="valid-feedback d-block"> </div>
                )}
                {this.state.PhoneErr && (
                  <div className="invalid-feedback d-block">{this.state.PhoneErr}</div>
                )}

                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Validation;
