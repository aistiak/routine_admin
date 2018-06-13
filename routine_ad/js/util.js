

function getStartTime(a) {
    var b = '';
    for (var i = 0; i < a.length; i++) {
        if ((a[i
        ] >= '0' && a[i
        ] <= '9') || a[i
        ] == '.' || a[i
        ] == ' ') b += a[i
        ];
        else break;
    }
    return b;
}

function getEndTime(a) {
    var b = '';
    for (var i = a.length - 1; i >= 0; i--) {
        if ((a[i
        ] >= '0' && a[i
        ] <= '9') || a[i
        ] == '.' || a[i
        ] == ' ') b += a[i
        ];
        else break;
    }
    return reverseString(b);
}

// from stack overflow 
function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}

function rreverse(str) {
    rs = '';
    for (var i = str.len - 1; i >= 0; i--) {
        rs += str[i
        ]
    }

    return rs;
}

function retUpperCase(arg){
    var res = "" ;
    for(var i = 0 ; i< arg.length ; i++){
       if(isUpperCase(arg.charAt(i))){
          res+=arg.charAt(i);
       }
    }
    return res;
}