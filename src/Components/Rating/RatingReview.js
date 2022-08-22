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
        if (props.rating && props.numberOfRating != undefined) {
            setValue((props.rating / props.numberOfRating))
        }
    }, [props.rating])

    return (
        <StarRatings
            rating={value}
            starRatedColor="black"
            numberOfStars={3}
            // changeRating={changeRating}
            name='rating'
            starDimension='1.3vw'
            starSpacing='0.1vw'
        />
    )
}

export default RatingReview