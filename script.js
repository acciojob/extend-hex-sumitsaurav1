const extendHex = (shortHex) => {
    // write your code here
    let result = "#";
    if(shortHex[0]=="#")
    {
        for(let i=1;i<shortHex.length;i++){
            result +=shortHex[i];
            result +=shortHex[i];
        }
    }else{
        for(let i=0;i<shortHex.length;i++){
            result +=shortHex[i];
            result +=shortHex[i];
        }
    }
    return result;

  };
  
  // Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));