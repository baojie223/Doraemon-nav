import React, { Fragment } from 'react'
import {
  Input,
  Row,
  Col,
  Button,
  Icon,
  Menu,
  Select,
  List,
  Typography
} from 'antd'
const { Option } = Select

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1410407_q6zo4fe35y.js'
})

const searchMap = {
  google: {
    url: 'https://www.google.com/search?q=',
    icon: <Icon type="google" />
  },
  baidu: {
    url: 'http://www.baidu.com/s?wd=',
    icon: <Icon type="bold" />
  },
  github: {
    url: 'https://github.com/search?q=',
    icon: <Icon type="github" />
  },
  juejin: {
    url: 'https://juejin.im/search?query=',
    icon: <Icon type="gold" />
  },
  googleTranslate: {
    url:
      'https://translate.google.com/?source=gtx_c#view=home&op=translate&sl=zh-CN&tl=en&text=',
    icon: <IconFont type="icon-fanyi"></IconFont>
  }
}

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
)

let options = ''

// options = searchMap.map(item => {
//   return
// })

const common = [
  <a
    href="https://github.com/baojie223"
    target="_blank"
    rel="noopener noreferrer"
  >
    我的github仓库
  </a>,
  <a
    href="https://ant.design/docs/react/introduce-cn"
    target="_blank"
    rel="noopener noreferrer"
  >
    Ant Design
  </a>
]

const develop = [
  <a href="http://localhost:4200" target="_blank" rel="noopener noreferrer">
    4200端口-云平台
  </a>,
  <a href="http://localhost:8080" target="_blank" rel="noopener noreferrer">
    8080端口-my-vue
  </a>,
  <a href="http://localhost:8001" target="_blank" rel="noopener noreferrer">
    8001端口-牧野
  </a>
]

class MySearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      site: 'google'
    }
  }
  onChange(e) {
    this.setState({
      value: e.target.value
    })
    console.log(e.target.value)
  }
  handleChange(e) {
    console.log(e)
    this.setState({
      site: e
    })
  }
  render() {
    return (
      <Fragment>
        <Row
          type="flex"
          justify="space-between"
          style={{ paddingTop: 64, paddingLeft: 24, paddingRight: 24 }}
        >
          <Col span={6}>
            <List
              header={<div style={{ textAlign: 'center' }}>常用的网站</div>}
              bordered
              dataSource={common}
              renderItem={item => <List.Item>{item}</List.Item>}
            />
          </Col>
          <Col span={8} style={{ textAlign: 'center' }}>
            <IconFont type="icon-jiqimao" style={{ fontSize: 300 }}></IconFont>
          </Col>
          <Col span={6}>
            <List
              header={<div style={{ textAlign: 'center' }}>开发端口</div>}
              bordered
              dataSource={develop}
              renderItem={item => <List.Item>{item}</List.Item>}
            />
          </Col>
        </Row>
        <Row
          type="flex"
          justify="center"
          gutter={16}
          style={{ paddingTop: 32 }}
        >
          <Col span={8} style={{ textAlign: 'right' }}>
            <Select
              size="large"
              defaultValue={this.state.site}
              onChange={this.handleChange.bind(this)}
            >
              <Option value="google">{searchMap['google'].icon}</Option>
              <Option value="baidu">{searchMap['baidu'].icon}</Option>
              <Option value="github">{searchMap['github'].icon}</Option>
              <Option value="juejin">{searchMap['juejin'].icon}</Option>
              <Option value="googleTranslate">
                {searchMap['googleTranslate'].icon}
              </Option>
            </Select>
          </Col>
          <Col span={8}>
            <Input
              placeholder="请输入关键词"
              size="large"
              value={this.state.value}
              onChange={this.onChange.bind(this)}
              onPressEnter={this.onSearch.bind(this)}
            />
          </Col>
          <Col span={8} style={{ textAlign: 'left' }}>
            <Button type="primary" size="large">
              <a
                id={this.state.site}
                href={searchMap[this.state.site].url + this.state.value}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon type="search" />
              </a>
            </Button>
          </Col>
        </Row>
      </Fragment>
    )
  }

  onSearch(e) {
    // console.log(e.target.value)
    // const id = e.target.value
    // setTimeout(() => {
    //   // const id = e.target.value
    //   const btn = document.getElementById(id)
    //   console.log(btn)
    //   // document.getElementById(id).click()
    //   btn.click()
    // }, 0)
  }
}

export default MySearch
