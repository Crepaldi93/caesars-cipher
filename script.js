function rot13(str) {
  
  // Create an object cointaining the letters and their matches in the ROT13 cipher
  
  const cipher = {
    A: "N",
    B: "O",
    C: "P",
    D: "Q",
    E: "R",
    F: "S",
    G: "T",
    H: "U",
    I: "V",
    J: "W",
    K: "X",
    L: "Y",
    M: "Z",
    N: "A",
    O: "B",
    P: "C",
    Q: "D",
    R: "E",
    S: "F",
    T: "G",
    U: "H",
    V: "I",
    W: "J",
    X: "K",
    Y: "L",
    Z: "M"
  }
  
  // Split the string to an array, map the array and, if the character is a letter, change it for its value on the cipher object. Join the array in order to return the final string
  
  let finalString = str.split("").map(character => {
    if (/[A-Z]/.test(character)) {
      return cipher[character];
    } else {
      return character
    }
  }).join("")

  return finalString;
}

// Tests:

// Return FREE CODE CAMP
console.log(rot13("SERR PBQR PNZC"));

// Return FREE PIZZA!
console.log(rot13("SERR CVMMN!"));

// Return FREE LOVE?
console.log(rot13("SERR YBIR?"));

// Return THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))