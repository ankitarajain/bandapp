import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getConcertsList } from "../../redux/actions/concert_actions";
import { BandList } from "../../components/BandList";
import "./style.less";

class ConcertPage extends React.Component {

  render() {
   if(this.props.concerts.loading ){
      return(<div />)
    }

    return (
      <div>
       this is concert page
      </div>
    );
  }
}

const mapStateToProps = state => ({
  concerts : state.user
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Object.assign({}, { getConcertsList }), dispatch)
});

ConcertPage.defaultProps = {
  concerts: {
    loading: false,
    error: false,
    concerts: []
  }
};

ConcertPage.propTypes = {
  concerts: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.bool,
    concerts: PropTypes.arrayOf(PropTypes.shape({
        total_cost: PropTypes.shape({
          id: PropTypes.number,
          band_id: PropTypes.number,
          band_name: PropTypes.string,
          location: PropTypes.string,
          latlon: PropTypes.string,
          date: PropTypes.string,
          latimetlon: PropTypes.string
        })
      }))
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConcertPage);
