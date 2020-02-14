import React, {Component} from 'react'

import Objectbrowser from "./SpreadsheetCoreRecursive";

export default class SpreadsheetObjectbrowser extends Component {
  render(props) {
    return <React.Fragment><Objectbrowser spreadsheetdata={this.props.spreadsheetdata} /></React.Fragment>
  }
}
