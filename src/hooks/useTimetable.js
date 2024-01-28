import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

export default () => {
  const [loading, setLoading] = useState(false);
  const [classes, setClasses] = useState([]);
  async function getClass() {
    setLoading(true);
    const col = collection(db, "classes");
    const snapshot = await getDocs(col);
    setClasses(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setLoading(false);
  }
  useEffect(() => {
    getClass();
  }, []);

  return {
    loading,
    classes,
  };
};
