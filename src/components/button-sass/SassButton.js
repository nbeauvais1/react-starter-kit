import React from 'react';
import styles from './styles.module.scss'

function SassButton(props) {

    console.log(props)

    return ( 
    <button className={styles[props.variant]}>{props.children}</button>
     );
}

// Time: 0:40:50

export default SassButton;