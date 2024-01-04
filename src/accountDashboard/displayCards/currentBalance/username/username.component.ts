import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.less']
})
export class UsernameComponent implements OnInit {

  data: any;

  constructor(
    private matDialogRef: MatDialogRef<UsernameComponent>,
    @Inject(MAT_DIALOG_DATA) private injectedData: any
    ) { }

  ngOnInit(): void {
    this.data = this.injectedData;
  }

  closeModal(): void {
    this.matDialogRef.close();
  }

}
