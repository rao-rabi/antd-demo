import { UploadOutlined, UserOutlined, VideoCameraOutlined, SketchOutlined, BankOutlined, LinkOutlined, PieChartOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, Typography } from 'antd';
import React from 'react';
const { Content, Sider } = Layout;
const { Text, Title } = Typography;
const App = () => {
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
            margin: '0px 16px 0',
          }}
        >
          <div
            style={{
              padding: 24,
              backgroundColor: 'rgb(240 241 241)',

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
            <div className='invitation'>
              <div>
                {<SketchOutlined className='icon-invite' />}
              </div>

              <div>
                <Title level={5} className='step-title' style={{ color: 'white' }}>YOU HAVE BEEN INVITED</Title>
                <Text style={{ color: 'white', fontSize: '16px' }}>You have been invited to participate in the compaign for Platinum credit card.<br></br>
                  Please connect a bank to start with the service.</Text>
              </div>
            </div>
            <Text style={{
              fontSize: '16px',
            }}>YOU'RE ALMOST THERE</Text><br></br>
            <Button className='btn-step'>Step 1</Button>

            <div className='step-1'>
              <div className='steps'>
                <div>
                  {<BankOutlined className='icon-step1' />}
                </div>

                <div>
                  <Title level={5} className='step-title'>CONNECT YOUR BANK</Title>
                  <Text style={{ fontSize: '16px' }}>Connect atleast 1 bank to start utilizing the open bank services</Text>
                </div>
              </div>
              <Button className='btn-bank'><LinkOutlined style={{ fontSize: '22px' }} />Connect a Bank</Button>
            </div>

            <Button className='btn-step'>Step 2</Button>

            <div className='step2-3'>
              <div className='steps'>
                <div>
                  {<PieChartOutlined className='icon-bg' />}
                </div>

                <div>
                  <Title level={5} className='step-title'>VIEW ANALYTICAL PROFILE</Title>
                  <Text style={{ fontSize: '16px' }}>Once your bank is connected you can view your analytical profile</Text>
                </div>
              </div>
            </div>

            <Button className='btn-step'>Step 3</Button>

            <div className='step2-3'>
              <div className='steps'>
                <div>
                  {<UnorderedListOutlined className='icon-bg' />}
                </div>

                <div>
                  <Title level={5} className='step-title'>MANAGE YOU CONSENT AND VIEW FINANCIAL DATA</Title>
                  <Text style={{ fontSize: '16px' }}>You can also manage your bank account consent and view financial data</Text>
                </div>
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;