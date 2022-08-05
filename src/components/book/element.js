import React from 'react'
import { Link } from 'wouter'
import PropTypes from 'prop-types'
import { Card } from 'antd'

export const Element = ({ data }) => (
   <Link href={`/${data.url.slice(data.url.lastIndexOf('/') + 1)}`}>
      <Card key={data.name} hoverable style={{ borderRadius: 5, padding: 2, cursor: 'pointer' }} title={data.name}>
         <p>isbn: ${data.isbn}</p>
         <p>Authors: ${data.authors.join()}</p>
      </Card>
   </Link>
)

Element.propTypes = {
   data: PropTypes.shape({
      authors: PropTypes.array,
      isbn: PropTypes.string,
      name: PropTypes.string,
      url: PropTypes.string,
   }),
}
