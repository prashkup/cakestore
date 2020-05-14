import app from 'firebase/app'
import 'firebase/database'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MSG_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
}

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig)
    this.db = app.database()
    this.storage = app.storage()
  }

  getProducts () {
    return new Promise((resolve, reject) => {
      let values = []
      this.db.ref('products').on("child_added", snapshot => {
        values.push(snapshot.val())
        resolve(values)
      }, err => {
        reject(err)
      })
    })
  }
}

const firebase = new Firebase()

export default firebase
