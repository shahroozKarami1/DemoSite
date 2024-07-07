import React from 'react'
import "./SearchBarCategorySelect.css"
import { Form } from "react-bootstrap"
export default function SearchBarCategorySelect({ title }) {
    return (
        <>
            <section className='searchBar-select'>
                <main className='searchBar-select__wrap'>
                    <h1 className='searchBar-select__text'>{title}</h1>
                    <Form>
                        <Form.Check type='switch' className="searchBar-select__swichBtn" />

                    </Form>
                </main>
            </section>



        </>
    )
}
