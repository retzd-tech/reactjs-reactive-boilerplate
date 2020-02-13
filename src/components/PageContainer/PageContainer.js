import React, {Component} from 'react';
import {Switch, Row, Col} from 'antd';
import './PageContainer.css';
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import List from "../../List";
import {Fade} from 'react-reveal'

class PageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'dark',
      collapseStatus: false,
      navbarWidth: 24,
      sidebarWidth: 4,
      containerWidth: 20,
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      collapsed: false,
      sidebarAnimation: true,
      card: [
        {
          title: "Card 1",
          description: "Description 1",
        },
        {
          title: "Card 2",
          description: "Description 2",
        },
        {
          title: "Card 3",
          description: "Description 3",
        },
        {
          title: "Card 1",
          description: "Description 1",
        },
        {
          title: "Card 2",
          description: "Description 2",
        },
        {
          title: "Card 3",
          description: "Description 3",
        },
        {
          title: "Card 1",
          description: "Description 1",
        },
        {
          title: "Card 2",
          description: "Description 2",
        },
        {
          title: "Card 3",
          description: "Description 3",
        },
      ],
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
  }

  resize = () => {
    this.setState({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight
    });
  };

  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  };

  handleClickCollapse = e => {
    console.log(e);
    this.setState({sidebarAnimation: false})
    if (!this.state.collapsed) {
      this.setState({
        collapsed: true,
        sidebarWidth: 2,
        containerWidth: 22,
      });
    } else {
      this.setState({
        collapsed: false,
        sidebarWidth: 4,
        containerWidth: 20,
      });
    }
    this.setState({sidebarAnimation: true})
  };

  getItemsWidth = () => {
    const {screenWidth} = this.state;
    const itemsNumberPerRow = Math.floor((screenWidth / 270));
    return Math.floor(24 / itemsNumberPerRow);
  };

  render() {
    const {theme, sidebarWidth, containerWidth, navbarWidth, screenHeight, sidebarAnimation} = this.state;
    return (
      <div>
        <Row>
          <Col span={navbarWidth}>
            <Navbar theme={theme}/>
            <Switch
              className="button--theme-changer"
              checked={theme === 'dark'}
              onChange={this.changeTheme}
              checkedChildren="Dark"
              unCheckedChildren="Light"
            />
          </Col>
        </Row>

        <Row>
          <Col xs={sidebarWidth}>
            <Fade left={sidebarAnimation}>
              <Sidebar theme={theme} handleClickCollapse={this.handleClickCollapse} collapsed={this.state.collapsed}
                       height={screenHeight}/>
            </Fade>
          </Col>
          <Col xs={containerWidth}>
            <div className="page-container--list-item-container">
                {this.state.card.map((data, index) => {
                  return (
                    <Fade key={data.id} top duration={2000}>
                      <Col xs={this.getItemsWidth()}>
                        <div key={index} className="page-container--list-item">
                          <List/>
                        </div>
                      </Col>
                    </Fade>
                  );
                })}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default PageContainer;
