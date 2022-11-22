import './index.css'

import {Component} from 'react'

const url = 'https://apis.ccbp.in/login'

class LoginForm extends Component {
  state = {username: '', password: '', errorMsg: ''}

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.setState({username: '', password: ''})
      this.onSubmitSuccess()
    } else {
      this.setState({errorMsg: data.error_msg})
    }
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, errorMsg} = this.state
    return (
      <div className="login-container">
        <img
          className="login-img"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <img
            className="img-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <label htmlFor="uname">USERNAME</label>
          <input
            className="input-values"
            id="uname"
            type="text"
            placeholder="Username"
            value={username}
            onChange={this.onChangeUserName}
          />
          <label htmlFor="pword">PASSWORD</label>
          <input
            id="pword"
            placeholder="Password"
            type="password"
            className="input-values"
            value={password}
            onChange={this.onChangePassword}
          />
          <button className="button" type="submit">
            Login
          </button>
          <p className="error">{errorMsg}</p>
        </form>
      </div>
    )
  }
}

export default LoginForm
