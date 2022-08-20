import React from 'react'
import StarRatings from 'react-star-ratings'
import { useState, setState } from 'react';
import { useEffect } from 'react';
import { validateArgCount } from '@firebase/util';



function RatingReview(props) {

    const [value, setValue] = useState(0);

    // function changeRating(newRating, name) {
    //     setValue(newRating)

    // }
    useEffect(() => {
        validateProps()
    }, [props.rating])
    function validateProps() {
        if (props.rating && props.numberOfRating) {
            setValue((props.rating / props.numberOfRating))
        }
        else {
            setValue(0)
        }
    }

    return (
        <StarRatings
            rating={value}
            starRatedColor="#F2994A"
            numberOfStars={5}
            // changeRating={changeRating}
            name='rating'
            starDimension='1.3vw'
            starSpacing='0.1vw'
        />
    )
}

export default RatingReview