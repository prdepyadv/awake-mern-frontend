import React, { Component, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react'
import './Auth.css'
import { useHistory } from "react-router-dom";
import axios from 'axios';

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();

    const handleSubmit = async e => {
        e.preventDefault();
        await loginUser(username, password);
    }

    async function loginUser (username, password) {
      let bodyFormData = new FormData()
      bodyFormData.append('username', username)
      bodyFormData.append('password', password)
      axios({
        method: 'post',
        url: '/login',
        data: bodyFormData,
        headers: { 'Content-Type': 'multipart/form-data' },
      })
        .then((response) => {
          if (response.data.error) {
            alert(response.data.message)
            return
          }
          setToken({'token': response.data.data.token});
        })
        .catch((err) => {
          alert(err.message)
        })
    }

    return (
        <Form className="loginForm" onSubmit={handleSubmit}>
            <Form.Field>
                <label>Username</label>
                <input placeholder='Username' name="username" id="username"
                onChange={e => setUserName(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Password</label>
                <input placeholder='Password' name="password" id="password" type='password'
                 onChange={e => setPassword(e.target.value)} />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
    );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};