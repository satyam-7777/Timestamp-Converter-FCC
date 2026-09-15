export function getResultItems(result) {
  return [
    {
      label: "API URL",
      value: `[base_url]/api/${result.input}`,
      href: `/api/${encodeURIComponent(result.input)}`,
    },
    { label: "Unix Timestamp (seconds)", value: `${result.unixSeconds} seconds` },
    { label: "Unix Timestamp (milliseconds)", value: `${result.unix} ms` },
    { label: "UTC", value: result.utc },
    { label: "IST", value: result.ist },
    { label: "ISO 8601", value: result.iso },
    { label: "Local Date & Time", value: result.local },
  ];
}
