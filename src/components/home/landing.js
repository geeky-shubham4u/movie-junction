import React, { Component } from 'react';
import { connect } from 'react-redux';
import MoviesContainer from './MoviesContainer';
import SearchForm from './searchForm';

import Loader from '../layout/Loader';

export class landing extends Component{
    render(){
        const { loading } = this.props;
        console.log(loading);
        return(            
            <div className="container">
                <SearchForm />   
                
                {loading ? <Loader /> : <MoviesContainer />}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loading:state.movies.loading
})
export default connect(mapStateToProps)(landing);