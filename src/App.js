import { createBrowserRouter as Router, RouterProvider } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'
import Compose from './components/compose'
import Post from './components/post'
import './components/styles.css'

const router = Router([
    {
        path: '/',
        element: <Header/>,
        children: [
            {path:'/',element:<Home/>},
            {path:'/posts',element:<Home/>},
            {path:'/about',element:<About/>},
            {path:'/contact',element:<Contact/>},
            {path:'/compose',element:<Compose/>},
            {path:'/posts/:postID',element:<Post/>}
        ]
    }
])

export default function App() {
    return (
        <>
        <RouterProvider router={router}>
            <Header/>
        </RouterProvider>
        <Footer/>
        </>
    )
}