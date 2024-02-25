'use client'
import fullStarIcon from '../../assets/fullstar.svg'
import halfStarIcon from '../../assets/halfstar.svg'
import emptyStarIcon from '../../assets/emptystar.svg'
import Image from 'next/image'
interface StarRatingProps {
    rating: number;
  }
  export default function StarRating({ rating }: StarRatingProps) {
    const integralPart = Math.floor(rating); 
    const decimalPart = Number((rating % 1).toFixed(1)); 
    const fullStars = Math.floor(integralPart/2) + (decimalPart >= 0.6 ?1:0);
    const halfStars = decimalPart < 0.6 && decimalPart >0.0?1:0
    const emptyStars = decimalPart == 0 && rating <10 ?5-fullStars-halfStars:0
        
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
