import { useState, useEffect } from "react";
import './category-filters.styles.scss';

const CategoryFilter = () => {

    const [categories, setCategories] = useState([]);

    useEffect( () => {
        fetch('https://www.granite5.com/wp-json/wp/v2/categories', { 
            cache: "force-cache"
        })
        .then((response) => response.json())
        .then((post_cats) => {
           setCategories(post_cats)
        }
        
       );
    }, []); // No dependancy - only call this function on mount

  return (
    <div className="category_filters">
    {
        categories.map((category, i) => {
        return  (
            
                <button
                    className="app__filters_button"
                    key={category?.id}
                    id={category?.id}
                   onClick= {categoryHandler}
                    >
                        {category?.name}
                </button>
            )
        })
    }

</div>

  );
};

export default CategoryFilter;