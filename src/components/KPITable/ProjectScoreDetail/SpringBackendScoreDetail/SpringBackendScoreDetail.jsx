
import { Table } from "react-bootstrap";
const SpringBackendScoreDetail = ({springBackendScore}) => {

    return (
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Criteria</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {springBackendScore.map((score, index) => (
            <tr key={index}>
              <td>{score.springBackendCriteria}</td>
              <td>{score.springBackendScore}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  
}
export default SpringBackendScoreDetail;