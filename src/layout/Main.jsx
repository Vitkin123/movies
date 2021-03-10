import {useEffect, useState} from "react";
import {Movies} from "../components/Movies";
import {Preloader} from "../components/Preloader";
import {Search} from "../components/Search";


const API_KEY = process.env.REACT_APP_API_KEY;


export function Main() {

    const [movies, setMovies] = useState();
    const [loading, setLoading] = useState(true);


    const searchMovies = (str, type = "all") => {
        setLoading(true);
        fetch(`https://www.omdbapi.com/?&apikey=20ea6d4&s=${str}${type !== "all" ? `&type=${type}` : " "}`)
            .then(response => response.json())
            .then(data => {
                    setLoading(false);
                    setMovies(data.Search);
                }
            ).catch((err) => {
            console.error(err);
            this.setState({loading: false});
        })
    }


    useEffect(() => {
        fetch(`https://www.omdbapi.com/?&apikey=20ea6d4&s=matrix`)
            .then(response => response.json())
            .then(data => {
                    setMovies(data.Search);
                    setLoading(false);
                }
            ).catch((err) => {
            console.error(err);
            setLoading(false);
        })
    }, [])

    return (
        <main className={"container content"}>
            <Search searchMovies={searchMovies}/>
            {
                loading
                    ? <Preloader/>
                    : <Movies movies={movies}/>
            }
        </main>
    )
}