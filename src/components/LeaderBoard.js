import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";

import { connect } from "react-redux";

const LeaderBoard = (props) => {
  const { ranking, users } = props;
  return (
    <Row>
      <Container className="mx-auto text-center">
        <h3>LeaderBoard</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Rank</th>
              <th>User</th>
              <th>Answered</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            {ranking.map((rank) => (
              <tr key={rank}>
                <td>{ranking.indexOf(rank) + 1}</td>
                <td> {users[rank].name}</td>
                <td> {Object.keys(users[rank].answers).length}</td>
                <td> {Object.keys(users[rank].questions).length}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </Row>
  );
};

const mapStateToProps = ({ users, authedUser }) => ({
  ranking: Object.keys(users).sort((a, b) => {
    const _b =
      Object.keys(users[b].answers).length +
      Object.keys(users[b].questions).length;
    const _a =
      Object.keys(users[a].answers).length +
      Object.keys(users[a].questions).length;
    return _b - _a;
  }),
  users: users,
});

export default connect(mapStateToProps)(LeaderBoard);
