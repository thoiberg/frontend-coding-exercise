import Chance from 'chance'

const chance = new Chance()

export const random = {
  string: (length = 8) => (chance.string({length})),
  integer: ({min = 0, max = 100} = {}) => (chance.integer({min, max}))
}