import React, { Component } from "react";
import styled from "styled-components";
import { getSteps } from "../services/popup-data";
import "./popup.css";
import Modal from "./modal";

const Button = styled.button`
  background: #fff;
  color: #423fff;
  border: 2px solid white;
  border-radius: 50%;
`;

class Popup extends Component {
  state = {
    steps: [],
    step: [],
    counter: 0,
    trigger: false,
    statusModal: false,
  };

  componentDidMount() {
    const stepsData = [...getSteps()];
    this.setState({ steps: stepsData });
  }

  handleIncrement = () => {
    const { steps, counter } = this.state;
    this.setState({ counter: counter + 1 });
    if (counter < Object.keys(steps).length) {
      this.setState({ trigger: true }, function () {
        this.filterData();
      });
    } else {
      // console.log("Finish the steps");
      this.setState({ trigger: false, statusModal: true });
    }
  };

  filterData() {
    const filter = this.state.steps.filter((m) => m._id === this.state.counter);
    const step = [...this.state.step, filter[0]];
    this.setState({ step });
    // console.log("step", step);
    // console.log("steps", this.state.steps);
    // console.log("counter", this.state.counter);
    // console.log("trigger", this.state.trigger);
  }

  closePopup = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    const step = this.state.step.filter((m) => m._id != e.target.value);
    this.setState({ step });
  };

  render() {
    const { step, counter, trigger, statusModal } = this.state;
    return (
      <>
        <h2>
          <span className={this.getBadgeClasses()}>{this.formatcounter()}</span>
        </h2>
        <Button
          className="btn btn-lg"
          disabled={!trigger && counter != 0}
          onClick={this.handleIncrement}
        >
          <i className="fa fa-plus"></i>
        </Button>
        {trigger ? (
          step.map((item, index) => (
            <div id={item._id} className="popup fade-in" key={index}>
              <div className="popup-inner">
                <button
                  value={item._id}
                  className="btn btn-default close-btn"
                  onClick={this.closePopup}
                >
                  &times;
                </button>
                <div className="d-flex" style={{ marginTop: "10px" }}>
                  <div className="circle-icon">{item._id}</div>
                  <div>
                    <h4 className="PoppinsLatin-Black">{item.title}</h4>
                  </div>
                </div>
                <p className="mt-3">{item.content}</p>
              </div>
            </div>
          ))
        ) : counter != 0 ? (
          statusModal && <Modal />
        ) : (
          <span>Please click on the button</span>
        )}
      </>
    );
  }

  getBadgeClasses() {
    let classes = "mb-2 badge rounded-pill bg-";
    classes += this.state.counter === 0 ? "warning text-dark" : "primary";
    return classes;
  }

  formatcounter() {
    const { counter } = this.state;
    return counter === 0 ? "Zero" : counter;
  }
}

export default Popup;
