import React, { Component } from 'react';

const TableHead = () => {
  return(
    <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
    </thead>
  )
}

const TableData = (props) => {
    const rows = props.char.map((data, index) => {
      return(
        <tr key={index} >
        <td > {data.name} </td>
        <td> {data.job} </td>
        <td> <button onClick ={ () => props.removeCharacter(index) }> Delete </button> </td>
        </tr>
      )
    });
    return(rows);
}

class Table extends Component {
  render() {
    const { characterData, removeCharacter } = this.props
    return(
      <table>
        <TableHead />
        <TableData char = {characterData} removeCharacter = {removeCharacter} />
      </table>
    )
  }
}

export default Table;