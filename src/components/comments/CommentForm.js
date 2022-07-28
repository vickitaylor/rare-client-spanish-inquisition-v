export const CommentsForm = () => {

    const currentUser = localStorage.getItem("pal_user")
    const currentUserObject = JSON.parse(currentUser)

    const navigate = useNavigate()
    const { parkingLotId } = useParams()

    const [comments, create] = useState({
        userId: currentUserObject.id,
        parkingLotId: parkingLotId,
        comment: ""
    })

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
    

        const newComment = {
            userId: currentUserObject.id,
            parkingLotId: parkingLotId,
            comment: comments.comment
        }

        return fetch('http://localhost:8088/comments',{
            method: "POST",
            headers: { "Content-type": "application/json"},
            body: JSON.stringify(newComment)
        })
            .then(res => res.json())
            .then(() => {
                navigate(`/parkingDetails/${parkingLotId}`)
            })
    }

    return
    <>
    </>
}