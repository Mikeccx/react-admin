import React from 'react';
import './App.less'
import { Layout } from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
// import Home from '../src/views/home'
import Menu from '../src/components/menu'
import { a } from '@dao/'
// console.log(a)

const { Header, Sider } = Layout;

function App() {
  return (
    <BrowserRouter>
            <Layout>
                <Sider className='sider' >
                    <Menu/>
                </Sider>
                <Layout>
                        <Header className='header'>
                        </Header>
                        <Routes>
                            {/* <Route path='/' element={<Home/>}></Route> */}
                            {/* <Route path='/wiki' element={<Wiki/>}></Route>
                            <Route path='/home' element={<Home/>}></Route> */}
                        </Routes>
                </Layout>
            </Layout>
        </BrowserRouter>
  );
}

export default App;
