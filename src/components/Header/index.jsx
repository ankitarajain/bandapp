import React from "react";
import DocumentTitle from "react-document-title";
import "./style.less";

class Header extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="app-header-component">
        <DocumentTitle title="Band Application" />
        <h3 className="title">Band Application</h3>
      </div>
    );
  }
}

export default Header;
