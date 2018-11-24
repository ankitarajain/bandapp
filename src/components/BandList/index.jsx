import React from "react";
import PropTypes from "prop-types";
import "./style.less";

class BandList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bands :this.props.bands,
      selected : []
    }
    this.onCardClick = this.onCardClick.bind(this);
  }

  onCardClick(band){

    let {selected} = this.state;
    const index = selected.indexOf(band.id);
    if(index == -1){
      selected.push(band.id)
    }else{
      selected.splice(index, 1);
    }
    this.setState(selected)
    this.props.onClick(selected)

  }

  createCard(band){
    return (
      <div  key={band.id}
       className={"card " + (this.state.selected.indexOf(band.id) >= 0 ?"selected":"")} onClick={()=>{this.onCardClick(band)}}>
        <img className="card-img" src={band.image} alt={band.name} />
        <div className="card-body">
          <h3 className="card-title">{band.name}</h3>
          <p className="card-text">{band.description}</p>
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

export default BandList;
