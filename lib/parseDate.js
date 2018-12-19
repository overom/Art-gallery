const moment = require('moment');
require('moment/locale/fr');

const messageCreationDate = date => moment(date, ['YYYY-MM-DD']).format('LL');
module.exports = messageCreationDate;
