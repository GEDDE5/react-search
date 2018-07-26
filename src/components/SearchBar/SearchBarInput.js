import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import autocomplete from 'globals/autocomplete'
import history from 'globals/history'

import getSuggestions from 'utils/get-suggestions'

class SearchBarInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      clicked: false,
      suggestions: [],
      value: ''
    }
  }

  handleBlur = () => this.setState({ clicked: false })

  handleClick = () => this.setState({ clicked: true })

  handleChange = event => this.setState({ value: event.target.value })

  handleKeyUp = event => {
    const { value } = event.target
    const suggestions = getSuggestions(value, autocomplete)
    this.setState({ suggestions })
  }

  render() {
    const {
      clicked,
      suggestions,
      value
    } = this.state

    return (
      <div className='search-bar__input-container'>
        <input
          className='search-bar__input'
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          onClick={this.handleClick}
          onKeyUp={this.handleKeyUp}
          value={value} />
        {
          clicked && value === ''
            && (
              <div className='search-bar__dropdown'>
                  {
                    history.map((item, i) => (
                      // eslint-disable-next-line
                      <div key={i} className='search-bar__dropdown-item'>
                        {item}
                      </div>
                    ))
                  }
              </div>
            )
        }
        {
          clicked && value !== '' && suggestions
            && (
              <div className='search-bar__dropdown'>
                {
                  suggestions.map((suggestion, i) => (
                    // eslint-disable-next-line
                    <div key={i} className='search-bar__dropdown-item'>
                      {suggestion}
                    </div>
                  ))
                }
              </div>
            )
        }
      </div>
    )
  }
}

SearchBarInput.propTypes = {
}

export default SearchBarInput
