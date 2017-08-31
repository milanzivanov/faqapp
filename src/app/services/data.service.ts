import { Injectable } from '@angular/core';
import { Question } from './../models/Question';

@Injectable()
export class DataService {

  questions: Question[];

  constructor() {
    // this.questions = [
    //   {
    //     text: 'What is your name?',
    //     answer: 'Milan',
    //     hide: true
    //   },
    //   {
    //     text: 'What is your favorite color?',
    //     answer: 'My favorite color is green',
    //     hide: true

    //   },
    //   {
    //     text: 'What is favorite language?',
    //     answer: 'It is Angular for now',
    //     hide: true
    //   }
    // ];
  }

    // Get Question from local strage
  getQuestions() {
    if (localStorage.getItem('questions') === null) {
        this.questions = [];
    } else {
      this.questions = JSON.parse(localStorage.getItem('questions')
      );
    }
    return this.questions;
  }

  // Add Question to local strage
  addQuestion(question: Question) {
    this.questions.unshift(question);

    // init local var
    let questions;

    if (localStorage.getItem('questions') === null) {
      questions = [];
      // Push new question
      questions.unshift(question);
      // set new arrey to localStorage
      localStorage.setItem('questions', JSON.stringify(questions));
    } else {
      questions = JSON.parse(localStorage.getItem('questions'));
      // Add new questions
      questions.unshift(question);
      // Re set localStorage
      localStorage.setItem('questions', JSON.stringify(questions));
    }
  }

  // Remove Question from local strage
  removeQuestion(question: Question) {
    for ( let i = 0; i < this.questions.length; i++ ) {
      if (question === this.questions[i]) {
        this.questions.splice(i, 1);
        localStorage.setItem('questions', JSON.stringify(this.questions));
      }
    }
  }

}
