// Print out censored comments
// You are writing a comment censoring feature for a young childrens website.

// Below there are three arrays of comments. Go through each comment in each array of those comments, printing out each comment - but replace the banned words with good words. Important: replace both uppercase and lowercase versions, so HECK should be replaced with H**k and heck should be replaced with H**k.

// Word replacements


let array1 = ["Dude, I finally did it - I managed to find a dagger of the Assassin",
 "This darn coffee tastes like hot garbage", "Suriname enable Plastic", 
 "The Football Is Good For Training And Recreational Purposes",
  "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
   "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients It's awesome as FECK",
    "The Apollotech Assassin B340 is an affordable wireless Guylthyulg with reliable connectivity, 12 months battery life and modern design",
     "The Greater hell magic mushroom were-quylthulg jumps over the lazy dog", ]

let array2 = [ "DARN IT ALL TO HECK" ,
"In contrast, there is little theoretical analysis or experimental study of memes." 
,"However, this is not the whole story, and individual differences in susceptibility to particular memes may reflect differences in genotype and development."
 ,"Unfortunately, computer music memes are not replicating and spreading themselves much further than narrow technically specialised audiences." 
 ,"Isn't it simpler to posit that selection is taking place not at the level of groups of individuals, but at the level of memes themselves?" 
 ,"We agree with most of this, although we prefer not to use language that implies that memes are independent living entities." 
 ,"In this way, memes introduce new selectional forces and new kinds of variation into the cultural evolutionary process." 
 ,"The minds are habitats of the memes, and they are certainly limited in their capacity." ]

let array3 = [ "Do you know that game; the Creed of the Assassin - well yeah it's lame has heck"
 ,"'Loan Marino input', By Armani" 
 ,"'Sports', By Armani" 
 ,"'quantifying morph quantify', By Armani" 
 ,"'Grove Wooden', By Armani" 
 ,"'XSS', By Armani" 
 ,"'Dynamic streamline XML', By Armani" 
 ,"'Leu Generic', By Armani" 
 ,"Java? Script? JAVASCRIPT? more like JAVA FECK" ]


// Heck => H**k
// Feck => F*ck
// Darn => Heckn'
// Assassin => WooohooWoohooin
// Dude => Friendo
let banned_words = ["heck","H**k","feck","F*ck","darn","Heckn","assassin","WooohooWoohooin","dude","Friendo"]



 function banned_check(array){
    for(i=0;i<array.length;i++){
        for(y=0;y<(banned_words.length)/2;y++){
            let x = y*2
            // array[i] = array[i].replace(/banned_words[x]/,banned_words[x+1])   <<<<< this made everything lower case but worked
            let regEX =  RegExp(banned_words[x],"ig") // looks for a word regardless of lower or upper case
            array[i] = array[i].replace(regEX, banned_words[x+1]) 
        }
        console.log(array[i])
    }
 }
 banned_check(array1)
 banned_check(array2)
 banned_check(array3)