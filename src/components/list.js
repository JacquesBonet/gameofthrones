import React from 'react'
import { Col, Row } from 'antd'
import { responsiveMainColProps } from '../utils/responsive'
import PropTypes from 'prop-types'
import { useQueries } from '@tanstack/react-query'

export const List = ({ data, Element, kind, responsiveColProps = responsiveMainColProps }) => {
   const dataQueries = useQueries({
      queries: data.map(elem => {
         return {
            queryKey: [kind, elem],
            queryFn: () => fetch(elem).then(res => res.json()),
         }
      })
   })
   return (
      <div style={{ margin: 10 }}>
         <Row gutter={[16, 16]}>
            {
               dataQueries.map(({data, isLoading, error}, idx) => {
                  if (isLoading) return 'is loading ....'

                  if (error) return alert(`An error has occurred: ${error.message}`)

                  if (data instanceof Array)
                     return data.map( (elem, idx2) => (
                        <Col {...responsiveColProps} key={idx*1000 + idx2}>
                           <Element data = { elem } />
                        </Col>
                     ))
                  else
                     return (
                        <Col {...responsiveColProps} key={idx}>
                           <Element data = { data } />
                        </Col>
                     )
               })
            }
         </Row>
      </div>
   )
}

List.propTypes = {
   data: PropTypes.arrayOf(PropTypes.string).isRequired,
   Element: PropTypes.func.isRequired,
   kind: PropTypes.string.isRequired,
   responsiveColProps: PropTypes.object
}
