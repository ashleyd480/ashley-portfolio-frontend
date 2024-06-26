import { Table } from 'react-bootstrap';
import "./GAScoreTable.css"
import "../KPITable.css"

const GAScoreTable = ({ gaScores }) => {

    return (
        <Table striped bordered hover responsive="md" className="ga-score-table" >
          <thead>
            <tr>
              <th>Week</th>
              <th>Week Of</th>
              <th>Topic</th>
              <th>GA Score</th>
              <th>GA Comments</th>
              <th>Mentor Score</th>
              <th>Mentor Comments</th>
            </tr>
          </thead>
          <tbody>
            {gaScores.map((score, index) => (
              <tr key={index}>
                <td>{score.week}</td>
                <td>{score.weekOf}</td>
                <td>{score.topic}</td>
                <td>{score.gaScore}</td>
                <td>{score.gaComments}</td>
                <td>{score.mentorScore}</td>
                <td>{score.mentorComments}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      );
    };
export default GAScoreTable;