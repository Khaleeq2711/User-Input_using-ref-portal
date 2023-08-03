import React, { Fragment } from "react";
import ReactDom from "react-dom";
import Class from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={Class.backdrop} onClick={props.clickHandler}></div>;
};

const MainModal = (props) => {
  return (
    <div className={Class.modal}>
      <header className={Class.header}>
        <h2>{props.header}</h2>
      </header>
      <div className={Class.content}>
        <p>{props.content}</p>
      </div>
      <footer className={Class.actions}>
        <button onClick={props.clickHandler}>Okay</button>
      </footer>
    </div>
  );
};

const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop clickHandler={props.clickHandler}/>,
        document.getElementById("backdrop-portal")
      )}
      {ReactDom.createPortal(
        <MainModal header={props.header} content={props.content} clickHandler={props.clickHandler}/>,
        document.getElementById("mainModal-portal")
      )}
    </Fragment>
  );
};
export default ErrorModal;
