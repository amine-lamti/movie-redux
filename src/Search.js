import React, { Component } from 'react'
import StarRatingComponent from 'react-star-rating-component';
import { connect } from 'react-redux'
import { searchMovie } from './actions/listsActions'


class Search extends Component {
    constructor(props){
        super(props);
        this.state ={
            rating: 1,
            keyword:""
        }
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue}, () => this.props.search({keyword: this.state.keyword, rating: this.state.rating}));
    }
    handleChange = e => {
        this.setState({keyword: e.target.value}, () => this.props.search({keyword: this.state.keyword, rating: this.state.rating}))
    }
    render() {
        return (
            <div>
                <input type='text' className="input" placeholder="search..." onChange={this.handleChange} />
                <br/>
                <div className="rating">
                <StarRatingComponent 
                    name="rate1" 
                    starCount={5}
                    value={this.state.rating}
                    onStarClick={this.onStarClick.bind(this)}
                /></div>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return{
        search: x => dispatch(searchMovie(x))
    }
}


export default connect(null, mapDispatchToProps)(Search)