import { connect } from "react-redux";
const AuthedUser = (props) => {
  const { username } = props;
  return (
    <div>
      Signed in as: {username} <a href="/login">Logout</a>
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
