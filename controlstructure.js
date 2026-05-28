let person1 = 'white';

if (person1 =='red'){
    console.log('Favourate color is red');
} else if (person1 =='black'){
    console.log('Favourate color is black');
}
else if(person1 ==undefined){
        console.log("Haibo this person does not have a favourate color");
}
else {console.log('Your color is' +   person1)}

switch (person1) { // cannnot check for a range of values like person >= 12
    case 'red':
        console.log('favourite color is red')
        break ;
    
    case 'black':
        console.log('favourite color is red')
        break ;
    default:
        console.log('Your color is ' + person1)
        break;
}

//loops

let vegetables = ['lettuce', 'tomato', 'avocado', 'carrot'];

 for (let m=0; m<vegetables.length; m++) {
    console.log(m+1 +". " +vegetables[m]);
 }
  if(vegetables = 'carrot' ){
    console.log('There is a'+ " " + vegetables[m] + "",'in the list')
  }

  if( vegetables = 'avocado'){
    console.log('There is an'+ " " + vegetables + "",'in the list')
  }



