const calculateDaysLeft = (date) => {
    const eventDate = new Date(date);
    const currentDate = new Date();

    // Calculate the difference in milliseconds between the event date and current date
    const timeDifference = eventDate.getTime() - currentDate.getTime();

    // Convert milliseconds to days
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return daysLeft;
  };

  export default calculateDaysLeft;