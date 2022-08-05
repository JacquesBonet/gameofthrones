import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { Element as MyElement } from '../../components/characters/element'
import PropTypes from 'prop-types'

export const Element = ({ data }) => {
   const { isLoading, error, data: myData } = useQuery(['character', data], () => fetch(data).then(res => res.json()))

   if (isLoading) return 'is loading ....'

   if (error) return alert(`An error has occurred: ${error.message}`)

   return <MyElement data={myData} />
}

Element.propTypes = {
   data: PropTypes.string.isRequired,
}
