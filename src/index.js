import React, { useState } from "react";
import ReactDOM from "react-dom";
import AuthObj from "./Singleton";
import CustomHook from "./CustomHook";
import Counter from "./UseReducerComponent";
import ClassComponent from "./ClassComponent";
import "./styles.css";

console.log(AuthObj);

const rootElement = document.getElementById("root");
const rootElement1 = document.getElementById("root1");

//console.log(obj1.getInstance === obj2.getInstance);

function HOC(WrapperComponent) {
  return function() {
    const [course] = useState({ id: 0, name: "Raja/Kondla" });
    return <WrapperComponent course={course} />;
  };
}

const Comp = HOC(({ course }) => {
  return (
    <>
      <div>HOC</div>
      <div>{course.id}</div>
      <div>{course.name}</div>
      <div>-------------------</div>
    </>
  );
});

ReactDOM.render(<Comp />, rootElement);

function RenderProps({ children }) {
  const [course] = useState({ id: 0, name: "RajaKondla" });
  return children({ course });
}

ReactDOM.render(
  <RenderProps>
    {({ course }) => {
      return (
        <>
          <div>Render props</div>
          <div>{course.id}</div>
          <div>{course.name}</div>
        </>
      );
    }}
  </RenderProps>,
  rootElement1
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.i = 0;
    this.state = { inc: this.i };
    console.log("Hello from constructor");
  }

  get State() {
    return this.state.inc;
  }

  set State(value) {
    this.setState({ inc: value });
  }

  unsafe_componentWillMount() {
    console.log("componentWillMount => " + this.state.inc);
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps => ");
    if (props.value !== state.value) {
      return {
        value: props.value
      };
    }
    // THIS LINE. TOTALLY UNNECESSARY.
    return null;
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate => " + this.state.inc);
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate => " + this.state.inc);
    return false;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate => " + this.state.inc);
  }

  componentDidMount() {
    console.log("componentDidMount => " + this.state.inc);
    this.setState({ inc: this.state.inc + 1 });
  }

  componentWillUnmount() {
    console.log("componentWillUnmount => " + this.state.inc);
  }

  render() {
    console.log("render => " + this.state.inc);

    return <div>Hello!</div>;
  }
}

//let obj=new App();

ReactDOM.render(<App />, document.getElementById("root2"));
ReactDOM.unmountComponentAtNode(document.getElementById("root2"));

/*
When creating Components with React, not every library integrates well with it's philosophy of wanting to manage the DOM.

An example of this would be using a graphing library like c3. c3 expects to be given a DOM node and will create / manage it's own markup away from React. In this case you should manage cleaning up any elements created by this library when your component is removed from the DOM.

import React, { Component, PropTypes } from 'react';
import c3 from 'c3';

export default class Graph extends Component {

  componentDidMount () {
    this._initGraph();
  }

  componentWillUnmount () {
    this.graph = this.graph.destroy();
  }

  _initGraph () {
    this.graph = c3.generate({
      bindto: this.refs.graph
    });
  }

  render () {
    return (
      <div className="graph">
        <div className="graph__graph" ref="graph"></div>
      </div>
    );
  }
}
Here React creates a single div as a placeholder for c3 to add it's content. This process is kicked off in the componentDidMount lifecycle hook, and cleaned up again in componentWillUnmount.

https://www.freecodecamp.org/news/these-are-the-concepts-you-should-know-in-react-js-after-you-learn-the-basics-ee1d2f4b8030/
*/

const DisplayUser = ({ user }) => {
  return (
    <>
      <h2>{user.id}</h2>
      <h3>{user.Name}</h3>
    </>
  );
};

ReactDOM.render(
  <CustomHook Component={DisplayUser} id={1} />,
  document.getElementById("root3")
);

ReactDOM.render(<ClassComponent />, document.getElementById("root4"));
