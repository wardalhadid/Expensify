const moment = jest.requireActual('moment');

const mockedMoment = (timestamp = 0) => {
  return moment(timestamp);
};

export default mockedMoment;