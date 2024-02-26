import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <h1>This is a Header</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/choco">Chocolates</Link>
                <Link to="/cookie">Cookie</Link>
                <Link to="/cake">Cake</Link>
                <Link to="/icecreams">Ice Creams</Link>
            </nav>
        </>
    )
}