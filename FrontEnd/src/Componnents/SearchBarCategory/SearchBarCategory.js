import React from 'react'
import "./SearchBarCategory.css"
import { CiSearch } from "react-icons/ci";
import SearchBarCategorySelect from '../SearchBarCategorySelect/SearchBarCategorySelect';
export default function SearchBarCategory() {
    return (

        <>


            <section className='searchCat'>
                <main className='searchCat-wrap'>
                    <div className='searchCat-typeBox'>
                        <input type="search" className="searchCat-typeBox__inp" name="" id=""   placeholder= "جست و جوی بین دوره ها" />
                        <CiSearch className='searchCat-typeBox__icon' />

                    </div>

                    <SearchBarCategorySelect  title={"فقط  دوره های رایگان"}></SearchBarCategorySelect>
                    <SearchBarCategorySelect  title={"   در حال پیش فروش "}></SearchBarCategorySelect>
                    <SearchBarCategorySelect  title={"  دوره های خریداری شده"}></SearchBarCategorySelect>
                </main>
            </section>




        </>
    )
}
