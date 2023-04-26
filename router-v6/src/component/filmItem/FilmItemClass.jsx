import React, {Component} from 'react'
import WithRouter from './WithRouter'

class FilmItem extends Component {
  
  render() {
    return (
      <li onClick={() => this.handleClick(this.props.filmId)}>
        {this.props.name}
      </li>
    )
  }

  handleClick = (id) => {
    // console.log(id, this.props)
    this.props.history.push(`/detail/${id}`)
  }
}

export default WithRouter(FilmItem)
