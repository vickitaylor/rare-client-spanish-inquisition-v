import { useEffect, useState } from "react";
import { getCategories, saveCategory } from "../../managers/CategoryManager";
import "./Categories.css"


// categories component to display the categories

export const Categories = () => {

    const [categories, setCategories] = useState([])

    const [category, addCategory] = useState({
        label: ""
    })

    useEffect(() => {
        getCategories()
            .then(setCategories)
    },
        []
    )

    // when create button is clicked, the new category is added to the list, and the form resets 
    const saveButtonClick = (event) => {
        event.preventDefault()
        saveCategory(category)
            .then(() => {
                getCategories()
                    .then(setCategories)
            })
        addCategory({
            label: ""
        })
    }

    return (
        <>
            <section>
                <h2 className="cat_header">Categories</h2>


                <article className="all_cat">
                    <div>
                        {
                            categories.map(category => {
                                return <div className="cat_list" key={`category--${category.id}`}>{category.label}</div>
                            })
                        }
                    </div>
                    <aside className="new_cat">
                        <form className="input_cat">
                            <h2>Create a New Category</h2>
                            <div >
                                <input required
                                    type="text" placeholder="Enter New Category" value={category.label}
                                    onChange={
                                        (event) => {
                                            const copy = { ...category }
                                            copy.label = event.target.value
                                            addCategory(copy)
                                        }
                                    } /> < br />
                                <button className="btn" onClick={(clickEvent) => saveButtonClick(clickEvent)}
                                >Create</button>
                            </div>
                        </form>
                    </aside>
                </article>
            </section>
        </>
    )
}