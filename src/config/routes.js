import React, { Component } from 'react'
import Home from '../pages/home/home'
import {Route} from 'react-router-dom'
import About from '../pages/about/about'

export default class Routes extends Component {
  static pageTitle = 'over-react-pages'
  static links = {
    home: `/${Routes.pageTitle}/`,
    about: `/${Routes.pageTitle}/about`
  }
  render() {
    return (
      <span>
        <Route exact path={`${Routes.links.home}`} component={Home} />
        <Route exact path={`${Routes.links.about}`} component={About} />
      </span>
    )
  }
}
