import { connect } from "react-redux";
import { Link } from "react-router-dom";
import setAuthedUser from "../actions/authedUser";

const AuthedUser = (props) => {
  const { username, dispatch } = props;

  const handleLogout = (props) => {
    dispatch(setAuthedUser(null));
  };
  return (
    <div>
      Signed in as: {username}{" "}
      <Link to="/login" onClick={handleLogout}>
        Logout
      </Link>
    </div>
  );
};

const mapStateToProps = ({ users, authedUser }) => {
  const user = users[authedUser];
  const { id } = user;
  return {
    username: id,
  };
};

export default connect(mapStateToProps)(AuthedUser);
