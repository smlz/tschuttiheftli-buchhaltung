import Firebase from '@firebase/app'
// eslint-disable-next-line no-unused-vars
import FirebaseDatabase from '@firebase/database'

export default Firebase.initializeApp({
  apiKey: 'AIzaSyBKQW7pmD9eY89Im_A9zPjkgtyqIT9ogqQ',
  authDomain: 'tschuttiheftlibuchhaltung.firebaseapp.com',
  databaseURL: 'https://tschuttiheftlibuchhaltung.firebaseio.com',
  projectId: 'tschuttiheftlibuchhaltung',
  storageBucket: 'tschuttiheftlibuchhaltung.appspot.com',
  messagingSenderId: '217301557004'
}).database()