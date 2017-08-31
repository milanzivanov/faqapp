import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  questions: Object[];
  constructor() {
    this.questions = [
      {
        text: 'What is your name?',
        answer: 'Milan',
        hide: true
      },
      {
        text: 'What is your favorite color?',
        answer: 'My favorite color is green',
        hide: true

      },
      {
        text: 'What is favorite language?',
        answer: 'It is Angular for now',
        hide: true
      }
    ];
  }

  ngOnInit() {
  }

}