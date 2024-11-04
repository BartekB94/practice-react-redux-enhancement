import React from "react";
import Welcome from "./../src/components/Welcome";
import withPopup from "./../src/hoc/withPopup";

const styles = { backgroundColor: "green", opacity: 0.8, color: "white" };
const ComponentWithPopup = withPopup(styles)(Welcome);

const Task02 = () => {
  return (
    <section>
      <h2>Task 02</h2>
      <ComponentWithPopup />
    </section>
  );
};

export default Task02;
