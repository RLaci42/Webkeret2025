import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideFirebaseApp(() => 
      initializeApp({
        projectId: "horgaszbolt-b20cd",
        appId: "1:353026201709:web:81cb2ea9db53a52987c764",
        storageBucket: "horgaszbolt-b20cd.firebasestorage.app",
        apiKey: "AIzaSyBNFRdcSql1tLhNcKCDYprIlDnRr_MuzYQ",
        authDomain: "horgaszbolt-b20cd.firebaseapp.com",
        messagingSenderId: "353026201709"
      })),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore())
      ]
};
