import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { message } from "antd";

export default (collectionName) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(null);
  useEffect(() => {
    getTeachers();
  }, []);
  async function getTeachers() {
    setLoading(true);
    const col = collection(db, collectionName);
    const snapshot = await getDocs(col);
    setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setLoading(false);
  }

  async function addTeacher(teacher) {
    try {
      setLoading(true);
      const docRef = await addDoc(collection(db, collectionName), teacher);

      setData([...data, { ...teacher, id: docRef.id }]);
      message.success("Added!");
      setOpen(false);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setLoading(false);
  }

  async function deleteTeacher(id) {
    try {
      setLoading(true);
      await deleteDoc(doc(db, collectionName, id));
      setData(data.filter((d) => d.id != id));
      message.success("Deleted!");
    } catch {
      console.log(error);
    }
    setLoading(false);
  }
  async function updateTeacher(id, value) {
    try {
      setLoading(true);
      const docRef = doc(db, collectionName, id);
      await updateDoc(docRef, value);
      setData(data.map((d) => (d.id == id ? { ...value, id: id } : d)));
      setOpen(false);
      setEdit(null);
      message.success("Updated!");
    } catch {
      console.log(error);
    }
    setLoading(false);
  }

  return {
    loading,
    data,
    addTeacher,
    open,
    setOpen,
    deleteTeacher,
    setEdit,
    edit,
    updateTeacher,
  };
};
