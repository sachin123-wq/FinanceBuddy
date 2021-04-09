import React, { useEffect } from "react";
import "./index.scss";
import Close from "../../images/close.svg";

const Modal = (props) => {
  const { show, large, onClose, className } = props;

  useEffect(() => {
    checkOpen();
  })

  useEffect(() => {
    if (!!show) {
      function handleKeyUp(event) {
        switch (event.key) {
          case "Escape":
            props.onClose()
            break;
        }
      }

      function handleOutsideClick(event) {
        let modal = document.getElementById("modalId");
        if (event.target == modal) {
          props.onClose()
        }
      }

      window.addEventListener("keyup", handleKeyUp);
      window.addEventListener("click", handleOutsideClick);
      return () => {
        window.removeEventListener("keyup", handleKeyUp);
        window.removeEventListener("click", handleOutsideClick);
      }
    }
  }, [props.show]);

  function checkOpen() {
    if (props.show) {
      document.querySelectorAll('body')[0].classList.add('fixed')
    } else {
      document.querySelectorAll('body')[0].classList.remove('fixed')
    }
  }
  return (
    <div id="modalId" className={`modal-overlay ${show && 'show'} ${className}`}>
      <div className={`modal-container ${large && 'large'}`}>
        {onClose && <img className="close-icon" src={Close} onClick={onClose} />}
        {props.children}
      </div>

    </div>
  )
}

export default Modal;