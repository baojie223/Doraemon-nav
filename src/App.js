import React from 'react'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import MySearch from './components/Search'

function AppRouter() {
  return (
    // <Router>
    //   <div>
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/about/">About</Link>
    //         </li>
    //         <li>
    //           <Link to="/users/">Users</Link>
    //         </li>
    //         <li>
    //           <a href="http://www.baidu.com" target="_blank" rel="noopener noreferrer">百度</a>
    //         </li>
    //       </ul>
    //     </nav>

    //     <Route path="/" exact component={Index} />
    //     <Route path="/about/" component={About} />
    //     <Route path="/users/" component={Users} />
    //   </div>
    // </Router>
    <MySearch></MySearch>
  )
}

export default AppRouter
