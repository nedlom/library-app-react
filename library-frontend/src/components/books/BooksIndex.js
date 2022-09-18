import React, { Component } from "react";
import { Link } from "react-router-dom"
import { connect } from "react-redux"


class Dropdown extends Component {
  constructor(props) {
    super(props)
  }

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
      // value: 'select',
      title: "",
      books: this.props.books.concat([]),
      sort: 'regular',
      genreId: "", 
      inputTitle: "",
      submitTitle: ""
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
    // console.log(this.props.books)
    // if(this.state.sort === "regular") {
    //   this.setState({
    //     book: this.state.books.sort((a, b) => a.title.localeCompare(b.title)),
    //     sort: "alphabetical"
    //   })
    //   console.log(this.props.books)
    // } else {
    //   debugger
    //   this.setState({
    //     book: this.props.books.concat([]),
    //     sort: "regular"
    //   })
    // }
  }
  
  // selectChange = event => {
  //   console.log("here")
  //   this.setState({
  //     genreId: event.target.value
  //   })
  // }

  

  // genreDropdown = () => {
  //   const options = this.props.genres.map(genre => (
  //     <option key={genre.id} value={genre.id}>{genre.name}</option>
  //   )) 

  //   return (
  //     <div className="genre-select-div">
  //       Select A Genre: 
  //       <select className="genre-select" onChange={this.selectChange} value={this.state.value}>
  //         <option value="">Choose...</option>
  //         <option value="">All</option>
  //         {options}
  //       </select>
  //     </div>
  //   )
  // }

  // handleChange = event => {
  //   this.setState({
  //     title: event.target.value
  //   })
  // } 

  // handleSubmit = event => {
  //   // genre
  // }

  // form = () => {
  //   return (
  //     <form className="search" onSubmit={this.handleSubmit}>
  //       Search For A Title: 
  //       <input className="title-input" type="text" value={this.state.inputTitle} onChange={this.handleChange}/>
  //       <input className="title-input" type="submit" value="Search" />
  //     </form>
  //   )
  // }

  // alphabetize = () => {
  //   return <button className="alpha-button">Alphabetize</button>
  // }

  render() {
    console.log("Render: ", this.state.sort)
    console.log("Render: ", this.props.books)
   
    const book = this.props.books.find(book => book.title === this.state.title)
    const sortedBooks = this.state.books
    const sortedBooksDivs = sortedBooks.map(book => <div key={book.id}>{book.title}</div>)



    // let title 
    // if (this.state.title !== "") {
    //   const book = this.props.books.find(book => book.title === this.state.title)
    //   title = book.title
    // } else {
    //   debugger
    //   title = ""
    // }

    let books 
    let genre
    if (this.state.genreId === "") {
      console.log("no genreId")
      books = this.props.books
    } else {
      console.log("genreId")
      genre = this.props.genres.find(genre => genre.id === parseInt(this.state.genreId))
      books = this.props.books.filter(book => {
        return book.genre_id === parseInt(this.state.genreId)
      })
    }

    const bookDivs = books.map(book => <div key={book.id}>{book.title}</div>)
    
    return (
      
      
      <div className="search-sort">
        
        <div className="fields">
          <Dropdown genres={this.props.genres} setGenreId={this.setGenreId} />
          <Form setTitle={this.setTitle} />
          <SortUnsort setBooks={this.setBooks} />
          {/* {this.genreDropdown()} */}

          {/* {this.form()} */}


          {/* {this.alphabetize()} */}
        </div>
       
        <div className="selected-books">
          <div className="book-index-genre-name">
            <b>Selected Books: {genre ? genre.name : "All"}</b> 
          </div>
          {bookDivs}
        </div>

        <div className="searched-book">
            <b>Searched Book</b> : {book ? book.title : null}
        </div>

        <div className="selected-books">
          <div className="book-index-genre-name">
            <b>Sorted Books</b> 
          </div>
          {sortedBooksDivs}
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