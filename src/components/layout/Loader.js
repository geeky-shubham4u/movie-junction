import React from 'react';
import loader from './loader.gif';

function Loader(){
    return (
        <div>
            <img src={loader} alt="loading..." style={{width:'200px', display:'block', margin:'auto'}} />
        </div>
    )
}

export default Loader;