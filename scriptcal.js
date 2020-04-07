const calculator = () =>{
  let eng = document.getElementById('eng').value;
  let maths = document.getElementById('maths').value;
  let science = document.getElementById('science').value;
  let comp = document.getElementById('comp').value;

  let grades = "";
  let totalGrades = parseFloat(eng) + parseFloat(maths) + parseFloat(science) + parseFloat(comp);
  alert(totalGrades);
  console.log (totalGrades);
  let perc = (totalGrades/400) * 100;
  alert(perc);
  console.log(perc);

  if(perc <= 100  && perc >= 80){
    grades = 'A';
  }else if(perc <= 79  && perc >= 60){
     grades = 'B';
  }else if(perc <= 59  && perc >= 40){
     grades = 'C';
  }else{
     grades = 'F';
  }
  console.log(grades);
  if(perc >= 39.5){
    document.getElementById('showData').innerHTML = ` Out of 400 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Pass. `
    console.log("Pass");
  }
  else{
    document.getElementById('showData').innerHTML = ` Out of 400 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Fail. `
    console.log("Fail");
  }
}
alert("Please enter marks out of 100 for each subject");
