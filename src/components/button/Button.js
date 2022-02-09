import React from 'react';
// Third party

//Developer Components
import styles from './button.module.css'

// Functional Component
// props are the info your component needs
function button({title, type, ...props}) {

    // console.log(props.title)

    return ( 
        <button className={styles[type]}>{title}</button>
     );
}

export default button;