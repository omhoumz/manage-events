// import firebase from '@firebase/app'
// import '@firebase/firestore'

// export function loadDB() {
//   try {
//     const config = {
//       apiKey: process.env.API_KEY,
//       authDomain: process.env.AUTH_DOMAIN,
//       databaseURL: process.env.DATABASE_URL,
//       projectId: process.env.PROJECT_ID,
//       storageBucket: process.env.STORAGE_BUCKET,
//       messagingSenderId: process.env.MESSAGING_SENDER_ID,
//       appId: process.env.APP_ID,
//       measurementId: process.env.MEASUREMENT_ID,
//     }

//     firebase.initializeApp(config)
//   } catch (err) {
//     const isHotReloadingError =
//       /already exists/.test(err.message) &&
//       process.env.NODE_ENV === 'development'

//     if (!isHotReloadingError) {
//       console.error('Firebase initialization error', err.stack)
//     }
//   }

//   return firebase
// }
