module.exports = function toReadable (number) {

    const num = String(number).split('')

    const wordCount = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    }

    if (num.length === 1) {
        return wordCount[num[0]]
    }

    else if (num.length === 2) {
        if (number % 10 == 0) {
            return wordCount[number]
        }
        else if (number < 20 ) {
            return wordCount[number]
        }
        else {
            return wordCount[ number - num[1]] + ' ' + wordCount[num[1]]
        }
    }

    else if (num.length === 3) {
        if (number % 10 == 0 ) {
            if (number % 100 == 0) {
                return wordCount[num[0]] + ' hundred'
            }
            else {
                return wordCount[num[0]] + ' hundred ' + wordCount[ num[1] * 10 ]
            }
        }
        else {
            if (number % 100 < 10) {
                return wordCount[num[0]] + ' hundred ' + wordCount[ num[2]]
            }
            else if (number % 100 > 10 && number % 100 < 20) {
                return wordCount[num[0]] + ' hundred ' + wordCount[ Number(num[2]) + 10]
            }

            return wordCount[num[0]] + ' hundred ' + wordCount[num[1] * 10] + ' ' + wordCount[num[2]]
        }

    }
}


