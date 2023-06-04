import { FC } from "react";

interface Props {
    title: string;
}

export const NumberedHeading: FC<Props> = ({title}) => {
    return (
        <h2 className='flex items-center relative mt-2 mr-0 mb-10 w-full font-medium text-dynamicH2 text-white whitespace-nowrap
        before:relative before:bottom-0 before:[counter-increment:section] before:content-["0"_counter(section)_"."]  
        before:text-primary before:font-space before:text-dynamicSection before:mr-1 before:mb-[-4px] md:before:mr-4
        after:block after:relative after:top-0 after:w-full after:h-[1px] after:ml-3 after:bg-primary sm:after:ml-5 
        sm:after:w-[200px] md:after:w-[300px]'
        >
            {title}
        </h2>
    )
}
