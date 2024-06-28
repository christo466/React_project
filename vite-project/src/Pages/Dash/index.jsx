import PropTypes from 'prop-types';
import './Dash.css';
import { Link } from 'react-router-dom';

function Dash({ data, handleArrow, hasMore  }) {


  return (
    <>
    <div>
    <li><Link to="/">Home</Link></li>
    </div>
    <div>
      <h1>Dash Page</h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {data.map(row => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.age}</td>
                <td>{row.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {hasMore && (
        <div className="add-button-container">
          <button onClick={handleArrow}>Load More</button>
        </div>
      )}
    </div>
    </>
  );
}


Dash.propTypes = {
    data: PropTypes.array.isRequired,
    handleArrow: PropTypes.func.isRequired,
    hasMore: PropTypes.bool.isRequired,
  };
  

export default Dash;
