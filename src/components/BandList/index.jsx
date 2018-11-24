import React from "react";
import PropTypes from "prop-types";
import "./style.less";

class BandList extends React.Component {

  constructor(props) {
    super(props);
  }

  createCard(data){
    return (
      <div  key={data.id} className="card" >
        <img className="card-img" src={data.image} alt={data.name} />
        <div className="card-body">
          <h3 className="card-title">{data.name}</h3>
          <p className="card-text">{data.description}</p>
        </div>
      </div>
    )
  }
  render() {
    const bandListJsx = this.props.bands.map(band=>this.createCard(band))
    return (
      <div className="bandlist-component">
        {bandListJsx}
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
