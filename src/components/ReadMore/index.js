import React, {useState} from 'react'
import styles from './style.module.css'


const ReadMore = ({closePopup}) =>{
    const [readMore, setReadMore]=useState(false);
    const extraContent=<div>
      <p className="extra-content">
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
       totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
        voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
         qui dolorem ipsum quia dolor sit amet, consectetur?'

      </p>
  </div>
  const linkName=readMore?' <<':' >>';
    return(
        <div className={styles.popup}>
        <div className={styles.popupInner}>
            {<a className="read-more-link" onClick={()=>{setReadMore(!ReadMore)}}><h2>{linkName}</h2></a>}
{readMore && extraContent}
        </div>
        </div>
    );
};


export default ReadMore