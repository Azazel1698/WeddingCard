import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyB3u2v-zJs1WLxX1oDqDCaUvDS6aNKvqNw",
  authDomain: "wedding-hp-b0f3f.firebaseapp.com",
  projectId: "wedding-hp-b0f3f",
  storageBucket: "wedding-hp-b0f3f.appspot.com",
  messagingSenderId: "209575657058",
  appId: "1:209575657058:web:1ed911deacc3ae9afb5b3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default class FirebaseService {
  constructor() { }

  async getAllInvitations() {
    let snapshots = await getDocs(collection(db, "Invitations"));
    return (
      snapshots.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      }) ?? []
    );
  }

  async getReplyById(id) {
    let snapshot = await getDoc(doc(db, "Invitations", id));
    if (snapshot.exists()) {
      return {
        id: id,
        ...snapshot.data(),
      };
    } else {
      return null;
    }
  }

  async addReply(reply) {
    try {
      const docRef = await addDoc(collection(db, "Invitations"), {
        ...reply,
      });
      return docRef.id;
    } catch (e) {
      return -1;
    }
  }

  async editReply(id, reply) {
    await updateDoc(doc(db, "Invitations", id), reply);
  }

  async deleteReply(id) {
    await deleteDoc(doc(db, "Invitations", id));
  }
}
