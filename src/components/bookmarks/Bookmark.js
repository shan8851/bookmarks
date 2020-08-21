import React, { useState, useEffect, useContext } from "react";
import Layout from "../Layout/Layout";
import { firestore } from "../../firebase/fire";
import { UserContext } from "../../providers/UserProvider";
import Spinner from "../loading/Spinner";

export default function Bookmark() {
  const user = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const fetchAllBookmarksFromFirebase = async () => {
    firestore
      .doc(`users/${user.email}`)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setData(doc.data().bookmarks);
        } else {
          console.log("No such document!");
        }
      })
      .then(() => setLoading(false))
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  };

  useEffect(() => {
    fetchAllBookmarksFromFirebase();
  }, []);

  if (loading) return <Spinner />;
  return (
    <Layout>
      {console.log("HAHAA", data)}
      <h1>BOOKMARKS</h1>
    </Layout>
  );
}
