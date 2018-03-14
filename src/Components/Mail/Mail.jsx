import React, { Fragment } from 'react';
import Inbox from '../Inbox';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
} from 'material-ui/Table';

export class Mail extends React.Component {

  componentWillMount() {
    this.props.fetchMails();
  }

  static defaultProps = {
    content: [],
  }

  render() {
    return this.props.content && this.props.content.map ? <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>ID</TableHeaderColumn>
          <TableHeaderColumn>From</TableHeaderColumn>
          <TableHeaderColumn>Subject</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
      {this.props.content.map( (row) => <Inbox fetchPeople={this.props.fetchPeople} {...row} />)};
      </TableBody>
    </Table> : <div>You dont have any mail :'(</div>
  }
}

export default Mail;