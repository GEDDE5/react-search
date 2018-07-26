const getSuggestions = (val, allSugestions) => {
  // Escapes user input
  const escapedVal = val.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

  // Return empty array if escaped val is empty
  if (escapedVal === '') {
    return []
  }

  // Declare regex expression
  const regex = new RegExp(escapedVal, 'i')

  // Return matching suggestions
  return allSugestions.filter(suggestion => regex.test(suggestion))
}

export default getSuggestions
