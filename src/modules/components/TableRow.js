import React from 'react';

const TableRow = props => {
    return (
        <tr>
            <td>{props.data.id}</td>
            <td>{props.data.name}</td>
            <td>{props.data.email}</td> 
            <td>{props.data.phone}</td>
            <td>{props.data.address.suite}, {props.data.address.street}, {props.data.address.city}</td>
        </tr>
    );
}

export default TableRow;