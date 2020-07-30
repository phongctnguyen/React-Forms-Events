import React, { useState } from 'react'

export default ({ onSubmit }) => {
	const [term, setTerm] = useState('')

	const onFormSubmit = (e) => {
		e.preventDefault()

    onSubmit(term);
	}

	return (
		<div className='ui segment'>
			<form className='ui form' onSubmit={onFormSubmit}>
				<div className='field'>
					<label>Image Search</label>
					<input
						type='text'
						value={term}
						onChange={(e) => setTerm(e.target.value)}
					/>
				</div>
			</form>
		</div>
	)
}
