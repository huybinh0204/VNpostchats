import {connect} from 'react-redux';
import NewsFeedComponent from './NewsFeedComponent';

function mapStateToProps(state) {
    return {};
}

// gửi action
function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NewsFeedComponent);
