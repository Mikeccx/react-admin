import React from 'react';
import './App.less'
import { Layout, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from '@view/home'
import { SizeMenu } from '@component/menu'
import Logo from '@component/logo'
import { Content } from 'antd/lib/layout/layout';
import { ButtonView } from '@view/ui/button_view'
import { CascaderView } from '@view/ui/cascader_view'

const { Header, Sider } = Layout;

function App() {
  return (
    <BrowserRouter>
            <Layout>
                <Sider className='sider' >
                    <Logo/>
                    <SizeMenu/>
                </Sider>
                <Layout>
                        <Header className='header'>
                          <span>-</span>
                          <Avatar size={36} icon={<UserOutlined />} />
                        </Header>
                        <Content className='layout'>
                          <Routes>
                              <Route path='/' element={<Home/>}></Route>
                              <Route path='/home' element={<Home/>}></Route>
                              <Route path='/button' element={<ButtonView/>}></Route>
                              <Route path='/cascader' element={<CascaderView/>}></Route>

                              {/* <Route path='/wiki' element={<Wiki/>}></Route>
                              <Route path='/home' element={<Home/>}></Route> */}
                          </Routes>
                        </Content>
                </Layout>
            </Layout>
        </BrowserRouter>
  );
}

export default App;
