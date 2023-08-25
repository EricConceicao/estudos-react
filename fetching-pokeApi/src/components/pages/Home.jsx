function Home() {
    return (
        <div className="Home container">
            <h1 className="display-1">Welcome!<br />Select a tool to use PokéApi.</h1>

            <nav className="nav flex-column border">
                <a href="/berry" className="nav-link active">Berry Search</a>
                <a href="/pokemon" className="nav-link">Pokémon Description</a>
                <a href="/teams" className="nav-link"> Team Builder</a>
            </nav>
        </div>
    );
}

export default Home