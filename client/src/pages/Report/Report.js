import React, { Component } from "react";
import Heading from "../../components/Nav/Nav";
import ReportForm from "../../components/reportForm";
import FooterPage from "../../components/footer";
import API from "../../utils/API";


class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //store data here
      columns: [
      {
        Header: 'RespText',
        accessor: 'resptext'
      },
      {
        Header: 'Token',
        accessor: 'token'
      },
      {
        Header: 'Amount',
        accessor: 'amount'
      },
      {
        Header: 'RetRef',
        accessor: 'retref'
      },
      {
        Header: 'Processor',
        accessor: 'respproc'
      },
      {
        Header: 'RespCode',
        accessor: 'respcode'
      },
      {
        Header: 'RespStat',
        accessor: 'respstat'
      },
      {
        Header: 'CvvResp',
        accessor:'cvvresp'
      },{
        Header: 'AvsResp',
        accessor: 'avsresp'
      },
      {
        Header: 'AuthCode',
        accessor: 'authcode'
      },
      {
        Header: 'MerchId',
        accessor: 'merchid'
      }, 
      {
        Header: 'BatchID',
        accessor: 'batchid'
      },
      {
        Header: 'GUID',
        accessor: '_id'
      },
      {
        Header: 'CommCard',
        accessor: 'commcard'
      },
      {
        Header: 'EntryMode',
        accessor: 'entrymode'
      },
      {
        Header: 'BinType',
        accessor: 'bintype'
      },
      {
        Header: 'Account',
        accessor: 'account'
      }],
      data: []
    };
  }
  
componentDidMount() { 
  //call API put result in state
  console.log("component did mount!");
  API.getReport()
  .then(result => {
    this.setState({data: result.data},() => console.log(this.state.data))
  })
  // .then(console.log(this.state.data)
  // )
  .catch(error => {
    console.log(error);
    throw error;
  })
}


  render() {
    // const report = this.props.report;
    return (
      <React.Fragment>
        <Heading />
        <br />
        <br />
        <br />
        <div class="container">
          <ReportForm 
            resp={this.state.data}
            cols={this.state.columns}
          />
        </div>
        <div>
          <FooterPage />
        </div>
      </React.Fragment>
    );
  }
}

export default Report;
