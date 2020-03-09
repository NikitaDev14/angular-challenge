import { Injectable } from '@angular/core';
import { FactoryNode, ChildNode, TreeNode } from 'src/app/models/tree.models';
import { getChildTime } from 'src/app/utils';

@Injectable({
  providedIn: 'root'
})
export class TreeService {
  readonly RANDOM_LIMIT = 15;

  private getRandomNumber(max = this.RANDOM_LIMIT, min = 1): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  private getRandomString(): string {
    return Math.random().toString(36).substr(2, 5);
  }

  private generateChildren(parent: FactoryNode): ChildNode[] {
    return [...new Array(this.getRandomNumber())].map((): ChildNode => {
      return {
        id: this.getRandomString(),
        name: this.getRandomNumber(parent.upperBound, parent.lowerBound).toString(),
        startTime: getChildTime(),
        endTime: getChildTime(),
      };
    });
  }

  private generateTree(): FactoryNode[] {
    return [...new Array(this.getRandomNumber())].map((): FactoryNode => {
      const lowerBound = this.getRandomNumber();

      const result: FactoryNode = {
        id: this.getRandomString(),
        name: this.getRandomString(),
        lowerBound,
        upperBound: lowerBound + this.getRandomNumber(),
        children: [],
      };

      return {
        ...result,
        children: this.generateChildren(result),
      };
    });
  }

  generate(generationContext: FactoryNode): TreeNode[] {
    if (generationContext !== null) {
      return this.generateChildren(generationContext);
    }

    return this.generateTree();
  }
}
