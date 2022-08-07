import React from 'react'
import { List as MyList } from '../../components/list'
import { Element } from '../../components/book/element'

export const List = () => {
   return <MyList data={['https://anapioficeandfire.com/api/books']} Element={Element} kind='books' />
}

List.propTypes = {}
