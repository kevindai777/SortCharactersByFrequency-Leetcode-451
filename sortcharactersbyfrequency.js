//Objective is to sort a string based on the frequency of its characters, from
//most frequent in the front and least in the back

let string = 'tree'


//O(n + klogk) solution that finds the frequencies of the characters in the
//string first via a hashmap and then sorts those frequencies. Finally, we
//finish up by iterating over the sorted frequencies and create a new string.

let map = {}

for (let i = 0; i < string.length; i++) {
    if (map[string.charAt(i)] === undefined) {
        map[string.charAt(i)] = 1
    } else {
        map[string.charAt(i)]++
    }
}

let sorted = Object.entries(map).sort((a,b) => {
    return b[1] - a[1]
})

let newString = ''

for (let i = 0; i < sorted.length; i++) {
    while (sorted[i][1] > 0) {
        newString += sorted[i][0]
        sorted[i][1]--
    }
}

return newString