import { Table } from "react-bootstrap";
import "../../KPITable.css"

const LeagueAppScoreDetail = ({ leagueAppScore }) => {

    return (
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Criteria</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {leagueAppScore.map((score, index) => (
            <tr key={index}>
              <td>{score.leagueAppCriteria}</td>
              <td>{score.leagueAppFeedback}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  
}
  export default LeagueAppScoreDetail;