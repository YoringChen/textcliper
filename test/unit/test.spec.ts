import { expect } from 'chai'
import foo from '../../src/test'

describe('User', function (): void {
  describe('#save()', function (): void {
    it('should save without error', function (): void {
      expect(foo()).to.equal(22)
    })
  })
})
