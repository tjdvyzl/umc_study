import React, {useState} from 'react'
import Ad from './Ad'

export default function AdPage() {
    const [isAdOn, setIsAdOn] = useState(true);

    const onClickHandler = () => {
        setIsAdOn(false);
    }

    return (
        <div>
            <Ad isAdOn={isAdOn}></Ad>
            <button onClick={onClickHandler}>광고 안보기</button>
        </div>  
    )
}
