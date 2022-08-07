import React from 'react'
import PropTypes from 'prop-types'
import { Element } from '../../components/characters/element'
import { List as MyList } from '../../components/list'
import { responsiveDetailsColProps } from '../../utils/responsive'

export const List = ({ data }) => (
   <MyList data={data} Element={Element} kind='characters' responsiveColProps={responsiveDetailsColProps} />
)

List.propTypes = {
   data: PropTypes.array,
}
