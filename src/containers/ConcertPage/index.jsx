import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getConcertsList } from "../../redux/actions/concert_actions";
import  ConcertList  from "../../components/ConcertList";
import "./style.less";

class ConcertPage extends React.Component {

  componentWillMount(){
      this.props.actions.getConcertsList();
  }

  render() {
   if(this.props.concerts.loading ){
      return(<div />)
    }

    return (
      <div>
        <ConcertList concerts={this.props.concerts.concerts}  />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  concerts : state.concerts
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
