import {React, useState} from "react";
import { FaCalendarCheck } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useEffect } from "react";
import "../AdminDash/adminDashboard.css"
import "./applyfund.css"
function TrackFunds() {
    const [dataa, setData] = useState();

    function logOut() {
        localStorage.removeItem("email");
        window.location.assign("/login");
    }

    useEffect(() => {
        getData();
    }, [])

    async function getData() {
        const email = localStorage.getItem("email");
        console.log("em" + email);
        if (!email) {
            alert("Please Login first!");
            window.location.assign("/login");
        }
        let token = localStorage.getItem('token');
        const response = await fetch('https://crawler-backend.vercel.app/api/findFundRequest', {
            headers: {
                'Authentication': token,
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                email,
            }),
        })

        const data = await response.json()
        console.log(data);
        setData(data);
    }

    return (

        <div className="TrackFund">
        <nav className="navbar navbar-light navbar-expand-lg py-0">

        <ul className="navbar-nav ms-auto pe-3 ">
            <li className="nav-item">
                <NavLink to="/applyfunds" className="nav-link shadow bg-primary rounded text-light m-2" >Apply for Funds</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/trackFunds" className="nav-link shadow bg-primary rounded text-light m-2">Track Fund Status</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="" className="nav-link shadow bg-primary rounded text-light m-2" onClick={logOut}>LogOut</NavLink>
            </li>
        </ul>
    </nav>

    <br />
    <h1 >Track Fund Request</h1>
    <br />
    <div className="AppCard">
    <br />
    <h1>Name: Test</h1>
    <h3>StartUp Name: Test</h3>
    <h3>Email: test@test</h3>
    <h3>Contact: 8208273298</h3>
    <h3>Funds Requried:50000</h3>
    <h3>Reason: Test</h3>
    <br />
    </div>
    </div>
    );
}

export default TrackFunds;