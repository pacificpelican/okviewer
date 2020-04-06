import React, {Component} from 'react';
import {render} from 'react-dom';
import Objectbrowser from '../../src'

class Demo extends Component {
  render() {
    return <React.Fragment>
      <Objectbrowser spreadsheetdata={{"Is it on?": "Yass."}} />
    </React.Fragment>
  }
}

render(<Demo/>, document.querySelector('#demo'))
