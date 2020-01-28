module.exports = function parseStryngAsArray(ArrayAsStryng){
    return ArrayAsStryng.split(',').map(tech => tech.trim())
}