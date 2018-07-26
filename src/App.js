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
  state = {
    fuzzySearch: false
  }

  handleClick = event => this.setState({ fuzzySearch: event.target.checked })

  render() {
    const {
      fuzzySearch
    } = this.state

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
          <SearchBarInput fuzzySearch={fuzzySearch} />
          <SearchBarButton>
            <FontAwesomeIcon
              icon={faSearch}
              size='sm' />
          </SearchBarButton>
        </SearchBar>
        <aside className='fuzzy-toggle'>
          <input
            className='fuzzy-toggle__checkbox'
            onClick={this.handleClick}
            type='checkbox' />
          <span className='fuzzy-toggle__text'>
            Fuzzy match
          </span>
        </aside>
      </div>
    )
  }
}

export default App
