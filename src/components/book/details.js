import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input } from 'antd'

export const Details = ({ data, children }) => (
   <>
      <Form labelCol={{ span: 6 }} wrapperCol={{ span: 14 }} style={{ marginTop: '50px' }}>
         <Form.Item key="numberOfPages" label="Number of pages" name="numberOfPages">
            <Input defaultValue={data.numberOfPages} />
         </Form.Item>
         <Form.Item key="publisher" label="Publisher" name="publisher">
            <Input defaultValue={data.publisher} />
         </Form.Item>
         <Form.Item key="country" label="Country" name="country">
            <Input defaultValue={data.country} />
         </Form.Item>
         <Form.Item key="characters" label="Characters" name="characters" />
      </Form>
      {children}
   </>
)

Details.propTypes = {
   data: PropTypes.shape({
      characters: PropTypes.array,
      country: PropTypes.string,
      name: PropTypes.string.isRequired,
      numberOfPages: PropTypes.number.isRequired,
      publisher: PropTypes.string,
   }),
}
