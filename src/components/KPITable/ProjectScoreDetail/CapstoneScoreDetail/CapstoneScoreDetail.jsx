import { Table } from "react-bootstrap";
import "./CapstoneScoreDetail.css"
import "../../KPITable.css"

const CapstoneScoreDetail = ({ capstoneScore }) => {

    return (
    
      <Table striped bordered hover responsive="md" className="capstone-score-table">
    <thead>
      <tr>
        <th>Category</th>
        <th>Criteria</th>
        <th>Possible Points</th>
        <th>Actual Points</th>
        <th>Comments</th>
      </tr>
    </thead>
    <tbody>
      {capstoneScore.map((score, index) => (
        <tr key={index}>
          <td>{score.capstoneScoreCategory}</td>
          <td>{score.capstoneCriteria}</td>
          <td>{score.capstonePossiblePoints}</td>
          <td>{score.capstoneActualPoints}</td>
          <td>{score.capstoneCriteriaComments}</td>
        </tr>
      ))}
    </tbody>
  </Table>
    
    );
  
}
  export default CapstoneScoreDetail;