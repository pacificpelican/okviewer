import React, {Component} from 'react'

import Objectbrowser from "./SpreadsheetCoreRecursive";

export default class SpreadsheetObjectbrowser extends Component {
  render() {
    return <React.Fragment><Objectbrowser spreadsheetdata={{"Bogey": "bird"}} /></React.Fragment>
  }
}
