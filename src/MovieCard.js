import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import { connect } from 'react-redux'
import { deleteMovie } from './actions/listsActions'
import AddModal from './AddModal';

const MovieCard =props=> {
       return (              
       <div className="movieCard"> 
      <StarRatingComponent 
                    name="rate1" 
                    starCount={5}
                    value={props.movie.rating}/>
            <br/>
       <img src={props.movie.image} className="img" alt=""/>
            <div className="mov">
        <h3>{props.movie.title}</h3> 
        <h3>{props.movie.year}</h3>
        <button className="yyy">Movie Description</button>
        <div className="xxx">       
        <button className="myButton" onClick={() => props.delete(props.movie.id)}>Remove</button>
        <br/>
        <AddModal editMode={true} info={props.movie}/>
        </div>
            </div>
            </div>
       
        );
    }

    const mapDispatchToProps = dispatch => {
        return{
            delete: x => dispatch(deleteMovie(x))
        }
    }
    export default connect(null, mapDispatchToProps)(MovieCard)