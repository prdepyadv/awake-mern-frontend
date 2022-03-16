import React, { Component, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react'
import { useHistory } from "react-router-dom";
import useToken from '../useToken';
import axios from 'axios';

export default function Home(props) {

    const { token, setToken } = useToken();
    let fetchUsers = () => {
        axios({
            method: 'get',
            url: '/users',
            headers: { 'Authorisation': 'bearer '+token },
        }).them((data) => {
            console.log(data);
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(()=>{
        fetchUsers();
    }, [])

    return (
        <div>Hi</div>
    );
}