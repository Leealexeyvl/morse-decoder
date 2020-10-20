const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
    function decode(expr) {
        let currentletter = '';
        let result = [];
        for (let i = 0; i < expr.length; i += 10) {
    
        let currentCode = expr.substring(i, i + 10);
    
        if (currentCode == '**********') {
                result.push(' ');
        } else {
    
                    for (let j = 0; j <= currentCode.length; j += 2) {
                        if (currentCode.substring(j, j + 2) == '10') {
                            currentletter += '.';
                        }  else if (currentCode.substring(j, j + 2) == '11') {
                            currentletter += '-';
                        } else {
                            currentletter += '';
                        }
                    }
                    result.push(MORSE_TABLE[currentletter]);
                    currentletter = '';
                }
            }
            return result.join('');
    }


module.exports = {
    decode
}