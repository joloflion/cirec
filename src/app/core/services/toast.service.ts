import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Add this constant ⤵
export const TOAST_STATE = {
  success: 'success-toast',
  warning: 'warning-toast',
  danger: 'danger-toast'
};

@Injectable({
  providedIn: 'root'
})

export class ToastService {


   public showsToast$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
   public toastMessage$: BehaviorSubject<string> = new BehaviorSubject<string>('');
   public toastState$: BehaviorSubject<string> = new BehaviorSubject<string>(TOAST_STATE.success);
  constructor() {

  }

  showToast(toastState: string, toastMsg: string): void {
    this.toastState$.next(toastState);
    this.toastMessage$.next(toastMsg);
    this.showsToast$.next(true);
  }

  dismissToast(): void {
    this.showsToast$.next(false);
  }
}
