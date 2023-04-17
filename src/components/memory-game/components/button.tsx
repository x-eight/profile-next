import { FC } from "react";

type Props = {
    label: string//React.ReactNode
    action: any
}

export const Button:FC<Props> = ({ label, action}) => {
    return (
        <button className='button' onClick={action}>{ label }</button>
    );
}