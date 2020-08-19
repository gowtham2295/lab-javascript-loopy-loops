// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.
var prograd1="Gowtham";
var prograd2="Gowtham Sambhoju";
console.log("The drivers name is" + prograd1);
console.log("The navigators name is"+prograd2);
if(prograd1.length>prograd2.length)
console.log("The drivers has the longest name, it has "+prograd1.length+"characters"+prograd1);
else
console.log("The navigators has the longest name, it has "+prograd2.length+"characters"+prograd2);
// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
var temp="aAeEiIoOuU"
for(var i=0;i<prograd1.length;i++)
{
    for(var j=0;j<prograd1.length;j++)
    {
if(prograd1[i] == temp[j])
{
    console.log(prograd1[i]+" "+i);
}
}
}
for(var i=0;i<prograd2.length;i++)
{
    for(var j=0;j<prograd2.length;j++)
    {
if(prograd2[i] == temp[j])
{
    console.log(prograd2[i]+" "+i);
}
}
}
// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5. 

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
temp1="abcdefghijklmnopqrstuvwxyz";
temp2="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
count=0;count1=0,count2=0,count3=0;
for(var i=0;i<prograd1.length;i++)
{
    for(var j=0;j<temp1.length;j++)
    {
if(prograd1[i] == temp1[j])
{
      count++;
}
if(prograd1[i] == temp2[j]){
    count1++
}
}
}
console.log(count);
console.log(count1);
for(var i=0;i<prograd2.length;i++)
{
    for(var j=0;j<temp1.length;j++)
    {
if(prograd2[i] == temp1[j])
{
      count2++;
}
if(prograd2[i] == temp2[j]){
    count3++;
}
}
}
console.log(count2);
console.log(count3);


// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
for(var i=prograd1.length;i>=0;i--){
    console.log(prograd1[i]);
   // document.write(prograd1[i]);
}
// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 
