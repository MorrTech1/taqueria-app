import {
collection,
addDoc,
getDocs,
doc,
updateDoc
}
from "firebase/firestore";

import {
db
}
from "../firebase/firebase";

export async function guardarCorte(corte){

try{

const docRef =
await addDoc(
collection(
db,
"historial"
),
corte
);

console.log(
"guardado",
docRef.id
);

alert(
"Guardado en Firebase ✅"
);

}
catch(error){

console.error(
error
);

alert(
error.message
);

}

}

export async function obtenerHistorial(){

const snapshot=

await getDocs(

collection(

db,

"historial"

)

);



const historial=

snapshot.docs.map(

(doc)=>({

id:doc.id,

...doc.data()

})

);



historial.sort(

(a,b)=>

new Date(

b.fecha+
"T12:00:00"

)

-

new Date(

a.fecha+
"T12:00:00"

)

);



return historial;

}




export async function actualizarCorte(

id,

datos

){

const referencia=

doc(

db,

"historial",

id

);

await updateDoc(

referencia,

datos

);

}