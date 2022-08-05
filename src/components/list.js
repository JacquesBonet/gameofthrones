import React from 'react'
import { Col, Row } from 'antd'
import { responsiveMainColProps } from '../utils/responsive'
import PropTypes from 'prop-types'

export const List = ({ data, Element, responsiveColProps = responsiveMainColProps }) => (
   <div style={{ margin: 10 }}>
      <Row gutter={[16, 16]}>
         {data.map((doc, idx) => (
            <Col {...responsiveColProps} key={idx}>
               <Element data={doc} />
            </Col>
         ))}
      </Row>
   </div>
)

List.propTypes = {
   data: PropTypes.array.isRequired,
   Element: PropTypes.func.isRequired,
}
