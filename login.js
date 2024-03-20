const sign = document.getElementById ('SignIn');
const User= document.getElementById ('Username');
const Pass= document.getElementById ('Password');
const my_form = document.getElementById('form');

my_form.addEventListener('submit', (e)=>{
    e.preventDefault()
})


function signIn(){
    let log1 = User.value;
    console.log(log1);
    
    let log3 = Pass.value;
    console.log(log3);
}