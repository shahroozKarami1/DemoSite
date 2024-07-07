import React from 'react'
import "./BreadCrumb.css"
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom"
export default function BreadCrumb({ links }) {
    return (
        <>


            <section className='breadCrumb'>
                <main className='breadCrumb-wrap'>
                    <div className='breadCrumb-icon'>
                        <FaHome className='breadCrumb-icon__home' />

                    </div>
                    <ul className='breadCrumb-list'>
                        {
                            links.map((link) => (

                                <li className='breadCrumb-item' key={link.id}>
                                    <Link to={`/${link.to}`} className='breadCrumb-item__link '> {link.title} </Link>
                                </li>

                            ))
                        }


                    </ul>
                </main>
            </section>




        </>
    )
}
