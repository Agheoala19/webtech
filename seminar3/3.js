//Example

const formatString = (s, ...format) => {
    let modified = s
    for (let i = 0; i < format.length; i++) {
        if (modified.indexOf('{' + i + '}') !== - 1) {
            modified = modified.replace('{' + i + '}', format[i])
        }
    }
    return modified
}

console.log(formatString("this is a {0} string and we've {1} it", 'nice', 'formatted'))

//Exercise

const formattingString = (string, ...format) => {
    let modified = string
    for (let i = 0; i < format.length; i++) {
        if (modified.indexOf('{' + i + '}') !== - 1) {
            modified = modified.replace('{' + i + '}', format[i])
        }
    }
}

console.log(formatString("un {0} este {1}", 'calut', 'dragut'))
