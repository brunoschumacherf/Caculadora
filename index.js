function insert(num){
  var num1 = document.getElementById('result').innerHTML;
  document.getElementById('result').innerHTML = num1 + num;
}
function clean(){
  document.getElementById('result').innerHTML = "";
}
function back(){
  var result = document.getElementById('result').innerHTML
  document.getElementById('result').innerHTML = result.substring(0, result.length - 1)
}
function calculate(){
  var result = document.getElementById('result').innerHTML;
  if(result){
    document.getElementById('result').innerHTML = eval(result)
  }
}