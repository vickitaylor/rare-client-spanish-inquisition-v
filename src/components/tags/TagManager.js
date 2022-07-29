import { useParams,useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { getAllTags, savePostTags } from "../../managers/TagManager"


export const TagManager = () => {
    const navigate = useNavigate()
    const { postId } = useParams()
    const [ allTags, setAllTags] = useState([])
    const [ selectedTags, setSelectedTags ] = useState([])

    useEffect(
        () => {
            getAllTags().then(setAllTags)
            }
        ,[]
    )


    const handleSubmit = () => {
        const postTagsToSubmit = []
        for (let tag of selectedTags) {
            const postTagObj = {
                post_id: postId,
                tag_id: tag
            }
            postTagsToSubmit.push(postTagObj)
        }
        console.log(postTagsToSubmit)
        savePostTags(postTagsToSubmit).then(
            navigate(`/post/${postId}`)
        )

        setSelectedTags([])
    }

    return <>
    <h1>SELECT SOME TAGS, MAKE SURE YOU DO IT RIGHT ;)</h1>
    {
        (allTags)
        ? <>
        {
            allTags.map( tag => { 
            return <div>
                <label>
                    <input
                        type="checkbox"
                        onChange={event => {
                            if (event.target.checked) {
                                const selectedTagsCopy = [...selectedTags]
                                selectedTagsCopy.push(tag.id)
                                setSelectedTags(selectedTagsCopy)
                            } else if (!event.target.checked) {
                                const selectedTagsCopy = [...selectedTags]
                                const selectedIndex = selectedTagsCopy.indexOf(tag.id)
                                console.log(selectedIndex)
                                if (selectedIndex !== -1) {
                                    selectedTagsCopy.splice(selectedIndex)
                                }
                                setSelectedTags(selectedTagsCopy)
                            }
                        }}
                    />
                    {tag.label}
                    </label>
                </div>
        
            })
        }
        </>
        : <></>
    }

<button className="button" onClick ={() => handleSubmit()}>Save</button>
    </>
}