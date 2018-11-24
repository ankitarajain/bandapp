import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getBandList } from "../../redux/actions/band_actions";
import  BandList from "../../components/BandList";
import "./style.less";

class BandPage extends React.Component {

  constructor(props){
    super(props); 
  }
  componentWillMount(){
      this.props.actions.getBandList();
  }

  render() {
   if(this.props.bands.loading){
      return(
        <div>Loading </div>
      )
    }
    return (
      <div>
        <BandList bands={this.props.bands.bands} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  bands : state.user
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Object.assign({}, { getBandList }), dispatch)
});

BandPage.defaultProps = {
  bands: {
    loading: false,
    error: false,
    bands: []
  }
};

BandPage.propTypes = {
  bands: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.bool,
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
