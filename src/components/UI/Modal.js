import classes from "./Modal.module.css";
import React, { Fragment } from "react";
import ReacrDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modul = (props) => {
  return (
    <Fragment>
      {ReacrDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReacrDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};
export default Modul;
