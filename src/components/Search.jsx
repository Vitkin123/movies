import React, {useState} from "react";


export const Search = (props) => {


    const {searchMovies = Function.prototype} = props;

    const [search, setSearch] = useState("");
    const [type, setType] = useState("all");

    const handleFilter = (event) => {
        setType(event.target.dataset.type);
        searchMovies(search, event.target.dataset.type);
    };


    const handleKey = (event) => {
        if (event.key === "Enter") {
            searchMovies(search, type);
        }
    }
    return (
        <div className="row">
            <div className="input-field">

                <input
                    className="validate"
                    placeholder={"Search"}
                    type="search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    onKeyDown={handleKey}
                />
                <button className={"btn search-btn"}
                        onClick={() => searchMovies(search, type)}>Search
                </button>
                <div>
                    <label>
                        <input
                            name="isAll"
                            type="radio"
                            data-type={"all"}
                            onChange={handleFilter}
                            checked={type === "all"}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            name="isMovies"
                            type="radio"
                            data-type={"movie"}
                            onChange={handleFilter}
                            checked={type === "movie"}
                        />
                        <span>Movies</span>
                    </label>
                    <label>
                        <input
                            name="isSeries"
                            type="radio"
                            data-type={"series"}
                            onChange={handleFilter}
                            checked={type === "series"}
                        />
                        <span>Series</span>
                    </label>
                </div>
            </div>
        </div>
    )


}