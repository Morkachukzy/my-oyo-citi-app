import {Component, Input, OnInit} from '@angular/core';
import {IPoll} from '../../../interfaces/poll';


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
  @Input() poll: IPoll = {
    question: ``,
    result: {
      positive: {
        remark: ``,
        count: 0,
      },
      negative: {
        remark: ``,
        count: 0,
      }
    }
  };

  constructor() {
  }

  get totalParticipants() {
    return this.pollPositiveCount + this.pollNegativeCount;
  };

  get pollQuestion() {
    return this.poll.question;
  };

  get pollPositiveRemark() {
    return  this.poll.result.positive.remark;
  };

  get pollNegativeRemark() {
    return this.poll.result.positive.remark;
  };

  get pollPositiveCount() {
    return this.poll.result.positive.count;
  };
  get pollPositivePercentage() {
    return this.poll.result.positive.count / this.totalParticipants * 100;
  };
  get pollNegativePercentage() {
    return this.poll.result.positive.count / this.totalParticipants * 100;
  };

  get pollNegativeCount() {
    return this.poll.result.positive.count;
  };
  get displayPositiveRemark(){
    return `${this.pollPositiveCount} people (${this.pollPositivePercentage.toFixed(2)}%) said: "${this.pollPositiveRemark}"`;
  }

  get displayNegativeRemark() {
    return `${this.pollNegativeCount} people (${this.pollNegativePercentage.toFixed(2)}%) said: ${this.pollNegativeRemark}`;
  }
    ngOnInit() {
    animatePollBar(this.pollPositivePercentage, 'positiveBar' );
    animatePollBar(this.pollNegativePercentage, 'negativeBar' );
  }

  goToPollPage() {
  }
}