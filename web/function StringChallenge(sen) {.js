function StringChallenge(sen) { 

    // code goes here  
    let str = sen.split("");
    let ChallengeToken = 'xtc3qfjkbed';
   let cT= ChallengeToken.split("")
    // var longestword = 0;
    let string = "[.,\/#!$%\^&\*;:{}=\-_`~()]1234567890";
    let sT=string.split("")
    // console.log(sT)
    let maxLength = 0;
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < sT.length;j++){
          if(str[i]==sT[j]){
            // console.log(str[i])
            str=str.filter(str=>str !=sT[j])
          }
        }
      }
      let arr=[]
      
       str=str.join("")
       str=str.split(/(?<=^\S+)\s/)
      //  console.log("FF",str)
    // arr.push(str)
    let rep=str.reduce(function(a,b){
      return a.length >= b.length ? a:b
    })
      // console.log("dda",rep)
      // var str1 = (str[i]) + ChallengeToken ;
     rep = rep.split('');
      // console.log(i,str[i])
      // console.log(rep)
      for(var i = 0; i < rep.length; i++){
        for(var j = 0; j < cT.length;j++){
          if(rep[i]==cT[j]){
            rep=rep.filter(rep=>rep !=cT[j])
          }
        }
      }
  
  
    rep =rep.join("")
    // console.log(rep.length)
    return rep; 
  
  }
     
  // keep this function call here 
  console.log(StringChallenge(readline()));