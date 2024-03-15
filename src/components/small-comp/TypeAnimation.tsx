'use client'
import { memo } from 'react';
import { TypeAnimation } from 'react-type-animation';

interface AnimationProps {
    sequence : any,
    wrapper? : any,
    style? : React.CSSProperties,
    className? : String
}

const TypeAnimationComponent = ({sequence = [],wrapper = 'h1',style,className} : AnimationProps) => {
    return (
        <TypeAnimation
            sequence={sequence}
            wrapper={wrapper}
            speed={50}
            style={style}
            repeat={Infinity}
            className={`${className}`}
        />
    )
}

export default TypeAnimationComponent;
