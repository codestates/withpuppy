export function parseDate(date) {
  //! date === mysql createdAt ("2021-12-12T05:12:23.000Z")

  const test = '2021-12-12T05:12:23.000Z';

  const toNumeric = Date.parse(test.split('T').join(' '));

  const timeDiff = Date.now() - toNumeric;

  return timeDiff / 1000;
}
