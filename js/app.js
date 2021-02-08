const db = firebase.firestore();
const form = document.querySelector("#form");

const registerIndivisual = async(data) => {
  try{
    await db.collection('participants').doc(data.regNo).set({
      name:data.name,
      regNo: data.regNo,
      email: data.email,
      phone: data.phone
    },{merge:true})
  } catch (e){
    console.log(e);
  }
  
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  var data = {};
  data.name = form.querySelector("#name").value;
  data.regNo = form.querySelector("#regno").value;
  data.email = form.querySelector("#email").value;
  data.phone = form.querySelector("#phone").value;
  await registerIndivisual(data);
  location.href = "/thanks.html"
})


// registerIndivisual({
//   name:"Gunjan",
//   regNo:"19BCE2642",
//   phone: "9894495525"
// })