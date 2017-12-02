import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React from 'react';
import { connect } from 'dva';
import { ContainerQuery } from 'react-container-query';
import classnames from 'classnames';
import { Link } from 'dva/router';
import styles from './BasicLayout.less';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 992,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
  },
};

class BasicLayout extends React.PureComponent {
  state = {
    collapsed: false,
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const layout = (
      <Layout>
        <Sider
          breakpoint="xs"
          style={{ background: '#fff', padding: 0 }}
          // collapsedWidth="0" 不显示图标，全部折叠进去
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className={styles.logo}>
            <Link to="/">
              <img src="https://gw.alipayobjects.com/zos/rmsportal/iwWyPinUoseUxIAeElSx.svg" alt="logo" />
              <h1>宠物交易平台</h1>
            </Link>
          </div>
          <Menu>
            <SubMenu key="sub1" title={<span><Icon type="user" /><span>宠物狗</span></span>}>
              <Menu.Item key="1">2</Menu.Item>
              <Menu.Item key="2">1</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="laptop" /><span>宠物猫</span></span>}>
              <Menu.Item key="5">1</Menu.Item>
              <Menu.Item key="6">2</Menu.Item>
              <Menu.Item key="7">3</Menu.Item>
              <Menu.Item key="8">4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span><Icon type="notification" /><span>宠物鹦鹉</span></span>}>
              <Menu.Item key="9">option16</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              style={{ cursor: 'pointer', fontSize: 25 }}
              className={this.state.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.state.alttoggle}
            />
          </Header>
          <Breadcrumb style={{ margin: '13px 0 0 18px' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 600 }}>
            Content
          </Content>
          <Footer
            className={this.state.Footer}
          >
            <div>
              <h4>
                <a href="http://baidu.com" Target="_blank">Github</a>
                <a href="http://ant.design" Target="_blank">Ant Design</a>
                <p>Copyright <Icon type="copyright" /> github.com.com</p>
              </h4>
            </div>
          </Footer>
        </Layout>
      </Layout>
    );

    return (
      <ContainerQuery query={query}>
        {params => <div className={classnames(params)}>{layout}</div>}
      </ContainerQuery>
    );
  }
}
export default connect()(BasicLayout);
