import React, {useState} from 'react';
import Image from "next/image";
import show from "/public/show.png";
import dontshow from "/public/dontshow.png";

const UsePasswordToggle = () => {
    const [visible, setVisible] = useState<boolean>(false);

    const icon = <Image src={visible ? show : dontshow} width={20} height={20} alt={"показать/скрыть пароль"}
                        onClick={() => setVisible(!visible)}/>

    const inputType = visible ? "text" : "password";

    return [inputType, icon]
};

export default UsePasswordToggle;