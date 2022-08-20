import React from 'react';
import './App.less'
import { Layout } from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from '@view/home'
import {SizeMenu} from '@component/menu'
import HeaderC from '@component/header'
const { Header, Sider } = Layout;

function App() {
  return (
    <BrowserRouter>
            <Layout>
                <Sider className='sider' >
                    <SizeMenu/>
                </Sider>
                <Layout>
                        <Header className='header'>
                          <HeaderC/>
                        </Header>
                        <Routes>
                            <Route path='/' element={<Home/>}></Route>
                            {/* <Route path='/wiki' element={<Wiki/>}></Route>
                            <Route path='/home' element={<Home/>}></Route> */}
                        </Routes>
                </Layout>
            </Layout>
        </BrowserRouter>
  );
}

export default App;
