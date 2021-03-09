import {Movie} from "./Movie";

export const Movies = (props) => {

    const {movies = []} = props;
    return (
        <div className={"movies"}>
            {
                movies.length
                    ? movies.map((movie) => {
                        return <Movie key={movie.id} {...movie}/>
                    })
                    : <h4>Nothing found</h4>}
        </div>
    )
}