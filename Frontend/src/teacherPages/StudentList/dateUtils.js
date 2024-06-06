export const isToday = (date) => {
    const today = new Date();
    const someDate = new Date(date);
    return today.toDateString() === someDate.toDateString();
  };
  