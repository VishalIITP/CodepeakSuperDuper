import React, { Component } from 'react';
import style from './tableRow.css'

class TableRow extends Component {
    render() {
        return (
          <tr style={style}>
            <td id='rank'><p>{this.props.position}</p></td>
            <td id='user'>
              <img id='dp' src={this.props.dp} alt='' />
               {this.props.handle}
            </td>
            <td id="score">
                <p>3</p>
            </td>
          </tr>
        );
    }
}

export default TableRow;
