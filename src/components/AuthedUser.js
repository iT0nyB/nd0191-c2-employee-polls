import { connect } from "react-redux";
import setAuthedUser from "../actions/authedUser";

const AuthedUser = (props) => {
  const { username, dispatch } = props;

  const handleLogout = (props) => {
    dispatch(setAuthedUser(username));
  };
  return (
    <div>
      Signed in as: {username}{" "}
      <a href="/login" onClick={handleLogout}>
        Logout
      </a>
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
