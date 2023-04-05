import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import "firebase/auth";
import "firebase/firestore";
import { USER_STATE_CHANGE } from '../constants';

import { app, db }  from '../../database/firebaseConfig';

export const fetchUser = () => {
  return (dispatch) => {
    const auth = getAuth(app);
    const uid = auth.currentUser.uid;

    const docRef = doc(db, "users", uid);

    getDoc(docRef)
      .then((snapshot) => {
        if (snapshot.exists) {
          const data = snapshot.data();
          dispatch({ type: USER_STATE_CHANGE, currentUser: { ...data, uid } });
        } else {
          console.log('Action Fetch User: User does not exists')
        }
      });
  };
};