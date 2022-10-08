import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import { FaTrophy, FaHandPointLeft } from "react-icons/fa";

import { connect } from "react-redux";

const LeaderBoard = (props) => {
  const { ranking, users, authedUser } = props;
  return (
    <Row>
      <Container className="text-center">
        <h3>LeaderBoard</h3>
      </Container>
      <Container className="mx-auto">
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
                <td>
                  <Row>
                    <Col xs={1}>
                      <img
                        src={users[rank].avatarURL}
                        alt={`${rank}'s avatar`}
                        width="35"
                      />
                    </Col>
                    <Col xs={3}>
                      {users[rank].name}
                      <br />
                      <span className="text-muted">{rank}</span>
                    </Col>
                    <Col>
                      {rank === authedUser ? (
                        <h2>
                          <FaHandPointLeft />{" "}
                        </h2>
                      ) : (
                        ""
                      )}
                      {ranking.indexOf(rank) + 1 === 1 ? (
                        <h2>
                          <FaTrophy />
                        </h2>
                      ) : (
                        ""
                      )}
                    </Col>
                  </Row>{" "}
                </td>
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
  authedUser,
});

export default connect(mapStateToProps)(LeaderBoard);
