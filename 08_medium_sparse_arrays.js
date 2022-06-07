function matchingStrings(strings, queries) {
    
    return queries.map(x => strings.filter(y => y === x).length )
}
