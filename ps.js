const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");
const requirementList = document.querySelectorAll(".requirement-list li");

const requirements = [
   {regex: /.{8,}/, index: 0},//minuimum of 8 charachters
   {regex: /[0-9]/, index: 1},//at least one number
   {regex: /[a-z]/, index: 2},//at least one lowecase letter
   {regex: /[^A-Za-z0-9]/, index: 3},//special charecter
   {regex: /[A-Z]/, index: 4},//one uppercase num
];

passwordInput.addEventListener("click", (e) =>{
   requirements.forEach(item => {
       //check if password matches requirement
       const isValid = item.regex.test(e.target.value);
       const requirementItem = requirementList[item.index];

       //update class & icon if it matched or not
       if(isValid){
           requirementItem.firstElementChild.className = "fa-solid fa-check";
           requirementItem.classList.add("valid");
       } else{
           requirementItem.firstElementChild.className = "fa-solid fa-circle";
           requirementItem.classList.remove("valid");
       }
   });
});
eyeIcon.addEventListener("click",() => {
   // the type of passwordInput from password to text if is text = show if pass = hide
   passwordInput.type =  passwordInput.type === "password" ? "text" : "password";
   
   eyeIcon.className = `fa-solid fa-eye${ passwordInput.type === "password"? "" : "-slash"}`;
});