import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { List as MyList } from '../../components/list'
import { Element } from '../../components/book/element'

export const List = () => {
   const { isLoading, error, data } = useQuery(['books'], () =>
      fetch('https://anapioficeandfire.com/api/books').then(res => res.json())
   )

   if (isLoading) return

   if (error) return alert(`An error has occurred: ${error.message}`)

   return <MyList data={data} Element={Element} />
}

List.propTypes = {}
