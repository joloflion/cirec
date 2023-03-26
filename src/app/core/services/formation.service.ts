import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable, NgZone } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Formation } from '../models/formation';
import { Inscription } from '../models/inscription';

const FORMATION_REF = "formations";
const INSCRIPTION_REF = "inscriptions";

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
}
