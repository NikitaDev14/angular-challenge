import { Injectable } from '@angular/core';
import { FactoryNode, ChildNode } from 'src/app/models/entity.models';

@Injectable({
  providedIn: 'root'
})
export class TreeService {
  readonly RANDOM_LIMIT = 15;

  private getRandomNumber(): number {
    return Math.floor(Math.random() * 6) + 1;
  }

  private getRandomString(): string {
    return Math.random().toString(36).substr(2, 5);
  }

  private generateChildren(): ChildNode[] {
    return [...new Array(this.getRandomNumber())].map((): ChildNode => {
      return {
        id: this.getRandomString(),
        name: this.getRandomString(),
        startTime: new Date(),
        endTime: new Date(),
      };
    });
  }

  generate(generationContext): FactoryNode[] {
    console.log('service');
    return [...new Array(this.getRandomNumber())].map((): FactoryNode => {
      return {
        id: this.getRandomString(),
        name: this.getRandomString(),
        lowerBound: this.getRandomNumber(),
        upperBound: this.getRandomNumber(),
        children: this.generateChildren(),
      };
    });
  }
}
