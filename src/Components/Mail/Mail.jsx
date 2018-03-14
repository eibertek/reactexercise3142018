import React, { Fragment } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import Pager from 'react-pager';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableFooter,
} from 'material-ui/Table';
import Inbox from '../Inbox';
import './bootstrap.css';



export class Mail extends React.Component {

  componentWillMount() {
    this.props.fetchMails();
  }

  static defaultProps = {
    content: [],
  }

  render() {
    return this.props.content && this.props.content.map ? <Table height={700} >
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>ID</TableHeaderColumn>
          <TableHeaderColumn>From</TableHeaderColumn>
          <TableHeaderColumn>Subject</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody showRowHover={true} >
      {this.props.content.length > 0 ? this.props.content.map( (row) => <Inbox fetchPeople={this.props.fetchPeople} {...row} />) : null};
      </TableBody>
      <TableFooter colSpan="3">
        <Pager
          total={1000}
          current={500}
          visiblePages={5}
          titles={{ first: '<|', last: '>|' }}
          className="pagination-sm center-block"
          onPageChanged={() => {}}
        />
      </TableFooter>
    </Table> : <div><CircularProgress size={80} thickness={5} /></div>
  }
}

export default Mail;