import React, { Component } from 'react'

class Book extends Component {
  render() {

    // We'll import the moveBook() method from BookShelf component via props

    const { title, authors, thumbnail, shelf, id, moveBook } = this.props

    return (

      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 'url(' + thumbnail + ')' }}></div>
          <div className="book-shelf-changer">
            <select onChange={event => {moveBook({id}, event.target.value)}} value={shelf}>
              <option key={0} disabled>Move to...</option>
              <option key={1} value="currentlyReading">Currently Reading</option>
              <option key={2} value="wantToRead">Want to Read</option>
              <option key={3} value="read">Read</option>
              <option key={4} value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>

    )
  }
}

export default Book
