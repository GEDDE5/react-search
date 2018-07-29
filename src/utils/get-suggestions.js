import FuzzySet from 'fuzzyset.js'

const getSuggestions = (val, allSugestions, fuzzySearch) => {
  // Escape user input
  const escapedVal = val.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

  // Return empty array if escaped val is empty
  if (escapedVal === '') {
    return []
  }

  if (fuzzySearch === false) {
    // Declare regex expression
    const regex = new RegExp(escapedVal, 'i')

    // Return matching suggestions
    return allSugestions.filter(suggestion => regex.test(suggestion))
  }

  // Fuzzy mode
  const all = FuzzySet(allSugestions, false)
  const minMatchScore = 0.2
  const suggestions = all.get(escapedVal, null, minMatchScore)

  if (suggestions === null) {
    return []
  }

  return suggestions.map(suggestion => suggestion[1])
}

export default getSuggestions
