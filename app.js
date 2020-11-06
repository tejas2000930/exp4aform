function validate(){
  var name = document.getElementById("name").value;
  var year = document.getElementById("year").value;
  var subject = document.getElementById("subject").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var Department = document.getElementById("Department").value;
  
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  var text;
  if(name.length < 3){
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if(year.length < 1){
    text = "Please Enter valid year";
    error_message.innerHTML = text;
    return false;
  }

  if(subject.length < 1){
    text = "Please Enter correct subject";
    error_message.innerHTML = text;
    return false;
  }
  if(isNaN(phone) || phone.length != 10){
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length < 1){
    text = "Please Enter rollno";
    error_message.innerHTML = text;
    return false;
  }
  if(Department.length < 1){
    text="enter department";
    error_message.innerHTML = text;
    return false;
  }
  
  alert("Form Submitted Successfully!");
  return true;
}