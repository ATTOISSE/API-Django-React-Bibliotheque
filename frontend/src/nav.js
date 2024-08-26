import React from 'react';
import { a } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

export function Nav() {
    return <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand offset-1" href="/"> <b> LIBRARY</b></a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="" className="nav-link mx-3 ">Home</a>
                    </li>
                    <li className="nav-item ">
                        <a href="" className="nav-link mx-3 ">Catalogue</a>
                    </li>
                    <li className="nav-item ">
                        <a href="" className="nav-link mx-3 ">Panier</a>
                    </li>
                    <li className="nav-item ">
                        <a href="" className="nav-link mx-3 ">Commandes</a>
                    </li>
                </ul>
            </div>
        </nav>
    </>
}

