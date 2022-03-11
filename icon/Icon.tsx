import {FC} from "react";

interface Props{
    name: string;
    width: number | string;
    height: number | string;
}

export const Icon:FC<Props> = ({name, width, height}) => {
    return(
        <svg width={`${width}px`}
             height={`${height}px`}
        >
            <use xlinkHref = {`/sprite.svg#${name}`}/>
        </svg>
    )
}