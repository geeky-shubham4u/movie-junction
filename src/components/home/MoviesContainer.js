import React, { Component } from 'react';
import {connect} from 'react-redux';
import MovieCard from './MovieCard';
import Errorpage from './Errorpage';

export class MoviesContainer extends Component{
    render(){
        const {movies} = (this.props);
        let content = '';
       
        content = '';
        if(movies.hasOwnProperty("data")) {
        content = (movies.data.Response === 'True') ? movies.data.Search.map((movie, index) => (<MovieCard key={index} movie={movie} />)) : <Errorpage />;
        }
        return <div className="row">{content}</div>;
    }
}

const mapStateToProps = state => ({
    movies:state.movies.movies
})
export default connect(mapStateToProps)(MoviesContainer);