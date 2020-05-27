import { some_class, some_function } from '../index'
import some_singleton from '../index'

describe('Sample', () => {
  test('some_class', async () => {
    let a = new some_class('string')
    expect(a.test()).toEqual('string')
  })

  test('some_function', async () => {
    expect(some_function('string')).toEqual('string')
  })

  test('some_singleton', async () => {
    expect(some_singleton.test()).toEqual('1')
  })
})
