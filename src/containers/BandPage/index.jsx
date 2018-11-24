import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getBandList,selectBand } from "../../redux/actions/band_actions";
import  BandList from "../../components/BandList";
import "./style.less";

class BandPage extends React.Component {

  constructor(props){
    super(props); 
  }
  componentWillMount(){
      this.props.actions.getBandList();
  }

  onBandSelected(data){
    this.props.actions.selectBand(data);
  }
  render() {
    console.log(this.props.bands.selected)
   if(this.props.bands.loading){
      return(
        <div>Loading </div>
      )
    }
    return (
      <div className="band-page">
        Please select atleast 2 band to add to favourite.
        <BandList bands={this.props.bands.bands} onClick={this.onBandSelected.bind(this)} />
        <button   
          type="button" 
          className={"btn btn-raised btn-primary submit-btn " + (this.props.bands.selected.length < 2 ? 'disabled' : '')}
        >
          Add to Faviourites</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  bands : state.user
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Object.assign({}, { getBandList,selectBand }), dispatch)
});

BandPage.defaultProps = {
  bands: {
    loading: false,
    error: false,
    bands: [],
    selected: []
  }
};

BandPage.propTypes = {
  bands: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.bool,
    selected: PropTypes.arrayOf(PropTypes.number),
    bands: PropTypes.arrayOf(PropTypes.shape({
        total_cost: PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          description: PropTypes.string,
          image: PropTypes.string
        })
      }))
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BandPage);
