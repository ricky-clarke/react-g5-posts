import "./post.styles.scss";

import ImagePlaceholder from './g5-logo.svg';
import { Link } from "react-router-dom";

const Post = ({ id, title, post_date, img, link, category, post_type }) => {

  // Format the date
  const date = new Date(post_date)
    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric"
    })

  return (
    <article id={`post-article-${id}`} className="post-article" data-category={category}>
      <div>
        <div className="post-article__img">
               { img ? ( <img className="post_img" src={img} alt=""/>) : (<img className="post_img--holder" src={ImagePlaceholder} alt=""/>)}
        </div>
        <figcaption>
          <div>
            <p>{formattedDate}</p>
            <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
          </div>
        </figcaption>
        </div>

        {(post_type === 'work') ? (<a href={link} target="_blank" rel="noreferrer" aria-label="Read post" ></a>) :  <Link to={`/news-and-insights/${id}`}></Link> }

    </article>
  );
};

export default Post;