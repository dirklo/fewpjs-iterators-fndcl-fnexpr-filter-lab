// Code your solution here
function findMatching(drivers, string) {
    return drivers.filter((driver) => driver.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(drivers, search) {
    return drivers.filter((driver) => driver.slice(0, search.length).toLowerCase() === search.toLowerCase())
}

function matchName(drivers, name) {
    return drivers.filter((driver) => driver.name.toLowerCase() === name.toLowerCase())
}