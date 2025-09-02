export const startAuctionCountdown = (dayjs, saleDate, updateCallback, pageType = "cards") => {
  let intervalId = null;

  const updateCountdown = () => {
    const dateWithoutTime = saleDate.split("T")[0];
    const dubaiTime = dayjs.tz(`${dateWithoutTime} 17:00:00`, "Asia/Dubai");
    const now = dayjs().tz("Asia/Dubai");

    if (dubaiTime.isBefore(now)) {
      // Auction is over
      updateCallback(pageType === "cards" ? "Auction Over" : "Auction Closed");
      clearInterval(intervalId);
    } else {
      // Calculate remaining time
      const daysLeft = dubaiTime.diff(now, "day");
      const hoursLeft = dubaiTime.diff(now, "hour") % 24;
      const minutesLeft = dubaiTime.diff(now, "minute") % 60;
      const secondsLeft = dubaiTime.diff(now, "second") % 60;

      let countdownString = "";

      if (daysLeft > 0) {
        countdownString += `${daysLeft}d : `;
      }
      if (hoursLeft > 0) {
        countdownString += `${hoursLeft}h : `;
      }
      if (minutesLeft > 0) {
        countdownString += `${minutesLeft}m : `;
      }
      countdownString += `${secondsLeft}s`;

      // Custom messages for details/auctions page
      if (pageType !== "cards") {
        if (hoursLeft <= 1 && daysLeft === 0) {
          if (minutesLeft > 0) {
            countdownString = `Last Call for Bids \n ${countdownString.trim()}`;
          } else if (secondsLeft > 0) {
            countdownString = `Hurry Up! Auction is ending! \n ${countdownString.trim()}`;
          }
        }
      }

      updateCallback(countdownString.trim());
    }
  };

  updateCountdown();

  intervalId = setInterval(updateCountdown, 1000);

  return intervalId;
};
