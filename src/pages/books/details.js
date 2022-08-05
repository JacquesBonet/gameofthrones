import React from 'react'
import PropTypes from 'prop-types'
import { Drawer } from 'antd'
import { useQuery } from '@tanstack/react-query'
import { List } from '../characters/list'
import { Details as MyDetails } from '../../components/book/details'

export const Details = ({ id }) => {
   const { isLoading, error, data } = useQuery(['book', id], () =>
      fetch(`https://anapioficeandfire.com/api/books/${id}`).then(res => res.json())
   )

   if (isLoading) return

   if (error) return alert(`An error has occurred: ${error.message}`)

   return (
      <Drawer title={data?.name} width={720} onClose={() => window.history.back()} visible={true}>
         <div style={{ margin: 10 }}>
            <MyDetails data={data} />
         </div>
         <List data={data.characters} />
      </Drawer>
   )
}

Details.propTypes = {
   id: PropTypes.string,
}
