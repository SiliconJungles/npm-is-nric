export function isNRIC(str: string): boolean {
  if (str.length != 9) {
    return false
  }

  str = str.toUpperCase()

  const icArray: any[] = []
  for (let i = 0; i < 9; i++) {
    icArray[i] = str.charAt(i)
  }

  icArray[1] = parseInt(icArray[1], 10) * 2
  icArray[2] = parseInt(icArray[2], 10) * 7
  icArray[3] = parseInt(icArray[3], 10) * 6
  icArray[4] = parseInt(icArray[4], 10) * 5
  icArray[5] = parseInt(icArray[5], 10) * 4
  icArray[6] = parseInt(icArray[6], 10) * 3
  icArray[7] = parseInt(icArray[7], 10) * 2

  let weight = 0
  for (let i = 1; i < 8; i++) {
    weight += icArray[i]
  }

  const offset = icArray[0] == 'T' || icArray[0] == 'G' ? 4 : 0
  const temp = (offset + weight) % 11

  const st = ['J', 'Z', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A']
  const fg = ['X', 'W', 'U', 'T', 'R', 'Q', 'P', 'N', 'M', 'L', 'K']

  let theAlpha
  if (icArray[0] == 'S' || icArray[0] == 'T') {
    theAlpha = st[temp]
  } else if (icArray[0] == 'F' || icArray[0] == 'G') {
    theAlpha = fg[temp]
  }

  return icArray[8] === theAlpha
}
