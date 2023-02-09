import { useParams } from 'react-router-dom'; 
import Header from '../../components/header/header.component';
import UseFetch from '../../components/use-fetch/use-fetch.component';
import './single-post.styles.scss';

const SinglePost = () => {

    const { id } = useParams();

    const { data } = UseFetch('https://www.granite5.com/wp-json/wp/v2/posts/' + id + '/?_fields=id,title,content,link,_links,_embedded&_embed');
    
    return(
        <div className="content content--post">
            <Header  pageTitle={ data?.title.rendered } displayToggle={false} />
           <div dangerouslySetInnerHTML={{ __html: data?.content.rendered }}></div>
        </div>
    )

}

export default SinglePost;