import createHumanReadableId from './human-readable-id.js'

describe('Human-readable id', () => {
  it('should generate a human-readable id', () => {
    expect(createHumanReadableId(2)).to.match(/^[BCDFGHJKLMNPQRSTVWXYZ0123456789]{2,}$/)
    expect(createHumanReadableId()).to.match(/^[BCDFGHJKLMNPQRSTVWXYZ0123456789]{6,}$/)
    expect(() => createHumanReadableId(0)).to.throw()
    expect(() => createHumanReadableId(6, '')).to.throw()
  })
})
