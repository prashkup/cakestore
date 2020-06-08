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
  appId: process.env.REACT_APP_APP_ID,
}

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig)
    this.db = app.database()
    this.storage = app.storage()
  }

  async getProducts() {
    const productsSnapshot = await this.db.ref('products').once('value')
    const products = productsSnapshot.val()
    let results = []

    for await (const product of products) {
      const url = await this.storage.ref().child(product.image).getDownloadURL()
      const result = { ...product, image: url }
      results.push(result)
    }

    return results
  }
}

const firebase = new Firebase()

export default firebase
