import hello from '../src/hello'

describe('hello', () => {
  test('it returns "hello world"', () => {
    expect(hello()).toBe('hello world')
  })
})
