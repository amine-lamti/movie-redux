import React from 'react'
import { connect } from 'react-redux'
import MovieCard from './MovieCard'

const ListMovies = props => {
    return (
        <div className="listMovie">
            {
                props.movies.map(el => <MovieCard movie={el}/>)
            }
        </div>
    )
}
const mapStateToProps = state => {
    return{
        movies: state.movieReducer
    }
}

export default connect(mapStateToProps)(ListMovies)
