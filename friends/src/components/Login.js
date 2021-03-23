import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                <form>
                    <label>Username:
                    <input />
                    </label>
                    <label>Password:
                    <input />
                    </label>
                    <button>Log In</button>
                </form>
            </div>
        )
    }
}
