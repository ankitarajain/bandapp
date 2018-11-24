import React from "react";
import PropTypes from "prop-types";
import "./style.less";

class BandList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
  
    return (
      <div className="bandlist-component">
        this is bandlist
      </div>
    );
  }
}

BandList.defaultProps = {
  bands: []
};

BandList.propTypes = {
  bands: PropTypes.arrayOf(PropTypes.shape({
    total_cost: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string
    })
  }))
};

export default BandList;
