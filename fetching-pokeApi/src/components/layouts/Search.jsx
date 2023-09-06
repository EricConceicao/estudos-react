// Don't forget to use e.preventDefault() on the function that the form calls.

function Search(props) {
	return (
		<>	
			<form className="container-fluid text-center bg-info p-1" onSubmit={props.onSubmit}>
				<label htmlFor="search">{props.label}</label>
				<input 
					className="w-25 p-1 text-center border-0 border-bottom border-dark bg-info" 
					id="search"
					type="text"
					onChange={(e) => props.onChange(e.target.value)} 
					placeholder={props.pHolder} />
				<button className="btn btn-outline-danger border-3 mx-1" type="submit">{props.bText}</button>
			</form>
		</>
	);
}

export default Search