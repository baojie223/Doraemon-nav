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

const data = [
  <a
    href="https://github.com/baojie223"
    target="_blank"
    rel="noopener noreferrer"
  >
    我的github仓库
  </a>,
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.'
]

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1410407_zg0ls4yrvb.js'
})
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
              dataSource={data}
              renderItem={item => (
                <List.Item>
                  {item}
                </List.Item>
              )}
            />
          </Col>
          <Col span={8} style={{ textAlign: 'center' }}>
            <IconFont type="icon-jiqimao" style={{ fontSize: 300 }}></IconFont>
          </Col>
          <Col span={6}>
            <List
              header={<div>Header</div>}
              footer={<div>Footer</div>}
              bordered
              dataSource={data}
              renderItem={item => (
                <List.Item>
                  <Typography.Text mark>[ITEM]</Typography.Text> {item}
                </List.Item>
              )}
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
              <Option value="google">{searchMap['google'].icon }谷歌</Option>
              <Option value="baidu">{searchMap['baidu'].icon}百度</Option>
              <Option value="github">{searchMap['github'].icon}github</Option>
              <Option value="juejin">{searchMap['juejin'].icon}掘金</Option>
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
