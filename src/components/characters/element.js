import React from 'react'
import { Link } from 'wouter'
import PropTypes from 'prop-types'
import { Card } from 'antd'

export const Element = ({ data }) => (
   <Card key={data.name} style={{ borderRadius: 5, backgroundColor: '#eee', padding: 2 }} title={data.name}>
      <p>Gender: {data.gender}</p>
      <p>Books:</p>
      <p>
         {data.books.map((urlBook, idx) => (
            <Link href={`/${urlBook.slice(urlBook.lastIndexOf('/') + 1)}`} className="active" key={idx}>
               {urlBook.slice(urlBook.lastIndexOf('/') + 1)},&nbsp;&nbsp;&nbsp;
            </Link>
         ))}
      </p>
   </Card>
)

Element.propTypes = {
   data: PropTypes.shape({
      books: PropTypes.array.isRequired,
      gender: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
   }),
}
