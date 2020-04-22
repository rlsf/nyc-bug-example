const { assert } = require('chai')
const Module = require('../lib/Module')

describe('Module', () => {
  it('calls constructor successfully', () => {
    const module = new Module()
    assert.exists(module)
  })
})
