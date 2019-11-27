function Main() {
  if (!new.target) {
    new Main();
  }

  let final = [];
  const result = new Map();

  function getTimestamp(timestamp) {
    const date = new Date(timestamp);
    date.setMinutes(0);
    date.setSeconds(0);
    return date.getTime();
  }

  function deleteClicks(clicks) {
    clicks.forEach((click) => {
      if (result.has(click.ip) && result.get(click.ip) <= 10) {
        final.push(click);
      }
    });
  }
  
  this.run = function(clicks) {
    clicks.forEach((click) => {
      if (result.has(click.ip)) {
        result.set(click.ip, result.get(click.ip) + 1);
      } else {
        result.set(click.ip, 1);
      }
    });
    // remove same ip if count is more than 10
    deleteClicks(clicks);
    result.clear();
    final.forEach((click) => {
      const key = getTimestamp(click.timestamp) + click.ip;
      const existing = result.get(key);
      if (result.has(key)) {
        if (existing.amount < click.amount) {
          result.set(key, click);
        }
      } else {
        result.set(key, click)
      }
    });
    final = [];
    for (value of result.values()) {
      final.push(value);
    }
    return final;
  }
}

module.exports = Main;