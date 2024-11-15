const latinToMorse = {

    'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

// let a, b;

// a = latinToMorse.A;
// b = latinToMorse.B;


function getLatinCharacterList (message){

tableau = ["H", "e", "l", "l", "o", ",", " ", "w", "o", "r", "l", "d"]

//console.log(tableau)

return tableau

}


getLatinCharacterList()


function translateLatinCharacter (monAlphabet){

//monAlphabet.lettre = "";

// let a, b

// a = latinToMorse.A;
// b = latinToMorse.B;

const A = latinToMorse["A"];

//console.log(A)

return A

}

translateLatinCharacter()


function encode(latin,morse){

latin = getLatinCharacterList(tableau)
morse = translateLatinCharacter({latinToMorse})


console.log(latin,morse)


}

encode()