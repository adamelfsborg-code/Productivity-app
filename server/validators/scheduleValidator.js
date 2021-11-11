const { checkUndefined, checkLength } = require('./common.js');

const validateSchedule = ({id,name, dates}) => {
  const self = {
    id,
    name,
    dates
  }
  return Object.assign(self, checkUndefined(self), checkLength(self), checkDates(self))
}

module.exports = {
  validateSchedule
}