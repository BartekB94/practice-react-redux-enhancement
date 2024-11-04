import React, { Component } from "react";

const withPopup = function (styles) {
  return function (WrappedComponent) {
    return class extends Component {
      state = {
        isActive: true,
      };
      handlePopup = () => {
        this.setState({ isActive: false });
      };
      render() {
        const popupStyles = {
          display: "flex",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          backgroundColor: "white",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          borderRadius: "8px",
          zIndex: 99,
        };
        if (this.state.isActive) {
          return (
            <section style={{ ...popupStyles, ...styles }}>
              <WrappedComponent />
              <button onClick={this.handlePopup}>X</button>
            </section>
          );
        }
        return <WrappedComponent />;
      }
    };
  };
};

export default withPopup;
