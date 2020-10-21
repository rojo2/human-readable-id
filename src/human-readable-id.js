import crypto from 'crypto'

/**
 * Expected length
 * @constant {number}
 */
const EXPECTED_LENGTH = 6 

/**
 * Char dictionary
 * @constant {string}
 */
const DICTIONARY = 'BCDFGHJKLMNPQRSTUVWXYZ0123456789'

/**
 * Crea un identificador seguro para ser usado por humanos.
 * @param {number} [expectedLength=5]
 * @param {string} [dictionary]
 * @returns {string}
 */
export function createHumanReadableId(expectedLength = EXPECTED_LENGTH, dictionary = DICTIONARY) {
	if (!expectedLength) {
		throw new Error('Invalid expected length')
	}

	if (!dictionary || typeof dictionary !== 'string' || dictionary.length < 4) {
		throw new Error('Invalid dictionary')
	}

  const BASE = 2
  const BITS_PER_BYTE = 8

  const bitLength = Math.ceil(Math.log(dictionary.length) / Math.log(BASE))
  const bytes = crypto.randomBytes(Math.ceil(expectedLength * bitLength / BITS_PER_BYTE))

  let bits = ''
  for (let index = 0; index < bytes.length; index++) {
    bits += bytes[index].toString(BASE).padStart(BITS_PER_BYTE, 0)
  }

  let string = ''
  for (let index = 0; index < bits.length; index += bitLength) {
    const bitChunk = bits.substr(index, bitLength)
    const dictionaryIndex = parseInt(bitChunk, BASE)
    string += dictionary[dictionaryIndex]
  }

  return string
}

export default createHumanReadableId
