const db = firebase.firestore();

const registerIndivisual = async(data) => {
  try{
    await db.collection('participants').doc(data.regNo).set({
      name:data.name,
      regNo: data.regNo,
      phone: data.phone
    },{merge:true})
  } catch (e){
    console.log(e);
  }
  
}

// registerIndivisual({
//   name:"Gunjan",
//   regNo:"19BCE2642",
//   phone: "9894495525"
// })