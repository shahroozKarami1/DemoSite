import React from 'react'
import "./SortingBox.css"
import { RiArrowUpDownLine } from "react-icons/ri";

export default function SortingBox() {
    return (

        <>
        
        <section    className='sortingBox'>
            <main   className='sortingBox-wrap'>
             <div  className='sortingBox-right'>
             <RiArrowUpDownLine   className='sortingBox-right__icon' />

                <h1   className='sortingBox-header'  >
                    مرتب  سازی بر اساس  :  
                </h1>
             </div>
             <ul  className='sortingBox-list'>
                <li  className='sortingBox-item'>
                    <a href=  "#"  className='sortingBox-item__link'>
                        همه دوره ها  
                    </a>
                </li>
                <li  className='sortingBox-item'>
                    <a href=  "#"  className='sortingBox-item__link'>
                        ارزان ترین  
                    </a>
                </li>
                <li  className='sortingBox-item'>
                    <a href=  "#"  className='sortingBox-item__link'>
                        گران  ترین  
                    </a>
                </li>
                <li  className='sortingBox-item   active'>
                    <a href=  "#"  className='sortingBox-item__link   '>
                        پرمخاطب ترین  
                    </a>
                </li>
             </ul>
            </main>
        </section>
        
        
        
        
        
        
        
        
        </>
    )
}
