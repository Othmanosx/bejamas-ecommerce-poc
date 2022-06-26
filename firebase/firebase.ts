import { FirebaseApp, initializeApp, getApps } from 'firebase/app'

export default function createFirebaseApp() {
  const clientCredentials = {
    apiKey: process.env.NEXT_PUBLIC_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECTID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
    appId: process.env.NEXT_PUBLIC_APPID,
  }

  if (getApps().length <= 0) {
    const app: FirebaseApp = initializeApp(clientCredentials)
    return app
  }
}
