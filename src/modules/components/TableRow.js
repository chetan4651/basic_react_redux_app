import React from 'react';

const TableRow = props => {
    return (
        <tr className="Table-row">
            <td className="Table-row-item">{props.data.id}</td>
            <td className="Table-row-item">{props.data.name}</td>
            <td className="Table-row-item">{props.data.email}</td> 
            <td className="Table-row-item">{props.data.phone}</td>
            <td className="Table-row-item">{props.data.address.suite}, {props.data.address.street}, {props.data.address.city}</td>
        </tr>
    );
}

export default TableRow;