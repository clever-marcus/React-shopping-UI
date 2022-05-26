import React from 'react';
import styled from "styled-components"
import "../App";
import { Link } from "react-router-dom";


const Container = styled.div`
    height: 50px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 500;
`;

const NavBar = styled.nav`
    width: 100%
    height: 93vh;
    position: relative;
    padding: 20px 25rem;
    padding-right: 50px;
`;




const Announcement = () => {
    return (
        <Container>
            Amazing Deals! With Free Deliveries on Orders Above 5k
            <NavBar>
                <Link
                    to="/"
                    style={{
                        fontSize: "20px",
                        fontWeight: "400",
                        textDecoration: "none",
                        color: "#fff",
                        paddingLeft: "20px"
                    }}> Home </Link>
                <Link
                    to="/product"
                    style={{
                        fontSize: "20px",
                        fontWeight: "400",
                        textDecoration: "none",
                        color: "#fff",
                        paddingLeft: "20px"
                    }}> Products </Link>
                <Link
                    to="/productlist"
                    style={{
                        fontSize: "20px",
                        fontWeight: "400",
                        textDecoration: "none",
                        color: "#fff",
                        paddingLeft: "20px"
                    }}> ProductList </Link>
                <Link
                    to="/cart"
                    style={{
                        fontSize: "20px",
                        fontWeight: "400",
                        textDecoration: "none",
                        color: "#fff",
                        paddingLeft: "20px"
                    }}> Cart </Link>
            </NavBar>
        </Container>
    )
}

export default Announcement