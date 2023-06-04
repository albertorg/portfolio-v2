import { FC } from "react";
import { space } from '../../fonts/fonts';

interface Props {
    title: string;
}

export const NumberedHeading: FC<Props> = ({title}) => {
    return (
        <h2 className='flex items-center relative mt-2 mr-0 mb-10 w-full font-medium text-dynamicH2 text-white whitespace-nowrap
        before:relative before:bottom-0 before:[counter-increment:section] before:content-["0"_counter(section)_"."] before:mr-4 
        before:text-primary before:font-space before:text-dynamicSection'>
            {title}
        </h2>
    )
}
