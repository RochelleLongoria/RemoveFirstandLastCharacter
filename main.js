// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.


var string = "Jazlynn"


function removeChar(str){
    // Check if the value has more than two characters, if it doesn't have more than two characters ignore.
    if(str.length < 2){
        return str
    }
    let i = 1
    let result = ""
    // Create a while loop to iterate through the string.
        while(i < str.length -1){
            result += str[i]
            i++;
        }
        return result

};

console.log(removeChar(string))

