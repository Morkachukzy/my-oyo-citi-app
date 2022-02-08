import {Component, Input, OnInit} from '@angular/core';


const animatePollBar = (percentage: number, elementId: string) => {
  const element = document.getElementById(elementId);
  let width = 1;
  const frame = () => {
    if (width >= percentage) {
      clearInterval(id);
    } else {
      width++;
      element.style.width = width + '%';
    }
  };
  const id = setInterval(frame, 20);
};

@Component({
  selector: 'app-participation-poll',
  templateUrl: './participation-poll.component.html',
  styleUrls: ['./participation-poll.component.scss'],
})


export class ParticipationPollComponent implements OnInit {
  @Input() poll: any = {};
  question: ``;
  positiveAnswer: any = {};
  negativeAnswer: any = {};


  constructor() {
  }

  get totalParticipants() {
    return this.pollPositiveCount + this.pollNegativeCount;
  };

  get pollQuestion() {
    return  this.question;
  };

  get pollPositiveRemark() {
    return  this.positiveAnswer.remark;
  };

  get pollNegativeRemark() {
    return this.negativeAnswer.remark;
  };

  get pollPositiveCount() {
    return this.positiveAnswer.count;
  };
  get pollPositivePercentage() {
    return this.positiveAnswer.count / this.totalParticipants * 100;
  };
  get pollNegativePercentage() {
    return this.negativeAnswer.count / this.totalParticipants * 100;
  };

  get pollNegativeCount() {
    return this.negativeAnswer.count;
  };
  get displayPositiveRemark(){
    return `${this.pollPositiveCount} people (${this.pollPositivePercentage.toFixed(2)}%) said: "${this.pollPositiveRemark}"`;
  }

  get displayNegativeRemark() {
    return `${this.pollNegativeCount} people (${this.pollNegativePercentage.toFixed(2)}%) said: ${this.pollNegativeRemark}`;
  }
    ngOnInit() {
    this.setPollValues();
    animatePollBar(this.pollPositivePercentage, 'positiveBar' );
    animatePollBar(this.pollNegativePercentage, 'negativeBar' );
  }

  goToPollPage() {
  }

  setPollValues() {
    this.question = this.poll.question;
    this.positiveAnswer = this.poll.result.positive;
    this.negativeAnswer = this.poll.result.negative;
  }
}
