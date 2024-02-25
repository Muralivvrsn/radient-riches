'use client'
import fullStarIcon from '../../assets/fullstar.svg'
import halfStarIcon from '../../assets/halfstar.svg'
import emptyStarIcon from '../../assets/emptystar.svg'
import Image from 'next/image'
interface StarRatingProps {
    rating: number;
  }
  export default function StarRating({ rating }: StarRatingProps) {
    const normalizedRating = rating / 2;
    const fullStars = Math.floor(normalizedRating);
    const halfStars = normalizedRating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;
    const stars = [];
  
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Image key={`full-${i}`} src={fullStarIcon} alt="Full Star"  />);
    }
    if (halfStars) {
      stars.push(<Image key="half" src={halfStarIcon} alt="Half Star"  />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Image key={`empty-${i}`} src={emptyStarIcon} alt="Empty Star"  />);
    }
  
    return <div className="flex">{stars}</div>;
  }
