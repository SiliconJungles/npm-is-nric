import { isNRIC } from '../src/IsNRIC'
import { invalidF, invalidG, invalidS, invalidT, validF, validG, validS, validT } from './NRICSamples'

describe('isNRIC', () => {
  test('Valid Sxxxxxxxx', async () => {
    validS.forEach(it => expect(isNRIC(it)).toBeTruthy())
  })

  test('Invalid Sxxxxxxxx', async () => {
    invalidS.forEach(it => expect(isNRIC(it)).toBeFalsy())
  })

  test('Valid Txxxxxxxx', async () => {
    validT.forEach(it => expect(isNRIC(it)).toBeTruthy())
  })

  test('Invalid Txxxxxxxx', async () => {
    invalidT.forEach(it => expect(isNRIC(it)).toBeFalsy())
  })

  test('Valid Fxxxxxxxx', async () => {
    validF.forEach(it => expect(isNRIC(it)).toBeTruthy())
  })

  test('Invalid Fxxxxxxxx', async () => {
    invalidF.forEach(it => expect(isNRIC(it)).toBeFalsy())
  })

  test('Valid Gxxxxxxxx', async () => {
    validG.forEach(it => expect(isNRIC(it)).toBeTruthy())
  })

  test('Invalid Gxxxxxxxx', async () => {
    invalidG.forEach(it => expect(isNRIC(it)).toBeFalsy())
  })

  test('8 chars invalid', async () => {
    expect(isNRIC('S222516Z')).toBeFalsy()
  })

  test('10 chars invalid', async () => {
    expect(isNRIC('S22251660Z')).toBeFalsy()
  })

  test('Invalid Format', async () => {
    expect(isNRIC('000000000')).toBeFalsy()
  })

  test('Invalid Format #2', async () => {
    expect(isNRIC('AAAAAAAAA')).toBeFalsy()
  })

  test('Invalid Format #3', async () => {
    expect(isNRIC(111111111 as any)).toBeFalsy()
  })
})
