import './App.css'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import NewPost from './pages/newPost/NewPost.jsx';
import OverviewPosts from './pages/overviewPosts/OverviewPosts.jsx';
import Postdetail from "./pages/postdetailpage/Postdetail.jsx";
import logonavigatie from './assetsblog1/logo-medium.png';
import {NavLink} from 'react-router-dom';
import NotFound from './pages/notFound/NotFound.jsx';


function App() {
    return (
        <>
            <div className="outer-container">
                <div className="innerpage-container">
                    <nav>
                        <span>
                        <img src={logonavigatie} alt="logo van biogventure"/>
                        </span>
                        <ul>
                            <li>
                                <NavLink
                                    className={({ isActive }) => isActive ? 'active-menu-link' : ' default-menu-link'}
                                    to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) => isActive ? 'active-menu-link' : ' default-menu-link'}
                                    to="/overviewposts">
                                    Alle posts
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) => isActive ? 'active-menu-link' : ' default-menu-link'}
                                    to="/newpost">
                                    nieuwe posts
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                    <main className="individual-pages">
                        <Routes>
                            <Route path="/" element={<Home/>} />
                            <Route path="/newpost" element={<NewPost/>} />
                            <Route path="/overviewposts" element={<OverviewPosts/>} />
                            <Route path="/postdetail/:postId"  element={<Postdetail/>} />
                            <Route path="*" element={<NotFound />}/>
                        </Routes>
                    </main>
                </div>
            </div>
        </>
    )
}

export default App
