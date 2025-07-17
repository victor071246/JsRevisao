import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Home } from './components/Home';
import './styles/global.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Post } from './components/Post';
import { Posts } from './components/Posts';
import { Redirect } from './components/Redirect';
import { NotFound } from './components/NotFound';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Menu></Menu>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/posts" element={<Posts></Posts>}>
                    <Route path=":id" element={<Post></Post>}></Route>
                </Route>
                {/* <Route path="/posts/:id" element={<Post></Post>}></Route> */}
                <Route path="/redirect" element={<Redirect></Redirect>}></Route>
                <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
