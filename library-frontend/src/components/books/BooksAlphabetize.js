import React from "react";
import BookLinks from "./BookLinks";

const BookAlphabetize = ({ books, handleCheck, deleteBook }) => {
 
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map(num => String.fromCharCode(num))
  const extendedAlphabet = ["Miscellaneous"].concat(alphabet)
  const alphaObject = extendedAlphabet.reduce((a, v) => ({ ...a, [v]: []}), {}) 

  // const alphaObject = {}
  // extendedAlphabet.forEach(letter => alphaObject[letter] = [])

  books.forEach(book => {
    const firstLetter = book.title.split("")[0].toLocaleUpperCase()
    if (alphabet.includes(firstLetter)) {
      alphaObject[firstLetter].push(book)
    } else {
      alphaObject["Miscellaneous"].push(book)
    }
  })

  const handleClick = () => {
    console.log("i'm here")
  }

  const alphaDivs = extendedAlphabet.map(letter => {
    return (
      <div key={letter} className="test">
        {letter}
        <div className="subtest">

          <BookLinks 
            books={alphaObject[letter]} 
            handleCheck={handleCheck} 
            deleteBook={deleteBook} 
          />

        </div>
      </div>
    )
  })

  return (
    <div className="alphabetized-books">
      {console.log("books alpha")}
      <button onClick={handleClick}>Checking</button>
      {alphaDivs}
    </div>
  )
}

export default BookAlphabetize