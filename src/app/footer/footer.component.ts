import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div style="background-color: white;">
    <p>
      Copy right &copy; Welcome to Kantamneni's Restaurant!
    </p>
    <p>
      Kantamneni's Restaurant will open in all branches on 24 hrs.
    </p>
    </div>
  `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
