import {
collection,
addDoc,
getDocs
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

const snapshot =
await getDocs(
collection(
db,
"historial"
)
);

return snapshot.docs.map(
(doc)=>({
id:doc.id,
...doc.data()
})
);

}