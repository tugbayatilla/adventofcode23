import { expect } from 'chai';
import { add } from './index'

describe('add function', () => {
    it('should 1 + 2 returns 3', () => {
        expect(add(1, 2)).to.equal(3);
    })
});