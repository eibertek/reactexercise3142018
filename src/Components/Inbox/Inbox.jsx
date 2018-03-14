import React from 'react';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export class Inbox extends React.Component {

  onClick = (evt) => {
    this.props.fetchPeople({name: this.props.from});
  }

  render() {
    return <TableRow  onClick={this.onClick}>
        <TableRowColumn>{this.props.id}</TableRowColumn>
        <TableRowColumn>{this.props.from}</TableRowColumn>
        <TableRowColumn>{this.props.subject}</TableRowColumn>
      </TableRow>
  }
}

export default Inbox;


/*
{
id: 12,
from: "cesar.feil@feilheaney.name",
to: "adams.kylie@huels.name",
cc: [
"kautzer_elva@bechtelar.info",
"lurline.labadie@kuphal.com"
],
subject: "Brakus LLC Project",
body: "Consequatur cupiditate ratione tempore facilis maxime. Molestiae ullam earum. Inventore distinctio voluptatem temporibus similique est quia eaque. Aliquid odio ut eligendi repellendus quis.",
tags: [ ]
},
* */