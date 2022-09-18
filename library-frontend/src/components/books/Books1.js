import React, { Component } from "react";
import { Link } from 'react-router-dom';
// import BookAlphabetize from "./BooksAlphabetize";


class Books1 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      checked: []
    }
  }

  handleCheck = id => {
    // debugger
    if (this.state.checked.includes(id)) {
      const index = this.state.checked.indexOf(id)
      this.setState(state => ({
        checked: state.checked.splice(index, 1)
      }))
     } else {
      this.setState(state => ({
        checked: state.checked.concat([id])
      }))
    }
    console.log(this.state.checked)
  }

  makeLinks = books => {
    return books.map(book => {
      return (
        <div key={book.id}>

          <input 
            type="checkbox" 
            onChange={() => this.handleCheck(book.id)}>
          </input>

          <Link to={`/books/${book.id}`}>
            {book.title}
          </Link>

        </div>
      )
    })
  }
  

  render() {
    return (
      <div>
        {this.makeLinks(this.props.books)}
      </div>
      // <BookAlphabetize books={this.props.books} />
    )
  }


}

export default Books1








// import React, {useState } from "react";
// import { Link } from "react-router-dom"
// import BookAlphabetize from "./BooksAlphabetize";

// const Books = ({ books, deleteBook }) => {

//   const [checks, setChecks] = useState([])

//   if (books.length === 0) {
//     return (
//       <div className="no-books">This Genre Currently Has No Books</div>
//     )
//   }

//   const alpha = Array.from(Array(26)).map((e, i) => i + 65);
//   const alphabet = alpha.map(num => String.fromCharCode(num))
//   const extendedAlphabet = ["Miscellaneous"].concat(alphabet)
//   const alphaObject = {}
//   extendedAlphabet.forEach(letter => alphaObject[letter] = [])

//   books.forEach(book => {
//     const firstLetter = book.title.split("")[0].toLocaleUpperCase()
//     if (alphabet.includes(firstLetter)) {

//       alphaObject[firstLetter].push(book)
//     } else {
//       alphaObject["Miscellaneous"].push(book)
//     }
//   })

//   const handleClick = () => {
//     console.log(checks)
//     checks.forEach(id => deleteBook(id))
//   }

//   const handleCheck = id => {
//     if (checks.includes(id)) {
//       console.log("here")
//       const index = checks.indexOf(id)
//       checks.splice(index, 1)
//       setChecks(checks)
//     } else {
//       console.log("now here")
//       setChecks(checks.concat([id]))
//     }
//   }

//   const makeLinks = array => {
//     return array.map(book => {
//       return (
//         <div key={book.id}>

//           <input 
//             type="checkbox" 
//             onChange={() => handleCheck(book.id)}>
//           </input>

//           <Link to={`/books/${book.id}`}>
//             {book.title}
//           </Link>

//         </div>
//       )
//     })
//   }

//   const alphaDivs = extendedAlphabet.map(a => {
//     return (
//       <div key={a} className="test">
//         {a}
//         <div className="subtest">
//           {makeLinks(alphaObject[a])}
//         </div>
//       </div>
//     )
//   })

//   return (
//     <div>
//       <button onClick={handleClick}>Delete Checked</button>
//       {/* <BookAlphabetize books={books} handleCheck={handleCheck} /> */}
//       {alphaDivs}
//     </div>
//   )
// }

// export default Books