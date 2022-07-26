import { useEffect, useState } from "react";
import { getCategories } from "../../managers/CatManager";
import "./Categories.css"


// categories component to display the categories

export const Categories = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
            .then(setCategories)
    },
        []
    )

    return (
        <>
            <section>
                <h2 className="cat_header">Categories</h2>

                <article>
                    {
                        categories.map(category => {
                            return <div className="cat_list" key={`category--${category.id}`}>{category.label}</div>
                        })
                    }
                </article>
            </section>
        </>
    )
}