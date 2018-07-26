import React from 'react'
import PropTypes from 'prop-types'

const SearchBar = ({ children }) => (
  <div className='search-bar'>
    {children}
  </div>
)

SearchBar.propTypes = {
  children: PropTypes.node.isRequired
}

export default SearchBar
