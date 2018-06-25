import React from 'react';

const EmptyTableRow = props => {
    return (
        <tr>
            <td colSpan="5"><center>{props.msg}</center></td>
        </tr>
    )
  }
  
  export default EmptyTableRow;
  