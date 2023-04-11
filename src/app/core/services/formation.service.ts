import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable, NgZone } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Formation } from '../models/formation';
import { Inscription } from '../models/inscription';
import { Observable, map } from 'rxjs';

const FORMATION_REF = "formations";
const INSCRIPTION_REF = "inscriptions";
const SESSION = "sessions";
const CANDIDAT = "inscriptions";


@Injectable({
  providedIn: 'root'
})
export class FormationService {


  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone,
  ) { }


  getPosts() {
   return this.afs.collection(FORMATION_REF, ref =>
    ref.limit(10)
    ).get();
  }

  getCand() {
    return this.afs.collection(CANDIDAT, ref =>
     ref.limit(10)
     ).get();
   }

   getById(id: string) {
    return this.afs.collection(FORMATION_REF).doc(id).get();

  }

  save(formation: Formation){
    return this.afs.collection(FORMATION_REF).add(formation);
  }

  update(formation: Formation){
    return this.afs.collection(FORMATION_REF)
    .doc(formation.id).set(formation);
  }

  delete(formation: Formation){
   return this.afs.collection(FORMATION_REF).doc(formation.id).delete();
  }

  subscribe(inscription: Inscription){
    return this.afs.collection(INSCRIPTION_REF).add(inscription);
  }

  saveSession(data: any){
    return this.afs.collection(SESSION).add(data);
  }

  getSession(): Observable<any[]> {
    return this.afs.collection(SESSION).get().pipe(
      map(querySnapshot => {
        return querySnapshot.docs.map(doc => {
          const item = doc.data() as any;
          item.id = doc.id;
          return item;
        });
      })
    );
   }

   deleteSession(id: string){
    return this.afs.collection(SESSION).doc(id).delete();
   }

   getSessionById(id: string) {
    return this.afs.collection(SESSION).doc(id).get();

  }


}
