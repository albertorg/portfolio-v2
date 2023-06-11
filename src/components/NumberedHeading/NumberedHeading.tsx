import { FC } from "react";

interface Props {
    title: string;
    overline?: boolean;
}

export const NumberedHeading: FC<Props> = ({ title, overline = false }) => {
    return (
        <h2
            className={`flex items-center ${overline && 'justify-center mb-8 text-primary font-space'} relative mt-2 mr-0 mb-10 w-full font-medium whitespace-nowrap
            before:relative before:bottom-0 before:[counter-increment:section] before:content-["0"_counter(section)_"."]  
            before:text-primary before:font-space before:mr-1 md:before:mr-4
            ${!overline && 'after:block after:relative after:top-0 after:w-full after:h-[1px] after:ml-3 after:bg-primary sm:after:ml-5 sm: after: w-[200px]md: after: w - [300px] before:text-dynamicSection before:mb-[-5px] text-dynamicH2 text-white'}`}
        >
            {title}
        </h2>
    )
}
