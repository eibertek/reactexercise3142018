import React from 'react';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import './Inbox.scss';

export class Inbox extends React.Component {

  onClick = (evt) => {
    const {from, to, cc, subject, body, tags } = this.props;
    this.props.fetchDetails({name: from, rowData: {from, to, cc, subject, body, tags }});
  }

  render() {
    return <TableRow  onClick={this.onClick} className="inbox">
        <TableRowColumn className="id">{this.props.id}</TableRowColumn>
        <TableRowColumn>{this.props.from}</TableRowColumn>
        <TableRowColumn>{this.props.subject}</TableRowColumn>
      </TableRow>
  }
}

export default Inbox;
