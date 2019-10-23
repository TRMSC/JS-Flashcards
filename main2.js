let htmlCard = document.querySelector(".card-container")
let htmlQuestion = document.querySelector(".click .question")
let htmlAnswer = document.querySelector(".click .answer")
let next = document.querySelector(".next")
let previous = document.querySelector(".previous")
let addPoint = document.querySelector(".pass")
let subPoint = document.querySelector(".wrong")
let score = document.querySelector(".digits")
let basic = document.querySelector(".basic")
let arrayMethods = document.querySelector(".array-methods")
let basicOperators = document.querySelector(".basic-operators")
let ternaryOperators = document.querySelector(".ternary-operators")
let bitwiseOperators = document.querySelector(".bitwise-operators")
let outputData = document.querySelector(".output-data")
let globalFunctions = document.querySelector(".global-functions")
let string = document.querySelector(".string-methods")
let number = document.querySelector(".number-methods")
let math = document.querySelector(".math-methods")
let domNodes = document.querySelector(".dom-node-prop")
let domMethods = document.querySelector(".dom-methods")
let elementMethods = document.querySelector(".element-methods")

//questions and answers
basic.addEventListener("click", function(evt) {
    let questions = {
            "Attribute": "A key-value pair in an HTML element. You can use HTML attributes to control certain aspects of an element, like where the element links to or the size of the element.",
            "Array": "A list of JavaScript values. In an array, each value has an index, which is the numbered position of that value in the array. The first value is at index 0, the next value is at index 1, and so on.",
            "Boolean": "A value that can be either true or false.",
            "Camel Case": "A common way to name variables in which you capitalize the first letter of each word (except for the first word) and then join all the words to make one long word.",
            "'DOM' Stands For": "Document Object Model",
            "What is the DOM": "The way that web browsers organize and keep track of HTML elements on a web page. These elements are organized in a treelike structure called the DOM tree. JavaScript and jQuery provide methods that work with the DOM to create and modify elements.",
            "Index": "A number that indicates the position of a value inside an array. The index can be used to access a specific value in an array.",
            "Key-Value Pair": "A pair made up of a string (called a key) that is matched with a particular value (which can be any type of value). They go inside JavaScript objects, and they are used to define an object's properties and methods.",
            "Library": "A collection of JavaScript code that we can load into our web pages to provides additional functions and method. In this book we use the jQuery library, which gives us functions and methods for working with the DOM more easily.",
            "Object": "A set of key-value pairs. Each key is a string that can be paired with any JavaScript value. You can then use the key to retrieve whatever value it's paired with in the object.",
            "String": "A list of characters surrounded by quotes, used to represent text in computer programs.",
            "Syntax": "How keywords, punctuation, and other characters are combined to make working JavaScript programs.",
            "Variable": "A way to give a JavaScript value a name. After you assign a value to a variable, you can use the variable name later to retrieve the value.",
            "For Loop": "The most common way to create a loop in JavaScript",
            "While Loop": "Sets up conditions under which aloop executes",
            "Do while Loop": "Similar to the while loop, however, it executes at least once and performs a check at the end to see if the condition is met to execute again",
            "Break Loop": "Used to stop and exit the cycle at certain conditions",
            "Continue Loop": "Skip parts of the cycle if certain conditions are met",
        }
        //turning the questions into indexable arrays
    const question = Object.entries(questions)

    //logic for creaging a functional next and previous card button
    let i = 0

    function nextItem() {
        i = i + 1;
        i = i % question.length;
        return question[i][0];
    }

    function prevItem() {
        if (i === 0) {
            i = question.length;
        }
        i = i - 1;
        return question[i][0];
    }

    //initial loadup of questions
    htmlQuestion.textContent = question[i][0]
    htmlAnswer.textContent = question[i][1]
        //next and previous button event listeners
    next.addEventListener('click', function(evt) {
        htmlQuestion.textContent = nextItem()
        htmlAnswer.textContent = question[i][1]
    })
    previous.addEventListener('click', function(evt) {
        htmlQuestion.textContent = prevItem()
        htmlAnswer.textContent = question[i][1]

    })
})
arrayMethods.addEventListener("click", function(evt) {
    let questions = {
            "concat()": "Join several arrays into one",
            "indexOf()": "Returns the primitive value of the specified object",
            "join()": "Combine elements of an array into a single string and return the string",
            "lastIndexOf()": "Gives the last position at which a given element appears in an array",
            "pop()": "Removes the last element of an array",
            "push()": "Add a new element at the end",
            "reverse()": "Sort elements in descending order",
            "shift()": "Remove the first element of an array",
            "slice()": "Pulls a copy of a portion of an array into a new array",
            "sort() ": "Sorts elements alphabetically",
            "splice()": "Adds elements in a specified way and position",
            "toString()": "Converts elements to strings",
            "unshift()": "Adds a new element to the beginning",
            "valueOf()": "Returns the first position at which a given element appears in an array",

        }
        //turning the questions into indexable arrays
    const question = Object.entries(questions)

    //logic for creaging a functional next and previous card button
    let i = 0

    function nextItem() {
        i = i + 1;
        i = i % question.length;
        return question[i][0];
    }

    function prevItem() {
        if (i === 0) {
            i = question.length;
        }
        i = i - 1;
        return question[i][0];
    }

    //initial loadup of questions
    htmlQuestion.textContent = question[i][0]
    htmlAnswer.textContent = question[i][1]
        //next and previous button event listeners
    next.addEventListener('click', function(evt) {
        htmlQuestion.textContent = nextItem()
        htmlAnswer.textContent = question[i][1]
    })
    previous.addEventListener('click', function(evt) {
        htmlQuestion.textContent = prevItem()
        htmlAnswer.textContent = question[i][1]

    })
})
basicOperators.addEventListener("click", function(evt) {
    let questions = {
            "+": "Addition",
            "-": "Subtraction",
            "*": "Multiplication",
            "/": "Division",
            "(...)": "Grouping operator, operations within brackets are executed earlier than those outside",
            "%": "Modulus (remainder )",
            "++": "Increment numbers",
            "--": "Decrement numbers",
        }
        //turning the questions into indexable arrays
    const question = Object.entries(questions)

    //logic for creaging a functional next and previous card button
    let i = 0

    function nextItem() {
        i = i + 1;
        i = i % question.length;
        return question[i][0];
    }

    function prevItem() {
        if (i === 0) {
            i = question.length;
        }
        i = i - 1;
        return question[i][0];
    }

    //initial loadup of questions
    htmlQuestion.textContent = question[i][0]
    htmlAnswer.textContent = question[i][1]
        //next and previous button event listeners
    next.addEventListener('click', function(evt) {
        htmlQuestion.textContent = nextItem()
        htmlAnswer.textContent = question[i][1]
    })
    previous.addEventListener('click', function(evt) {
        htmlQuestion.textContent = prevItem()
        htmlAnswer.textContent = question[i][1]

    })
})
bitwiseOperators.addEventListener("click", function(evt) {
    let questions = {
            "&": "AND statement",
            "|": "OR statement",
            "~": "NOT",
            "^": "XOR",
            "<<": "Left shift",
            ">>": "Right shift",
            ">>>": "Zero fill right shift",
        }
        //turning the questions into indexable arrays
    const question = Object.entries(questions)

    //logic for creaging a functional next and previous card button
    let i = 0

    function nextItem() {
        i = i + 1;
        i = i % question.length;
        return question[i][0];
    }

    function prevItem() {
        if (i === 0) {
            i = question.length;
        }
        i = i - 1;
        return question[i][0];
    }

    //initial loadup of questions
    htmlQuestion.textContent = question[i][0]
    htmlAnswer.textContent = question[i][1]
        //next and previous button event listeners
    next.addEventListener('click', function(evt) {
        htmlQuestion.textContent = nextItem()
        htmlAnswer.textContent = question[i][1]
    })
    previous.addEventListener('click', function(evt) {
        htmlQuestion.textContent = prevItem()
        htmlAnswer.textContent = question[i][1]

    })
})
basicOperators.addEventListener("click", function(evt) {
    let questions = {
            "+": "Addition",
            "-": "Subtraction",
            "*": "Multiplication",
            "/": "Division",
            "(...)": "Grouping operator, operations within brackets are executed earlier than those outside",
            "%": "Modulus (remainder )",
            "++": "Increment numbers",
            "--": "Decrement numbers",
            "&&": "Logical and",
            "||": "Logical or",
            "!": "Logical not",
        }
        //turning the questions into indexable arrays
    const question = Object.entries(questions)

    //logic for creaging a functional next and previous card button
    let i = 0

    function nextItem() {
        i = i + 1;
        i = i % question.length;
        return question[i][0];
    }

    function prevItem() {
        if (i === 0) {
            i = question.length;
        }
        i = i - 1;
        return question[i][0];
    }

    //initial loadup of questions
    htmlQuestion.textContent = question[i][0]
    htmlAnswer.textContent = question[i][1]
        //next and previous button event listeners
    next.addEventListener('click', function(evt) {
        htmlQuestion.textContent = nextItem()
        htmlAnswer.textContent = question[i][1]
    })
    previous.addEventListener('click', function(evt) {
        htmlQuestion.textContent = prevItem()
        htmlAnswer.textContent = question[i][1]

    })
})
ternaryOperators.addEventListener("click", function(evt) {
    let questions = {
            "==": "Equal to",
            "===": "Equal value and equal type",
            "!=": "Not equal",
            "!==": "Not equal value or not equal type",
            ">": "Greater than",
            "<": "Less than",
            ">=": "Greater than or equal to",
            "<=": "Less than or equal to",
            "?": "Ternary operator",
        }
        //turning the questions into indexable arrays
    const question = Object.entries(questions)

    //logic for creaging a functional next and previous card button
    let i = 0

    function nextItem() {
        i = i + 1;
        i = i % question.length;
        return question[i][0];
    }

    function prevItem() {
        if (i === 0) {
            i = question.length;
        }
        i = i - 1;
        return question[i][0];
    }

    //initial loadup of questions
    htmlQuestion.textContent = question[i][0]
    htmlAnswer.textContent = question[i][1]
        //next and previous button event listeners
    next.addEventListener('click', function(evt) {
        htmlQuestion.textContent = nextItem()
        htmlAnswer.textContent = question[i][1]
    })
    previous.addEventListener('click', function(evt) {
        htmlQuestion.textContent = prevItem()
        htmlAnswer.textContent = question[i][1]

    })
})
outputData.addEventListener("click", function(evt) {
    let questions = {
            "alert()": "Output data in an alert box in the browser window",
            "confirm()": "Opens up a yes/no dialog and returns true/false depending on user click",
            "console.log()": "Writes information to the browser console, good for debugging purposes",
            "document.write()": "Write directly to the HTML document",
            "prompt()": "Creates an dialogue for user input",
        }
        //turning the questions into indexable arrays
    const question = Object.entries(questions)

    //logic for creaging a functional next and previous card button
    let i = 0

    function nextItem() {
        i = i + 1;
        i = i % question.length;
        return question[i][0];
    }

    function prevItem() {
        if (i === 0) {
            i = question.length;
        }
        i = i - 1;
        return question[i][0];
    }

    //initial loadup of questions
    htmlQuestion.textContent = question[i][0]
    htmlAnswer.textContent = question[i][1]
        //next and previous button event listeners
    next.addEventListener('click', function(evt) {
        htmlQuestion.textContent = nextItem()
        htmlAnswer.textContent = question[i][1]
    })
    previous.addEventListener('click', function(evt) {
        htmlQuestion.textContent = prevItem()
        htmlAnswer.textContent = question[i][1]

    })
})
globalFunctions.addEventListener("click", function(evt) {
    let questions = {
            "decodeURI()": "Decodes a Uniform Resource Identifier (URI) created by encodeURI or similar",
            "decodeURIComponent()": "Decodes a URI component",
            "encodeURI()": "Encodes a URI into UTF-8",
            "encodeURIComponent()": "Same but for URI components",
            "eval()": "Evaluates JavaScript code represented as a string",
            "isFinite()": "Determines whether a passed value is a finite number",
            "isNaN()": "Determines whether a value is NaN or not",
            "Number()": "Returns a number converted from its argument",
            "parseFloat()": "Parses an argument and returns a floating point number",
            "parseInt()": "Parses its argument and returns an integer",
        }
        //turning the questions into indexable arrays
    const question = Object.entries(questions)

    //logic for creaging a functional next and previous card button
    let i = 0

    function nextItem() {
        i = i + 1;
        i = i % question.length;
        return question[i][0];
    }

    function prevItem() {
        if (i === 0) {
            i = question.length;
        }
        i = i - 1;
        return question[i][0];
    }

    //initial loadup of questions
    htmlQuestion.textContent = question[i][0]
    htmlAnswer.textContent = question[i][1]
        //next and previous button event listeners
    next.addEventListener('click', function(evt) {
        htmlQuestion.textContent = nextItem()
        htmlAnswer.textContent = question[i][1]
    })
    previous.addEventListener('click', function(evt) {
        htmlQuestion.textContent = prevItem()
        htmlAnswer.textContent = question[i][1]

    })
})
string.addEventListener("click", function(evt) {
    let questions = {
            "charAt()": "Returns a character at a specified position inside a string char",
            "CodeAt()": "Gives you the unicode of character at that position",
            "concat()": "Concatenates (joins) two or more strings into one",
            "fromCharCode()": "Returns a string created from the specified sequence of UTF-16 code units",
            "indexOf()": "Provides the position of the first occurrence of a specified text within a string",
            "lastIndexOf()": "Same as indexOf() but with the last occurrence, searching backwards",
            "match()": "Retrieves the matches of a string against a search pattern",
            "replace()": "Find and replace specified text in a string",
            "search()": "Executes a search for a matching text and returns its position",
            "slice()": "Extracts a section of a string and returns it as a new string",
            "split()": "Splits a string object into an array of strings at a specified position",
            "substr()": "Similar to slice() but extracts a substring depended on a specified number of characters",
            "substring()": "Also similar to slice() but can’t accept negative indices",
            "toLowerCase()": "Convert strings to lower case",
            "toUpperCase()": "Convert strings to upper case",

        }
        //turning the questions into indexable arrays
    const question = Object.entries(questions)

    //logic for creaging a functional next and previous card button
    let i = 0

    function nextItem() {
        i = i + 1;
        i = i % question.length;
        return question[i][0];
    }

    function prevItem() {
        if (i === 0) {
            i = question.length;
        }
        i = i - 1;
        return question[i][0];
    }

    //initial loadup of questions
    htmlQuestion.textContent = question[i][0]
    htmlAnswer.textContent = question[i][1]
        //next and previous button event listeners
    next.addEventListener('click', function(evt) {
        htmlQuestion.textContent = nextItem()
        htmlAnswer.textContent = question[i][1]
    })
    previous.addEventListener('click', function(evt) {
        htmlQuestion.textContent = prevItem()
        htmlAnswer.textContent = question[i][1]

    })
})

number.addEventListener("click", function(evt) {
    let questions = {
            "toExponential()": "Returns a string with a rounded number written as exponential notation",
            "toFixed()": "Returns the string of a number with a specified number of decimals",
            "toPrecision()": "String of a number written with a specified length",
            "toString()": "Returns a number as a string",
            "valueOf()": "Returns a number as a number",

        }
        //turning the questions into indexable arrays
    const question = Object.entries(questions)

    //logic for creaging a functional next and previous card button
    let i = 0

    function nextItem() {
        i = i + 1;
        i = i % question.length;
        return question[i][0];
    }

    function prevItem() {
        if (i === 0) {
            i = question.length;
        }
        i = i - 1;
        return question[i][0];
    }

    //initial loadup of questions
    htmlQuestion.textContent = question[i][0]
    htmlAnswer.textContent = question[i][1]
        //next and previous button event listeners
    next.addEventListener('click', function(evt) {
        htmlQuestion.textContent = nextItem()
        htmlAnswer.textContent = question[i][1]
    })
    previous.addEventListener('click', function(evt) {
        htmlQuestion.textContent = prevItem()
        htmlAnswer.textContent = question[i][1]

    })
})
math.addEventListener("click", function(evt) {
    let questions = {
            "abs(x)": "Returns the absolute (positive) value of x",
            "acos(x)": "The arccosine of x, in radians",
            "asin(x)": "Arcsine of x, in radians",
            "atan(x)": "The arctangent of x as a numeric value",
            "atan2(y,x)": "Arctangent of the quotient of its arguments",
            "ceil(x)": "Value of x rounded up to its nearest integer",
            "cos(x)": "The cosine of x (x is in radians)",
            "exp(x)": "Value of Ex",
            "floor(x)": "The value of x rounded down to its nearest integer",
            "log(x)": "The natural logarithm (base E) of x",
            "max(x,y,z,...,n)": "Returns the number with the highest value",
            "min(x,y,z,...,n)": "Same for the number with the lowest value",
            "pow(x,y)": "X to the power of y",
            "random()": "Returns a random number between 0 and 1",
            "round(x)": "The value of x rounded to its nearest integer",
            "sin(x)": "The sine of x (x is in radians)",
            "sqrt(x)": "Square root of x",
            "tan(x)": "The tangent of an angle",

        }
        //turning the questions into indexable arrays
    const question = Object.entries(questions)

    //logic for creaging a functional next and previous card button
    let i = 0

    function nextItem() {
        i = i + 1;
        i = i % question.length;
        return question[i][0];
    }

    function prevItem() {
        if (i === 0) {
            i = question.length;
        }
        i = i - 1;
        return question[i][0];
    }

    //initial loadup of questions
    htmlQuestion.textContent = question[i][0]
    htmlAnswer.textContent = question[i][1]
        //next and previous button event listeners
    next.addEventListener('click', function(evt) {
        htmlQuestion.textContent = nextItem()
        htmlAnswer.textContent = question[i][1]
    })
    previous.addEventListener('click', function(evt) {
        htmlQuestion.textContent = prevItem()
        htmlAnswer.textContent = question[i][1]

    })
})
domNodes.addEventListener("click", function(evt) {
    let questions = {
            "attributes": "Returns a live collection of all attributes registered to and element",
            "baseURI": "Provides the absolute base URL of an HTML element",
            "childNodes": "Gives a collection of an element’s child nodes",
            "firstChild": "Returns the first child node of an element",
            "lastChild": "The last child node of an element",
            "nextSibling": "Gives you the next node at the same node tree level",
            "nodeName": "Returns the name of a node",
            "nodeType": "Returns the type of a node",
            "nodeValue": "Sets or returns the value of a node",
            "ownerDocument": "The top-level document object for this node",
            "parentNode": "Returns the parent node of an element",
            "previousSibling": "Returns the node immediately preceding the current one",
            "textContent": "Sets or returns the textual content of a node and its descendants",

        }
        //turning the questions into indexable arrays
    const question = Object.entries(questions)

    //logic for creaging a functional next and previous card button
    let i = 0

    function nextItem() {
        i = i + 1;
        i = i % question.length;
        return question[i][0];
    }

    function prevItem() {
        if (i === 0) {
            i = question.length;
        }
        i = i - 1;
        return question[i][0];
    }

    //initial loadup of questions
    htmlQuestion.textContent = question[i][0]
    htmlAnswer.textContent = question[i][1]
        //next and previous button event listeners
    next.addEventListener('click', function(evt) {
        htmlQuestion.textContent = nextItem()
        htmlAnswer.textContent = question[i][1]
    })
    previous.addEventListener('click', function(evt) {
        htmlQuestion.textContent = prevItem()
        htmlAnswer.textContent = question[i][1]

    })
})
domMethods.addEventListener("click", function(evt) {
    let questions = {
            "appendChild()": "Adds a new child node to an element as the last child node",
            "cloneNode()": "Clones an HTML element",
            "compareDocumentPosition()": "Compares the document position of two elements",
            "getFeature()": "Returns an object which implements the APIs of a specified feature",
            "hasAttributes()": "Returns true if an element has any attributes, otherwise false",
            "hasChildNodes()": "Returns true if an element has any child nodes, otherwise false",
            "insertBefore()": "Inserts a new child node before a specified, existing child node",
            "isDefaultNamespace()": "Returns true if a specified namespaceURI is the default, otherwise false",
            "isEqualNode()": "Checks if two elements are equal",
            "isSameNode()": "Checks if two elements are the same node",
            "isSupported()": "Returns true if a specified feature is supported on the element",
            "lookupNamespaceURI()": "Returns the namespaceURI associated with a given node",
            "lookupPrefix()": "Returns a DOMString containing the prefix for a given namespaceURI, if present",
            "normalize()": "Joins adjacent text nodes and removes empty text nodes in an element",
            "removeChild()": "Removes a child node from an element",
            "replaceChild()": "Replaces a child node in an element",

        }
        //turning the questions into indexable arrays
    const question = Object.entries(questions)

    //logic for creaging a functional next and previous card button
    let i = 0

    function nextItem() {
        i = i + 1;
        i = i % question.length;
        return question[i][0];
    }

    function prevItem() {
        if (i === 0) {
            i = question.length;
        }
        i = i - 1;
        return question[i][0];
    }

    //initial loadup of questions
    htmlQuestion.textContent = question[i][0]
    htmlAnswer.textContent = question[i][1]
        //next and previous button event listeners
    next.addEventListener('click', function(evt) {
        htmlQuestion.textContent = nextItem()
        htmlAnswer.textContent = question[i][1]
    })
    previous.addEventListener('click', function(evt) {
        htmlQuestion.textContent = prevItem()
        htmlAnswer.textContent = question[i][1]

    })
})
elementMethods.addEventListener("click", function(evt) {
    let questions = {
"getAttribute()" : "Returns the specified attribute value of an element node get",
"AttributeNS()" : "Returns string value of the attribute with the specified namespace and name",
"getAttributeNode()" : "Gets the specified attribute node",
"getAttributeNodeNS()" : "Returns the attribute node for the attribute with the given namespace and name",
"getElementsByTagName()" : "Provides a collection of all child elements with the specified tag name",
"getElementsByTagNameNS()" : "Returns a live HTMLCollection of elements with a certain tag name belonging to the given namespace",
"hasAttribute()" : "Returns true if an element has any attributes, otherwise false",
"hasAttributeNS()" : "Provides a true/false value indicating whether the current element in a given namespace has the specified attribute",
"removeAttribute()" : "Removes a specified attribute from an element",
"removeAttributeNS()" : "Removes the specified attribute from an element within a certain namespace",
"removeAttributeNode()" : "Takes away a specified attribute node and returns the removed node",
"setAttribute()" : "Sets or changes the specified attribute to a specified value",
"setAttributeNS()" : "Adds a new attribute or changes the value of an attribute with the given namespace and name",
"setAttributeNode()" : "Sets or changes the specified attribute node",
"setAttributeNodeNS()" : "Adds a new namespaced attribute node to an element",

        }
        //turning the questions into indexable arrays
    const question = Object.entries(questions)

    //logic for creaging a functional next and previous card button
    let i = 0

    function nextItem() {
        i = i + 1;
        i = i % question.length;
        return question[i][0];
    }

    function prevItem() {
        if (i === 0) {
            i = question.length;
        }
        i = i - 1;
        return question[i][0];
    }

    //initial loadup of questions
    htmlQuestion.textContent = question[i][0]
    htmlAnswer.textContent = question[i][1]
        //next and previous button event listeners
    next.addEventListener('click', function(evt) {
        htmlQuestion.textContent = nextItem()
        htmlAnswer.textContent = question[i][1]
    })
    previous.addEventListener('click', function(evt) {
        htmlQuestion.textContent = prevItem()
        htmlAnswer.textContent = question[i][1]

    })
})
let points = 0


addPoint.addEventListener("click", function(evt) {
    evt.preventDefault();
    points = points + 1;
    score.textContent = points;
    if (points > 0) {
        score.classList.add("green")
        score.classList.remove("red")
    }

})
subPoint.addEventListener("click", function(evt) {
    evt.preventDefault();
    points = points - 1;
    score.textContent = points;
    if (points < 0) {
        score.classList.add("red")
        score.classList.remove("green")
    }
})