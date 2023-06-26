import React from "react";
import { createPortal } from "react-dom";
const portal = document.getElementById("portal");

class Portal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
    this.el.id = Date.now();
  }

  componentDidMount() {
    portal.appendChild(this.el);
  }

  componentWillUnmount() {
    portal.removeChild(this.el);
  }

  render() {
    return createPortal(this.props.children, this.el);
  }
}

export default Portal;
