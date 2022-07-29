import { useEffect, useState } from "react";
import { getAllTags, saveTag, deleteTag, editTag } from "../../managers/TagManager";


// tag component to display the tags, add a new tag, edit, and delete tag

export const TagList = () => {

    const [tags, setTags] = useState([])
    const [tag, addTag] = useState({
        label: ""
    })

    useEffect(() => {
        getAllTags()
            .then(setTags)
    },
        []
    )

    // when create button is clicked, the new tag is added to the list, and the form resets 
    const saveButtonClick = (event) => {
        event.preventDefault()
        saveTag(tag)
            .then(() => {
                getAllTags()
                    .then(setTags)
            })
        addTag({
            label: ""
        })
    }

    // function to delete tag
    const deleteButton = (id) => {
        deleteTag(id)
            .then(() => {
                getAllTags()
                    .then(setTags)
            })
    }

    // function to edit tags
    const editButton = (tagObj) => {
        editTag(tagObj)
            .then(() => {
                getAllTags()
                    .then(setTags)
            })
    }




    return (
        <>
            <section>
                <h2 className="cat_header">Tags</h2>

                <article className="all_cat">
                    <div>
                        {
                            tags.map(tag => {
                                return <section className="cat_list" key={`tag--${tag.id}`}>
                                    <div>

                                        {/* delete button */}
                                        <button className="dt_btn" key={`delete-tag-btn--${tag.id}`}
                                            onClick={() => {
                                                const confirmBox = window.confirm("Do you really want to delete this tag?")
                                                if (confirmBox === true) {
                                                    deleteButton(tag.id)
                                                }
                                            }}>❌</button>

                                        {/* edit button */}
                                        <button className="dt_btn" key={`edit-tag-btn--${tag.id}`} onClick={() => {
                                            const editBox = window.prompt("Edit this tag", "")
                                            const tagCopy = { ...tag }
                                            tagCopy.label = editBox
                                            editButton(tagCopy)
                                        }}>⚙️</button>
                                        {tag.label}
                                    </div>
                                </section>
                            })
                        }
                    </div>

                    <aside className="new_cat">
                        <form className="input_cat">
                            <h2>Create a New Tag</h2>
                            <div >
                                <input required
                                    type="text" placeholder="Enter New Tag" value={tag.label}
                                    onChange={
                                        (event) => {
                                            const copy = { ...tag }
                                            copy.label = event.target.value
                                            addTag(copy)
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