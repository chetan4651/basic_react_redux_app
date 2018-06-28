import React from 'react';

const CommentTableRow = props => {
    return (
        <tr>
            <td>{(props.data.id === undefined || props.data.id === "") ? "" : props.data.id}</td>
            <td>{(props.data.postId === undefined || props.data.postId === "") ? "" : props.data.postId}</td>
            <td>{(props.data.name === undefined || props.data.name === "") ? "" :props.data.name}</td>
            <td>{(props.data.email === undefined || props.data.email === "")? "" : props.data.email}</td> 
            <td>{(props.data.body === undefined || props.data.body === "")? "" : props.data.body}</td>
        </tr>
    );
}

export default CommentTableRow;