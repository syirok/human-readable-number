module.exports = function toReadable (number) {
    if (number == 0) {return "zero";}
    let result = "";
    let singles = number%10;
    number = Math.trunc(number/10);
    let tens = number%10;
    number = Math.trunc(number/10);
    let hundreds = number%10;
    number = Math.trunc(number/10);

    switch (hundreds) {
        case 0: result += ""; break;
        case 1: result += "one hundred"; break;
        case 2: result += "two hundred"; break;
        case 3: result += "three hundred"; break;
        case 4: result += "four hundred"; break;
        case 5: result += "five hundred"; break;
        case 6: result += "six hundred"; break;
        case 7: result += "seven hundred"; break;
        case 8: result += "eight hundred"; break;
        case 9: result += "nine hundred"; break;
    }

    if (result !== "") {result += " "}

    switch (tens) {
        case 0: result += ""; break;
        case 1: singles = tens*10+singles; break;
        case 2: result += "twenty"; break;
        case 3: result += "thirty"; break;
        case 4: result += "forty"; break;
        case 5: result += "fifty"; break;
        case 6: result += "sixty"; break;
        case 7: result += "seventy"; break;
        case 8: result += "eighty"; break;
        case 9: result += "ninety"; break;
    }

    if (result !== "") {result += " "}

    switch (singles) {
        case 0: result += ""; break;
        case 1: result += "one"; break;
        case 2: result += "two"; break;
        case 3: result += "three"; break;
        case 4: result += "four"; break;
        case 5: result += "five"; break;
        case 6: result += "six"; break;
        case 7: result += "seven"; break;
        case 8: result += "eight"; break;
        case 9: result += "nine"; break;
        case 10: result += "ten"; break;
        case 11: result += "eleven"; break;
        case 12: result += "twelve"; break;
        case 13: result += "thirteen"; break;
        case 14: result += "fourteen"; break;
        case 15: result += "fifteen"; break;
        case 16: result += "sixteen"; break;
        case 17: result += "seventeen"; break;
        case 18: result += "eighteen"; break;
        case 19: result += "nineteen"; break;
    }
    
    return result.replace(/\s+/g, ' ').trim();
  
}
