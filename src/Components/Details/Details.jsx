import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import './Details.scss';

class Details extends React.Component {
  companyInfo(company) {
    return company ? <div>
      <div className="company">
        <img alt={company.name} src={company.logo} className="companylogo" />
        {company.name}
      </div>
      <div>{company.description} </div>
    </div> : null;
  }
  render() {
    if(this.props.isLoading === true)  return <div> LOADING...
      <CircularProgress size={80} thickness={5} />
    </div>;
    if(!this.props.inbox) return null;
    const { from, to, cc, subject, body} = this.props.inbox;
    const { avatar, company, name } = this.props.details;
    return <div>
      <div><img className="avatar" src={avatar} width="40px" alt={name}/></div>
      <div><strong>From: </strong>{name} <italic>({from})</italic></div>
      {this.companyInfo(company)}
      <div><strong>To: </strong>{to}</div>
      <div><strong>CC: </strong>{cc.reduce( cc => cc + '; ', '' )}</div>
      <div><strong>Subject: </strong>{subject}</div>
      <hr/>
      <div>{body}</div>
    </div>;
  }
}

export default Details;