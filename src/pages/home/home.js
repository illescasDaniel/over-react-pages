import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import logo from '../../resources/logo.svg'
import styles from './home.sass'

export default class Home extends Component {
  state = {
    recipes: ['']
  }
  async componentDidMount() {
    // http://www.recipepuppy.com/about/api/
    // This is just a test
    const corsAnywhere = "https://cors-anywhere.herokuapp.com/"
    fetch(corsAnywhere+"http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3")
      .then(r => r.json())
      .then(recipes => {
        this.setState({
          recipes: recipes.results.map(recipe => recipe.title)
        })
      })
  }
  render() {
    return (
      <div>
        <Button color="success">
          <FontAwesomeIcon icon={faCoffee} /> Touch me!
        </Button>
        <p className={styles.testParagraph}>hi!!</p>
        <img className={styles.reactLogo} src={logo} alt="logo" />
        <p>testing api fetch from: <a href="http://www.recipepuppy.com/about/api/">recipes</a></p>
        <p>{this.state.recipes}</p>
      </div>
    )
  }
}
