export function parseDate(timestamp) {
  //! date === mysql createdAt ("2021-12-12T05:12:23.000Z")

  const oldMs = Date.parse(timestamp.split('T').join(' '));

  const timeDiff = Date.now() - oldMs;

  //1. date
  const date = Math.trunc(timeDiff / 1000 / 60 / 60 / 24);
  if (date > 0) return `${date}일전`;

  //2. hour
  const hour = Math.trunc(timeDiff / 1000 / 60 / 60);
  if (hour > 0) return `${hour}시간전`;

  //3. minute
  const minute = Math.trunc(timeDiff / 1000 / 60);
  if (minute > 0) return `${minute}분전`;

  const second = Math.trunc(timeDiff / 1000);
  if (second > 0) return `${second}초전`;
  if (second === 0) return `방금전`;
}
