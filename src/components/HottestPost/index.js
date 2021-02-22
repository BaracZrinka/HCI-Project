import React from 'react'
import styles from './style.module.css'

const HottestPost = ({image, title, text}) => (
    <section className = {styles.hottestPost}>
        <div className = {styles.image}>{image}</div>
        <div className={styles.articleHalf}>
            <h2>{title}</h2>
            <p classNme={styles.text}>{text}</p>
            <button className={styles.button}>Read more</button>
        </div>
        

    </section>

)
export default HottestPost
/*import React from 'react'
import styles from './style.module.css'

export class HottestPost extends React.Component {
    render() {
        var {image, title, text} = this.props;
    return (
    <section className = {styles.hottestPost}>
        <div className = {styles.image}>{image}</div>
        <div className={styles.articleHalf}>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
        <button className={styles.button}>Read more</button>

    </section>
    );
}
}
*/