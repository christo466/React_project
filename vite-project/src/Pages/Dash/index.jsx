// src/Pages/Dash/Dash1.jsx

import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
// import { Link } from 'react-router-dom';
import Header from '../Header';

function Dash({ data, handleArrow, hasMore }) {
  return (
    <>   
    <div>
      <Header /> 
     </div>
   
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      sx={{ backgroundColor: '#f5f5f5', padding: 4 }}
    >
      <TableContainer component={Paper} sx={{ maxWidth: 800, width: '100%' }}>
      <Table className="custom-table" aria-label="customized table">
          <TableHead >
          <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>City</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.city}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {hasMore && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 2,
          }}
        >
          <Button variant="contained" color="primary" onClick={handleArrow}>
            Load More
          </Button>
        </Box>
      )}
    </Box>
    </>
  );
}

Dash.propTypes = {
  data: PropTypes.array.isRequired,
  handleArrow: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
};

export default Dash;
