import Image from 'next/image'
import React from 'react'
import { Rectangle5, Rectangle6 } from '../../../../../public/img/landing'
import { title } from 'process'
import Link from 'next/link'
export default function ShowCase() {
    const GroupShowCase=[
        {
            Image:Rectangle5,
            title:'Research Aplikasi Line dengan case study bagaimana cara meningkatkan User',
            tech:'UI/UX Design',
            button:'Lihat',
        },
        {
            Image:Rectangle6,
            title:'Pembuatan website kafe koding menggunakan HTML CSS',
            tech:'HTML & CSS',
            button:'Lihat',
        },
        {
            Image:Rectangle5,
            title:'Membuat Platform Galeri photos menggunakan Front End',
            tech:'JavaScript',
            button:'Lihat',
        },
    ]
  return (
    <section className='px-16 pt-10'>
        <h2 className='text-center font-bold text-xl'>Show Case</h2>
        <div className='grid grid-cols-3 gap-5 pt-5'>
            {GroupShowCase.map((item,i)=>(
                <ul key={i}>
                    <li>
                    <Image src={item.Image}alt=''/>
                       <p className='font-bold'>
                        {item.title}
                        </p> 
                        <div className=''>
                        <i className='text-[12px] pr-52 text-slate-700'>{item.tech}</i>
                        <Link href={''}>
                        <button className='bg-blue-800 text-white px-3 p-1 font-semibold rounded-lg'>
                            {item.button}
                        </button>
                        </Link>

                        </div>
                    </li>
                </ul>
            ))}
        </div>
    </section>
  )
}
