import "./post.styles.scss";

import ImagePlaceholder from './placeholder.jpg';
import { Link } from "react-router-dom";

const Post = ({ id, title, excerpt, img, link, category, post_type }) => {

  return (
    <article id={`post-article-${id}`} className="post-article" data-category={category}>
      <div>
        <div className="post-article__img">
               { img ? ( <img src={img} alt=""/>) : (<img src={ImagePlaceholder} alt=""/>)}
        </div>
        <figcaption>
          <div><h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
          <p>{excerpt}</p>
          </div>
        </figcaption>
        </div>

        {(post_type === 'work') ? (<a href={link} target="_blank" rel="noreferrer" aria-label="Read post" ></a>) :  <Link to={`/news-and-insights/${id}`}></Link> }

    </article>
  );
};

export default Post;