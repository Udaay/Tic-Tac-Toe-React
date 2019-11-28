import React, { Component } from 'react';

class Table extends Component {
  render() {
    return(
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>john</td>
            <td>Nothing</td>
          </tr>
          <tr>
            <td>barry</td>
            <td>Superhero</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Table;