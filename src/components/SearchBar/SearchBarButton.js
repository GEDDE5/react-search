import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const SearchBarButton = ({ children }) => (
    <button
      className='search-bar__button'
      type='button'>
      {children}
    </button>
)

SearchBarButton.propTypes = {
  children: PropTypes.node.isRequired
}

export default SearchBarButton
