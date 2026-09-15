const convertTimestamp = (req, res, next) => {
  const timestamp = req.params.date;

  const date =
    timestamp === undefined || timestamp === ""
      ? new Date()
      : /^-?\d+$/.test(timestamp)
        ? new Date(Number(timestamp))
        : new Date(timestamp);

  if (Number.isNaN(date.getTime())) {
    return res.status(400).json({
      error: "Invalid Date",
    });
  }

  res.status(200).json({
    input: timestamp ?? "",
    unix: date.getTime(),
    unixSeconds: Math.floor(date.getTime() / 1000),
    utc: date.toUTCString(),
    ist: date.toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "medium",
    }),
    iso: date.toISOString(),
    local: date.toLocaleString("en-IN"),
  });
};

module.exports = { convertTimestamp };
