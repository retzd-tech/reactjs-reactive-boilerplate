import React, {Component} from 'react';
import {Button, Icon, Menu} from 'antd';
import './Sidebar.css';

const {SubMenu} = Menu;

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: this.props.height / 4.5 + 'vh'
    };
  }

  render() {
    const {height} = this.state;
    console.log(this.state);
    return (
      <Menu
        style={{height: height}}
        className="container--sidebar"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme={this.props.theme}
        inlineCollapsed={this.props.collapsed}>

        <div className="container-switch--sidebar">
          <Button type="primary"
                  onClick={
                    () => {
                      this.props.handleClickCollapse();
                      console.log(this.props);
                    }} className="switch--sidebar">
            <Icon type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}/>
          </Button>
        </div>
        <Menu.Item key="1">
          <Icon type="dashboard"/>
          <span>Dashboard</span>
        </Menu.Item>
        <SubMenu
          key="sub2"
          title={
            <span>
                <Icon type="appstore"/>
                <span>Navigation Two</span>
              </span>
          }
        >
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </SubMenu>
      </Menu>
    );
  }
}

export default Sidebar;
