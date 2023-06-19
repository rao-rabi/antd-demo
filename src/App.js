import { UploadOutlined, UserOutlined, VideoCameraOutlined, SketchOutlined } from '@ant-design/icons';
import { Layout, Menu, theme, Button, Typography } from 'antd';
import React from 'react';
const { Content, Sider } = Layout;
const { Text, Title } = Typography;
const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        style={{
          height: '100vh',
        }}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['4']}
          items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
            (icon, index) => ({
              key: String(index + 1),
              icon: React.createElement(icon),
              label: `Home ${index + 1}`,
            }),
          )}
        />
      </Sider>
      <Layout>
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <div
            style={{
              padding: 24,
              background: colorBgContainer,

            }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}>
              <Title level={2}>DashBoard</Title>
              <Button
                style={{
                  paddingTop: '14px',
                  paddingBottom: '44px',
                  fontSize: '20px'
                }}
              >Moath Muhammad
              </Button>
            </div>
            {/* Inviation */}
            <div style={{
              border: '1px solid black',
              borderRadius: '5px',
              backgroundColor: 'blue',
              padding:'15px 0px 15px 8px',
              display: 'flex',
              alignItems:'center',
            }}>
              <div>
                {<SketchOutlined style={{
                  fontSize: '38px',
                  borderRadius: '50%',
                  padding: 17,
                  color: 'blue',
                  backgroundColor: 'white',
                  marginRight:'7px'
                }} />}
              </div>

              <div>
                <Title level={5} style={{color:'white',marginBottom:'0px',marginTop:'0px'}}>YOU HAVE BEEN INVITED</Title>
                <Text style={{color:'white',fontSize:'16px'}}>You have been invited to participate in the compaign for Platinum credit card.<br></br>
                  Please connect a bank to start with the service.</Text>
              </div>
            </div>
            <Text style={{
              fontSize:'16px',
            }}>YOU'RE ALMOST THERE</Text>
            
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;