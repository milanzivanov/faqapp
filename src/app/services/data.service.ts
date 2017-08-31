import { Injectable } from '@angular/core';
import { Question } from './../models/Question';

@Injectable()
export class DataService {

  questions:Question[];

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

  getQuestions() {
    return this.questions;
  }

  addQuestion(question: Question) {
    this.questions.unshift(question);
  }

}
