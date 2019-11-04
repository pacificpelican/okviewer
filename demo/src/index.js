import React, {Component} from 'react';
import {render} from 'react-dom';

//  import Example from '../../src';
import Objectbrowser from '../../src'
import Desk from '../../src'

class Demo extends Component {
  render() {
    return <React.Fragment>
      <Objectbrowser />
      <Desk />
    </React.Fragment>
  }
}

render(<Demo/>, document.querySelector('#demo'))
