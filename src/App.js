import React, { Component } from "react";
import { connect } from 'react-redux';
import { increment, decrement } from './ducks/counter'

import "./App.css";

export class App extends Component {	
	render() {
		// const { currentValue, decrement, increment} = this.props;
		return (
			<div className="app">
				<section className="counter">
					<h1 className="counter__current-value">{ this.props.currentValue }</h1>
					<div className="counter__button-wrapper">
						<button
							className="counter__button increment-one"
							onClick={ () => this.props.increment (1) }
						>
							+1
						</button>
						<button
							className="counter__button increment-five"
							onClick={ () => this.props.increment (5) }
						>
							+5
						</button>
						<button
							className="counter__button decrement-one"
							onClick={ () => this.props.decrement(1) }
						>
							-1
						</button>
						<button
							className="counter__button decrement-five"
							onClick={ () => this.props.decrement(5) }
						>
							-5
						</button>
						<br />
						<button
							className="counter__button undo"
							disabled={ true }
							onClick={ () => null }
						>
							Undo
						</button>
						<button
							className="counter__button redo"
							disabled={ true }
							onClick={ () => null }
						>
							Redo
						</button>
					</div>
				</section>
				<section className="state">
					<pre>
						{ JSON.stringify( this.props, null, 2 ) }
					</pre>
				</section>
			</div>
		);
	}
}


function mapStateToProps(state){
	return {
		currentValue: state.currentValue
	}
}


export default connect(mapStateToProps, {increment, decrement})(App);
