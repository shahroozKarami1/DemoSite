import React from 'react'
import "./HeaderSectionForCat.css"
export default function HeaderSectionForCat({ title, courseNumber }) {
    return (



        <>

            <section className='header-sectionCat'>
                <main className='header-sectionCat__wrap'>
                    <div className='header-sectionCat__wrap--right'>
                        <h1 className='header-sectionCat__right--title'>
                            {title}
                        </h1>
                    </div>
                    <div className='header-sectionCat__wrap--left'>
                        <h3 className='header-sectionCat__left--courseNumber'>
                            {courseNumber}
                        </h3>
                    </div>
                </main>

            </section>




        </>
    )

}
