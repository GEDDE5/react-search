import React, { Component } from 'react'

import autocomplete from 'globals/autocomplete'
import history from 'globals/history'

import SearchBar from 'components/SearchBar/SearchBar'
import SearchBarInput from 'components/SearchBar/SearchBarInput'
import SearchBarButton from 'components/SearchBar/SearchBarButton'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

// eslint-disable-next-line
class App extends Component {
  render() {
    return (
      <div className='page'>
        <header className='header'>
          <h1 className='title'>
            react-search-bar
          </h1>
        </header>
        <div className='data'>
          <div className='data__set'>
            <h2 className='data__title'>
              Search history items
            </h2>
            <ul className='data__list'>
              {
                history.map((item, i) => (
                  // eslint-disable-next-line
                  <li key={i} className='data__item'>{item}</li>
                ))
              }
            </ul>
          </div>
          <div className='data__set'>
            <h2 className='data__title'>
              Autocomplete items
            </h2>
            <ul className='data__list'>
              {
                autocomplete.map((item, i) => (
                  // eslint-disable-next-line
                  <li key={i} className='data__item'>{item}</li>
                ))
              }
            </ul>
          </div>
        </div>
        <SearchBar>
          <SearchBarInput />
          <SearchBarButton>
            <FontAwesomeIcon
              icon={faSearch}
              size='sm' />
          </SearchBarButton>
        </SearchBar>
      </div>
    )
  }
}

export default App
