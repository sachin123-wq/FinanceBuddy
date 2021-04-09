import React, { Component } from "react";
import "./index.scss";

export const Button = (props) => {
    return (
    <div className={`btn primary-btn ${props.className || ""}`} onClick={props.onClick}>{props.text}</div>
    )
}

export const OutlineButton = (props) => {
    return (
    <div className={`btn outline-btn ${props.className || ""}`} onClick={props.onClick}>{props.text}</div>
    )
}
