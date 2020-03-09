import { Injectable } from '@angular/core';
import { FactoryNode, ChildNode, TreeNode, GenerateTreePayload } from 'src/app/models/tree.models';
import { getChildTime } from 'src/app/utils';
import { Constants } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class TreeService {
  private getRandomNumber(max = Constants.maxChildrenCount, min = 1): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  private getRandomString(): string {
    return Math.random().toString(36).substr(2, 5);
  }

  private generateChildren(
    parent: FactoryNode,
    params: GenerateTreePayload,
  ): ChildNode[] {
    return [...new Array(params.count)].map((): ChildNode => {
      return {
        id: this.getRandomString(),
        name: this.getRandomNumber(parent.upperBound, parent.lowerBound).toString(),
        startTime: getChildTime(),
        endTime: getChildTime(),
      };
    });
  }

  private generateTree(params: GenerateTreePayload): FactoryNode[] {
    return [...new Array(params.count)].map((): FactoryNode => {
      const lowerBound = this.getRandomNumber(params.upperBound - 1, params.lowerBound);

      const result: FactoryNode = {
        id: this.getRandomString(),
        name: this.getRandomString(),
        lowerBound,
        upperBound: this.getRandomNumber(params.upperBound, lowerBound),
        children: [],
      };

      return {
        ...result,
        children: this.generateChildren(result,{
          ...params,
          count: this.getRandomNumber(),
        }),
      };
    });
  }

  generate(
    generationContext: FactoryNode,
    generationParams: GenerateTreePayload,
  ): TreeNode[] {
    if (generationContext !== null) {
      return this.generateChildren(generationContext, generationParams);
    }

    return this.generateTree(generationParams);
  }
}
