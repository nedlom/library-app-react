import React, { Component } from "react";
import { Link } from "react-router-dom"
import { connect } from "react-redux"

class Dropdown extends Component {
  handleChange = event => { 
    this.props.setGenreId(event.target.value)
  }

  render() {
    const options = this.props.genres.map(genre => (
      <option key={genre.id} value={genre.id}>{genre.name}</option>
    )) 

    return (
      <div className="genre-select-div">
        Select A Genre: 
        <select className="genre-select" onChange={this.handleChange}>
          <option value="">Choose...</option>
          <option value="">All</option>
          {options}
        </select>
      </div>
    )
  }
}

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ""
    }
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.setTitle(this.state.value)
    this.setState({
      value: ""
    })
  }

  render() {
    return (
      <form className="search" onSubmit={this.handleSubmit}>
        Search For A Title: 
        <input className="title-input" type="text" value={this.state.value} onChange={this.handleChange}/>
        <input className="title-input" type="submit" value="Search" />
      </form>
    )
  }
}

class SortUnsort extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    this.props.setBooks()
  }

  render() {
    return (
      <button onClick={this.handleClick}>Sort/Unsort</button>
    )
  }
}

class BooksIndex extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: "",
      books: this.props.books.concat([]),
      sort: 'regular',
      genreId: "", 
    }
  }

  setGenreId = id => {
    this.setState({
      genreId: id
    })
  }

  setTitle = title => {
    this.setState({
      title: title
    })
  }

  setBooks = () => {
    this.setState(state => {
      if (state.sort === "regular") {
        return ({
          books: this.state.books.sort((a, b) => a.title.localeCompare(b.title)),
          sort: "alphabetical"
        }) 
      } else {
        return ({
          books: this.props.books.concat([]),
          sort: "regular"
        })
      }
    })
  }

  render() {
    const book = this.props.books.find(book => book.title === this.state.title)

    let books 
    let genre
    if (this.state.genreId === "") {
      books = this.props.books
    } else {
      genre = this.props.genres.find(genre => genre.id === parseInt(this.state.genreId))
      books = this.props.books.filter(book => {
        return book.genre_id === parseInt(this.state.genreId)
      })
    }
    const genreBookDivs = books.map(book => <div key={book.id}>{book.title}</div>)

    const sortUnsortBookDivs = this.state.books.map(book => <div key={book.id}>{book.title}</div>)
    
    return (
      <div className="search-sort">
        
        <div className="fields">
          <b>Search And Sort Functions</b>
          <hr />
          <Form setTitle={this.setTitle} />
          <Dropdown genres={this.props.genres} setGenreId={this.setGenreId} />
          <SortUnsort setBooks={this.setBooks} />
        </div>

        <div className="searched-book">
            <b>Searched: </b>{book ? book.title : "None"}
        </div>
       
        <div className="selected-books">
          <div className="book-index-genre-name">
            <b>Selected: </b>{genre ? genre.name : "All"}
          </div>
          {genreBookDivs}
        </div>

        <div className="selected-books">
          <div className="book-index-genre-name">
            <b>Sorted/Unsorted</b> 
          </div>
          {sortUnsortBookDivs}
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return({
    books: state.books,
    genres: state.genres
  })
}

export default connect(mapStateToProps)(BooksIndex)