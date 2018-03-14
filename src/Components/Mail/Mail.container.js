import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Mail from './Mail.jsx';
import { fetchMails, fetchPeople } from './actions';



const mapStateToProps = (state) => {
  return {
    content: state.content, //agregar state loading.
  }
}

const dispatchActions = (dispatch) => {
  return {
    fetchMails: bindActionCreators(fetchMails, dispatch),
    fetchPeople: bindActionCreators(fetchPeople, dispatch),
  }
}

export default connect(mapStateToProps, dispatchActions)(Mail);

