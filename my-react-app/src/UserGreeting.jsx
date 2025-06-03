import PropTypes from 'prop-types';

function UserGreeting(props){
    const displayName = props.username && props.username.trim() !== '' ? props.username : 'Guest';
    
    const WelcomeMessage = <h2 className="welcome-message">Welcome, {displayName}!</h2>

    const NotLoggedInMessage = <h2 className="not-message">Please log in.</h2>

    return(props.isLoggedIn ? WelcomeMessage : NotLoggedInMessage);
        
}
UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}
export default UserGreeting