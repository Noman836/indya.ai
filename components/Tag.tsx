import React from 'react'

interface TagProps {
    title: string;
}

const Tag = ({ title}: TagProps) => {
  return (
    <>
    <span className='rounded-[30px] border-boxBorderColor bg-bgColor text-primary px-[20px] py-[6px]'>
        {title}
    </span>
    </>
  )
}

export default Tag