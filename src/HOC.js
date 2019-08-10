import React, { useState, Component } from "react";
import ReactDOM from "react-dom";

function HOC(WrapperComponent) {
  return function() {
    const [course] = useState({ id: 0, name: "Raja Kondla" });

    // render() {
    return <WrapperComponent course={course} />;
    //}
  };
}

export default HOC;
