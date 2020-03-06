import React, { Component } from 'react';
import { connect } from 'react-redux';


class Description extends Component {
    state = {
        movie: {}
    }
    componentDidMount(){
        this.setState({
            movie:this.props.film.filter(el =>
              this.props.match.params.id===el.id)[0]
        })
    }
    render() {
        return (
            <div>
              <h1>{this.state.movie.title}</h1>  
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        film: state.movieReducer
    }
}

export default connect(mapStateToProps)(Description);