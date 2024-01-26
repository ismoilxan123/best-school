import { addDoc, collection, getDocs } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";

export default () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getTeachers();
  }, []);
  async function getTeachers() {
    setLoading(true);
    const col = collection(db, "teachers");
    const snapshot = await getDocs(col);
    setData(snapshot.docs.map((doc) => doc.data()));
    setLoading(false);
  }

  async function addTeacher(teacher) {
    try {
      setLoading(true);
      const docRef = await addDoc(collection(db, "teachers"), teacher);

      setData([...data, { ...teacher, id: docRef.id }]);
      setOpen(false);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setLoading(false);
  }

  return {
    loading,
    data,
    addTeacher,
    open,
    setOpen,
  };
};
