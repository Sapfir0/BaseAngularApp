import { Component, OnInit } from '@angular/core';
// import { ApiInteractionService } from 'api_interaction_services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers: [ApiInteractionService]
})
export class AppComponent implements OnInit {
  title = 'template-app';
  comments = ['message1', 'message2'];
  // constructor(public api: ApiInteractionService) {
  // }

  ngOnInit() {}
}

if (typeof Worker !== 'undefined') {
  // Create a new
  const worker = new Worker(new URL('./app.worker', import.meta.url));
  worker.onmessage = ({ data }) => {
    console.log(`page got message: ${data}`);
  };
  worker.postMessage('hello');
} else {
  // Web Workers are not supported in this environment.
  // You should add a fallback so that your program still executes correctly.
}
