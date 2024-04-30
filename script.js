document.querySelector('.validation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const fullname = document.querySelector('.fullname').value;
    const email = document.querySelector('.email').value;
    const birthdate = document.querySelector('.birthdate').value;
  
    const fullnameRegex = /^\w{3,}\s\w{3,}$/ig;
    const emailRegex = /^[\w|\.|-]{2,}[a-zA-Z0-9]+@\w{2,}\.\w{2,}$/;
    const birthdateRegex = /^(\d{4})\/(\d{2})\/(\d{2})$/;

    if(fullnameRegex.test(fullname) && emailRegex.test(email) && birthdateRegex.test(birthdate)) {
        console.log("true")
        Swal.fire({
            title: "Accepted!",
            text: "Thanks for your submission!",
            icon: "success"
        });

        fullname.value="";
        email.value="";
        birthdate.value="";
    }  else if (!birthdateRegex.test(birthdate)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Enter a valid date as: year/month/day"
        });
        birthdate.value="";
    }else if (!emailRegex.test(email)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Enter a valid email address"
        });
        email.value="";
    } else if (!fullnameRegex.test(fullname)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Enter a valid fullname"
        });
        fullname.value="";
    }
    
})

