const onDataChange = (data: Object, callback: Function) => {
  const users = data;
  let bookings = [];

  for (const userData in users) {
    const bookingData: Object = users[userData as keyof typeof users];
    for (const data in bookingData) {
      bookings.push({
        key: data,
        ...bookingData[data as keyof typeof bookingData],
      });
    }
  }
  return callback(bookings);
};

export {onDataChange}