import React from 'react'
import ReactStars from "react-rating-stars-component";
import profile from "../../images/profile.png"

const ReviewCard = ({review}) => {
    const options = {
        edit: false,
        color: "rgba(20,20,20,0.2)",
        activeColor: "tomato",
        size: Window.innerWidth < 600 ? 20 : 25,
        value: review.rating,
        isHalf: true,
      };
  return (
    <div className='reviewCard'>
        <img src="https://media-exp1.licdn.com/dms/image/C5603AQFkj2tpK3LuQg/profile-displayphoto-shrink_200_200/0/1632983980277?e=1654128000&v=beta&t=H4lHbT6FSqz_X1z6GmieVNqucA9VgJhRaxHzPC14LMc" alt="User"/>
        <p>{review.name}</p>
        <ReactStars {...options} />
        <span>{review.comment}</span>
    </div>
  )
}

export default ReviewCard