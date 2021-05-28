import React, {useState,useEffect} from 'react';

import Spinner from './Spinner/Spinner';
import classes from './Backdrop.module.css'

const Backdrop = (props) => {
    const [showSpinner, setShowSpinner] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{setShowSpinner(false)},1000) 
    }, [])
    console.log(props)
    let spinner = (<>
        <h1>{props.post.title}</h1>
    </>)
    if(showSpinner){
        spinner = <Spinner />
    }
    return ( 
        <div className={classes.Backdrop} onClick={props.closeBackdrop}>
            <div className={classes.Modal}>
            {spinner}
            <h1 onClick={() => {console.log(1)}}>naruci</h1>
            </div>
        </div>
     );
}
 
export default Backdrop;