import React from 'react'

const SectionTitle = ({title} : {title: string}) => {
    return (
        <div className="w-full relative mb-3 text-3xl font-semibold">
            <h2>{title}</h2>
            <div className="w-10 h-1 rounded-lg bg-[#BE968E] mt-2"></div>
        </div>
    )
}

export default SectionTitle;