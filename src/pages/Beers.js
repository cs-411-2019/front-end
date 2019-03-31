import React, { Component } from 'react'
import { connect } from 'react-redux'
import { meta } from 'react-website'

import { set } from '../redux/advanced'

import './Beers.css'

@meta(() => ({
	title: 'Beers'
}))
@connect(({ advanced }) => ({
	value : advanced.value
}), {
	set
})
export default class Beers extends Component {
	render() {
		const { value, set } = this.props
		return (
			<div>
				<div>
					This is an advanced implementation of a counter.
				</div>
				<div className="counter">
					{value}
					<button
						type="button"
						onClick={() => set(value + 1)}>
						Increment
					</button>
				</div>
			</div>
		)
	}
}