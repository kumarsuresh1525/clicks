const assert = require('assert');
const Main = require('../main');

describe('Test Solution', () => {
  it('Should return correct value with different ip within different hours', () => {
    const clicks = [
      { "ip":"11.11.11.11", "timestamp":"3/11/2016 13:02:40", "amount": 8 },
      { "ip":"11.11.11.11", "timestamp":"3/11/2016 13:33:34", "amount": 12 },
      { "ip":"11.11.11.11", "timestamp":"3/11/2016 14:42:24", "amount": 8 },
      { "ip":"11.11.11.11", "timestamp":"3/11/2016 15:47:44", "amount": 6.25 },
    ];

    const actual = (new Main).run(clicks);
    const expected = [
      { "ip":"11.11.11.11", "timestamp":"3/11/2016 13:33:34", "amount": 12 },
      { "ip":"11.11.11.11", "timestamp":"3/11/2016 14:42:24", "amount": 8 },
      { "ip":"11.11.11.11", "timestamp":"3/11/2016 15:47:44", "amount": 6.25 }
    ];
    assert.deepEqual(actual, expected);
  });

  it('Should return clicks with different ip', () => {
    const expected = [
      { "ip":"55.55.55.55", "timestamp":"3/11/2016 11:02:40", "amount": 8 },
      { "ip":"44.44.44.44", "timestamp":"3/11/2016 12:33:34", "amount": 8 },
      { "ip":"33.33.33.33", "timestamp":"3/11/2016 13:42:24", "amount": 8 },
      { "ip":"22.22.22.22", "timestamp":"3/11/2016 14:47:44", "amount": 6.25 }
    ];

    const actual = (new Main).run(expected);
    assert.deepEqual(actual, expected);
  });

  it('Should test when clicks are for same ip, period and amount', () => {
    const clicks = [
      { "ip":"11.11.11.11", "timestamp":"3/11/2016 13:02:40", "amount": 8 },
      { "ip":"11.11.11.11", "timestamp":"3/11/2016 13:33:34", "amount": 8 },
      { "ip":"11.11.11.11", "timestamp":"3/11/2016 13:42:24", "amount": 8 },
      { "ip":"11.11.11.11", "timestamp":"3/11/2016 13:47:44", "amount": 8 }
    ];

    const actual = (new Main).run(clicks);
    const expected = [{ "ip":"11.11.11.11", "timestamp":"3/11/2016 13:02:40", "amount": 8 }];
    assert.deepEqual(actual, expected);
  });
});