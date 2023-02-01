import "./post.styles.scss";

import ImagePlaceholder from './placeholder.jpg';
import { Link } from "react-router-dom";

const Post = ({ id, title, excerpt, img, link, category }) => {

  return (
    <article id={`post-article-${id}`} className="post-article" data-category={category}>
      <div>
        <div className="post-article__img">
               { img ? ( <img src={img} alt=""/>) : (<img src={ImagePlaceholder} alt=""/>)}
        </div>
        <figcaption>
          <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
          <p>{excerpt}</p>
        </figcaption>
        </div>

        <Link to={`/single-post/${id}`}></Link>

      {/* <a href={link} target="_blank" rel="noreferrer" aria-label="Read post" ></a> */}
    </article>
  );
};

export default Post;