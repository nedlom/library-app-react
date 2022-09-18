import React, {useState } from "react";

const Books = ({ books, deleteBook }) => {

  const [checks, setChecks] = useState([])

  if (books.length === 0) {
    return (
      <div className="no-books">This Genre Currently Has No Books</div>
    )
  }

  // const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  // const alphabet = alpha.map(num => String.fromCharCode(num))
  // const extendedAlphabet = ["Miscellaneous"].concat(alphabet)
  // const alphaObject = {}
  // extendedAlphabet.forEach(letter => alphaObject[letter] = [])

  // debugger
  // books.forEach(book => {
  //   const firstLetter = book.title.split("")[0].toLocaleUpperCase()
  //   if (alphabet.includes(firstLetter)) {

  //     alphaObject[firstLetter].push(book)
  //   } else {
  //     alphaObject["Miscellaneous"].push(book)
  //   }
  // })

  // const handleClick = () => {
  //   console.log(checks)
  //   checks.forEach(id => deleteBook(id))
  // }

  // const handleCheck = id => {
  //   if (checks.includes(id)) {
  //     console.log("here")
  //     const index = checks.indexOf(id)
  //     checks.splice(index, 1)
  //     setChecks(checks)
  //   } else {
  //     console.log("now here")
  //     setChecks(checks.concat([id]))
  //   }
  // }

  // const makeLinks = array => {
  //   return array.map(book => {
  //     return (
  //       <div key={book.id}>

  //         <input 
  //           type="checkbox" 
  //           onChange={() => handleCheck(book.id)}>
  //         </input>

  //         <Link to={`/books/${book.id}`}>
  //           {book.title}
  //         </Link>

  //       </div>
  //     )
  //   })
  // }

  // const alphaDivs = extendedAlphabet.map(a => {
  //   return (
  //     <div key={a} className="test">
  //       {a}
  //       <div className="subtest">
  //         {makeLinks(alphaObject[a])}
  //       </div>
  //     </div>
  //   )
  // })

  return (
    <div>
      hello
      {/* <button onClick={handleClick}>Delete Checked</button> */}
      {/* <BookAlphabetize books={books} handleCheck={handleCheck} /> */}
      {/* {alphaDivs} */}
    </div>
  )
}

export default Books