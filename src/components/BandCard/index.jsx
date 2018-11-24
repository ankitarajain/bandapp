import React from "react";
import PropTypes from "prop-types";
import Swipe from 'react-easy-swipe';
import "./style.less";

class BandCard extends React.Component {

  constructor(props) {
    super(props);
   
    this.onCardClick = this.onCardClick.bind(this);
    this.onCardSwap = this.onCardSwap.bind(this);
  }

  onSwipeStart(event) {
    console.log('Start swiping...', event);
  }
 
  onSwipeMove(position, event) {
    console.log(`Moved ${position.x} pixels horizontally`, event);
    console.log(`Moved ${position.y} pixels vertically`, event);
  }
 
  onSwipeEnd(event) {
    console.log('End swiping...', event);
  }
  onCardClick(band){
    if(!this.props.onClick){
        return;
    }
    this.props.onClick(band)
  }

  onCardSwap(band){
    // alert("onCardSwap")
    //  this.props.onClick(band)
    // this.props.onSwapRight(selected)
   // this.props.onSwapLeft(selected)
  }

  render() {
    const band = this.props.data;
    return (
      <Swipe
        className="swipcard"
        key={`band${band.id}`}
        onSwipeStart={this.onSwipeStart}
        onSwipeMove={this.onSwipeMove}
        onSwipeEnd={this.onSwipeEnd}
      >
        <div  className={` card ${  this.props.selected == true ?"selected":""}`} onClick={()=>{this.onCardClick(band)}}>
          <img className="card-img" src={band.image} alt={band.name} />
          <div className="card-body">
            <h3 className="card-title">{band.name}</h3>
            <p className="card-text">{band.description}</p>
          </div>
        </div>
      </Swipe>

    )
  }
}

BandCard.defaultProps = {
  data: [],
  selected:false,
  onClick:()=>{}
};

BandCard.propTypes = {
  onClick:PropTypes.func,
  selected:PropTypes.bool,
  data:  PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string
  })
};

export default BandCard;
