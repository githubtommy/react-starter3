import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../redux/counter/counterReducer.js'

import { Button } from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Home = props => (
  <div>
   <RaisedButton label="Default" />
    <h1>Home</h1>
    <p>Count: {props.count}</p>

		<p>
			<div className="btn-group">
				<Button bsStyle="success" onClick={props.increment} disabled={props.isIncrementing}>Increment</Button>
				<Button bsStyle="success" onClick={props.incrementAsync} disabled={props.isIncrementing}>Increment Async</Button>
				<Button bsStyle="info" onClick={props.decrement} disabled={props.isDecrementing}>Decrement</Button>
				<Button bsStyle="info" onClick={props.decrementAsync} disabled={props.isDecrementing}>Decrement Async</Button>
			</div>
		</p>
    <p><Button bsStyle="warning" onClick={() => props.changePage()}>Go to about page via redux</Button></p>
  </div>
)

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
