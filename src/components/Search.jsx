import React from "react";


export class Search extends React.Component {

    state = {
        search: '',
        type: "all"
    }


    handleFilter = (event) => {
        this.setState(
            () => ({type: event.target.dataset.type}),
            () => {
                this.props.searchMovies(this.state.search, this.state.type);
            }
        );
    };


    handleKey = (event) => {
        if (event.key === "Enter") {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    }

    render() {
        return (
            <div className="row">
                <div className="input-field">

                    <input
                        className="validate"
                        placeholder={"Search"}
                        type="search"
                        value={this.state.search}
                        onChange={(event) => this.setState({search: event.target.value})}
                        onKeyDown={this.handleKey}
                    />
                    <button className={"btn search-btn"}
                            onClick={() => this.props.searchMovies(this.state.search, this.state.type)}>Search
                    </button>
                    <div>
                        <label>
                            <input
                                name="isAll"
                                type="radio"
                                data-type={"all"}
                                onChange={this.handleFilter}
                                checked={this.state.type === "all"}
                            />
                            <span>All</span>
                        </label>
                        <label>
                            <input
                                name="isMovies"
                                type="radio"
                                data-type={"movie"}
                                onChange={this.handleFilter}
                                checked={this.state.type === "movie"}
                            />
                            <span>Movies</span>
                        </label>
                        <label>
                            <input
                                name="isSeries"
                                type="radio"
                                data-type={"series"}
                                onChange={this.handleFilter}
                                checked={this.state.type === "series"}
                            />
                            <span>Series</span>
                        </label>
                    </div>
                </div>
            </div>
        )
    }

}