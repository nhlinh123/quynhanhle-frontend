/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react'
import PaginationCommon from '../pagination/pagination'

export default function EventCard({ ...props }) {
    const content = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus impedit temporibus dolore exercitationem nobis molestiae dignissimos, suscipit soluta voluptatum saepe perspiciatis vitae! Nobis eaque error veritatis. Eum mollitia amet itaque!`;
    const { data } = props;
    let showWord = window?.innerWidth <= 375 ? 50 : 200;
    return (
        <>
            {data && data?.map((item: any, index: number) => {
                return (
                    <div className='flex justify-between gap-3 my-5 -translate-y-5 max-h-60' key={index}>
                        <img srcSet={`${item?.url} 2x`} alt={item?.title} title={item?.title} className='min-[169px]:max-w-[10rem] sm:min-w-[10rem] md:min-w-[20rem] xl:min-w-[30rem] max-h-60' />
                        <div className='flex flex-col justify-between gap-2'>
                            <h3 className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
                            <p className='whitespace-pre-line truncate'>{content && content.length > showWord ? content.slice(0, showWord) + '...' : content}</p>
                            <a href="#"><i className='after:content-[">"] after:ml-2'>xem thêm</i></a>
                        </div>
                    </div>
                );
            })}
            <PaginationCommon></PaginationCommon>
        </>
    )
}
