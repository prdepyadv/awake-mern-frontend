import React, { Component, useEffect, useState } from "react";
import '../App.css';
import axios from "axios";
import useToken from '../useToken';
import Home from '../components/Home';

export default function HomeScreen(props) {

    const { token, setToken } = useToken();
    const {users, setUsers} = useState([]);
    //todo: setusers and remove on exit
    let fetchUsers = () => {
        axios({
            method: 'get',
            url: '/users',
            headers: { 'Authorization': 'Bearer '+token },
        }).then((data) => {
            console.log(data.data);
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        fetchUsers();
        return () => {

        }
    }, []);

    return (
        <div className="main">
            Home Screen
        </div>
    )
}
