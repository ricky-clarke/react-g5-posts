import Header from '../../components/header/header.component';
import PostList from '../../components/post-list/posts-list.component';
import UseFetch from '../../components/use-fetch/use-fetch.component';

const Posts = () => {

    const { data } = UseFetch('https://www.granite5.com/wp-json/wp/v2/posts?_fields=id,date_gmt,title,link,_links,_embedded&_embed&per_page=18');

    return(
        <div className="content">
             <Header  pageTitle={'News & insights'} displayToggle={true}/>
              {data && <PostList posts={data} /> }
        </div>
    )

}

export default Posts