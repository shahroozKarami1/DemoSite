import React from 'react'
import './Index.css'
import Header from "../../Componnents/Header/Header"
import LastCourses from '../../Componnents/LastCourses/LastCourses'
import RoadMap from '../../Componnents/RoadMap/RoadMap'
import HelpYou from '../../Componnents/HelpYou/HelpYou'
import NewCourses from '../../Componnents/NewCourses/NewCourses'
import ArticleSection from '../../Componnents/ArticleSection/ArticleSection'
import Footer from '../../Componnents/Footer/Footer'
export default function Index() {
  return (

    <>
      <Header></Header>

      <LastCourses></LastCourses>
      <RoadMap></RoadMap>
      <HelpYou></HelpYou>
      <NewCourses></NewCourses>
      <ArticleSection></ArticleSection>
      <Footer></Footer>
    </>
  )
}
