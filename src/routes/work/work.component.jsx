import Header from '../../components/header/header.component';
import PostList from '../../components/post-list/posts-list.component';
import UseFetch from '../../components/use-fetch/use-fetch.component';

const Work = () => {

    const { data } = UseFetch('https://www.granite5.com/wp-json/wp/v2/work?_fields=id,title,link,_links,_embedded&_embed&per_page=19');

     return(
         <div className="content">
            <Header  pageTitle={'Work'} displayToggle={true} />
            {data && <PostList posts={data} post_type={'work'}/> }
         </div>
     )

}

export default Work