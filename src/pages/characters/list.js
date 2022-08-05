import React from 'react'
import PropTypes from 'prop-types'
import { Element } from './element'
import { List as MyList } from '../../components/list'
import { responsiveDetailsColProps } from '../../utils/responsive'

export const List = ({ data }) => (
   <MyList data={data} Element={Element} responsiveColProps={responsiveDetailsColProps} />
)

List.propTypes = {
   data: PropTypes.array,
}
