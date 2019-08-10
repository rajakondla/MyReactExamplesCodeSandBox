import React, { useState, Component } from "react";
import ReactDOM from "react-dom";

const dumbComp = ({ course }) => {
  return (
    <>
      <div>{course.id}</div>
      <div>{course.name}</div>
    </>
  );
};

export default dumbComp;
