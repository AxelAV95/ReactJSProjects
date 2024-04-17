import { FaEye } from "react-icons/fa"
import DefaultPoster from "../assets/poster.jpg"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "../axios"
import { useDispatch, useSelector } from "react-redux"
import { deleteReview } from "../features/reviewsSlice"


function Story() {

    const user = useSelector((state) => state.auth.data)
    const {id} = useParams()
    const [review, setReview] = useState({})
    const [loading, setLoading] = useState(true)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleDelete = async (id) =>{
      if(window.confirm("Are you sure?")){
        await dispatch(deleteReview(id))
        navigate("/")
      }
    }

    useEffect(()=>{
      axios.get(`/api/reviews/${id}`)
        .then((res) =>{
          setReview(res.data)
          setLoading(false)
        })
        .catch((error) =>{
          console.log(error)
        })
    }, [id])

    return (
        <div className="container-lg my-5">
          {
            loading ? (<div className="text-center mt-5">
              <h3 className="text-secondary fw-bold fs-4">Wait a second...</h3>
            </div>):
          

            <div className="row text-center justify-content-center">
                <div className="rounded">
                    <img src={review.poster ? `http://localhost:5000/${review.poster}`: DefaultPoster} alt="" height="300px" width="200px" />
                </div>

                {user && user._id === review.author._id ? (<div className="mt-3">
                  <div className="d-flex flex-row justify-content-center text-center">
                    <div>
                      <Link to={`/update/${review._id}`}><button className="btn btn-secondary">Edit</button></Link>
                    </div>
                    <div>
                      <button className="btn btn-danger ms-2" onClick={() => handleDelete(review._id)}>Delete</button>
                    </div>
                  </div>
                </div>) : null}
                <h2 className="lead fw-bold mt-5">{review.title}</h2>

                
                <h4 className="text-primary lead fw-bold mt-5">Published by {review.author.username}</h4>
                <p className="text-secondary lead fw-bold mt-2"><FaEye className="me-2" />Seen by {review.views}</p>
                <p className="lead mt-2">{review.text}</p>
            </div>
            }
        </div>
    )
}

export default Story