import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Mail from './Mail.jsx';
import { fetchMails, fetchDetails } from './actions';



const mapStateToProps = (state) => {
  return {
    content: state.content,
    details: state.details,
    isLoading: state.isLoadingMails,
    isLoadingDetails: state.isLoadingDetails,
  }
}

const dispatchActions = (dispatch) => {
  return {
    fetchMails: bindActionCreators(fetchMails, dispatch),
    fetchDetails: bindActionCreators(fetchDetails, dispatch),
  }
}

export default connect(mapStateToProps, dispatchActions)(Mail);

