import { initializeApp } from "firebase/app";

import {
getFirestore
}
from "firebase/firestore";

const firebaseConfig = {

apiKey:"AIzaSyCXDASU5mt1InTz9OfJRQ3SsqoGC0CM8J8",
authDomain:"taqueriaapp-fd917.firebaseapp.com",
projectId:"taqueriaapp-fd917",
storageBucket:"taqueriaapp-fd917.firebasestorage.app",
messagingSenderId:"831870439090",
appId:"1:831870439090:web:24b725100452af29ed83ab"


};

const app =
initializeApp(
firebaseConfig
);

export const db =
getFirestore(
app
);

export default app;