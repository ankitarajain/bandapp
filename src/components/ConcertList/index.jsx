import React from "react";
import PropTypes from "prop-types";
import "./style.less";

class ConcertList extends React.Component {

  constructor(props) {
    super(props);
  }

  
  createCard(concert){
    return (
      <div  key={concert.id}
       className="card" >
        <div className="card-body">
          <h3 className="card-title">{concert.band_name}</h3>
          <p className="location"><b>Location : </b>{concert.location}</p>
          <p className="date"><b>Date : </b> {concert.date}</p>
          <p className="time"><b>Time : </b>{concert.time}</p>
        </div>
      </div>
    )
  }
  render() {
  
    const concertListJsx = this.props.concerts.map(concert=>this.createCard(concert))
    return (
      <div className="concertlist-component">
        {concertListJsx}
      </div>
    );
  }
}

ConcertList.defaultProps = {
  bands: []
};

ConcertList.propTypes = {
  onClick:PropTypes.func,
  bands: PropTypes.arrayOf(PropTypes.shape({
    total_cost: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string
    })
  }))
};

export default ConcertList;
