import Category from "./Pages/Category/Category"
import ArticaleInfo from "./Pages/ArticleInfo/ArticaleInfo"
import CourseInfo from "./Pages/CourseInfo/CourseInfo"
import Index from "./Pages/Index/Index"
import  Login  from   "./Pages/Login/Login"
import NotFound from "./Pages/NotFound/NotFound"
import Regester from "./Pages/Regester/Regester"
let routes = [

    {
        path: "/category-info/:categoryName", element: <Category></Category>
    },

    {
        path: "/course-info/:courseName", element: <CourseInfo></CourseInfo>
    },

    {
        path: "/article-info/:articleName", element: <ArticaleInfo></ArticaleInfo>
    },
    {
        path: "/", element: <Index></Index>
    },
    {
        path: "/regester", element: <Regester></Regester>
    },
    {
        path: "/login", element: <Login></Login>
    },
    {
        path: "*", element: <NotFound></NotFound>
    },



]

export default routes 