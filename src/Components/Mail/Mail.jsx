import React, { Fragment } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableFooter,
} from 'material-ui/Table';
import Inbox from '../Inbox';
import './Mail.css';
import Details from "../Details/Details";



export class Mail extends React.Component {

  componentWillMount() {
    this.props.fetchMails();
  }

  static defaultProps = {
    content: [],
    isLoading: false,
    isLoadingDetails: false,
    details: {},
  }

  render() {
    if(this.props.isLoading)  return <div className="spinner">
      <CircularProgress size={80} thickness={5} /></div>;
    const height = this.props.details.inbox ? '400px' : '100vh';
    return <Fragment>
      <Table height={height}>
        <TableHeader displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn className="id" >ID</TableHeaderColumn>
            <TableHeaderColumn>From</TableHeaderColumn>
            <TableHeaderColumn>Subject</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody showRowHover={true} >
          {this.props.content.length > 0 ? this.props.content.map( (row, i) => <Inbox key={i} fetchDetails={this.props.fetchDetails} {...row} />) : null};
        </TableBody>
        <TableFooter >
        </TableFooter>
      </Table>
      <Details {...this.props.details} isLoading={this.props.isLoadingDetails} />
      </Fragment>;
  }
}

export default Mail;
