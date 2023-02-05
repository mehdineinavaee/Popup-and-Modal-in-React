import React, { Component } from "react";
import "./modal.css";
import ModalOne from "./modal-one";
import ModalTwo from "./modal-two";
import ModalThree from "./modal-three";

class Modal extends Component {
  state = {
    show: true,
    counter: 1,
  };

  render() {
    const { show, counter } = this.state;
    return (
      <>
        {show && counter <= 3 ? (
          <div className="modalPosition">
            <div className="modalContainer">
              {counter <= 2 ? (
                <div className="rightToLeft">
                  <button
                    className="btn btn-default close-modal-btn"
                    onClick={() => this.setState({ show: false })}
                  >
                    &times;
                  </button>
                </div>
              ) : (
                ""
              )}
              {counter === 1 && <ModalOne />}
              {counter === 2 && <ModalTwo />}
              {counter === 3 && <ModalThree />}
              <div className="footer">
                {counter <= 2 ? (
                  <button
                    className="btn btn-primary modal-btn"
                    onClick={() => this.setState({ counter: counter + 1 })}
                  >
                    Next
                  </button>
                ) : (
                  <div style={{ textAlign: "center" }}>
                    <div
                      style={{
                        display: "inline-block",
                        width: "540px",
                      }}
                    >
                      <button
                        className="btn btn-primary modal-btn"
                        onClick={() => this.setState({ counter: counter + 1 })}
                      >
                        Finish
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <>
            <br />
            <h1 className="PoppinsLatin-Black">Finished the task</h1>
          </>
        )}
      </>
    );
  }
}

export default Modal;
