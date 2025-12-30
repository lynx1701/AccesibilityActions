function splitUrls(str) {
  return (str || "")
    .split(/[\r\n,]+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

const NORMAL_UA =
  process.env.LHCI_UA ||
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36";

module.exports = {
  ci: {
    collect: {
      url: splitUrls(process.env.LHCI_URLS),
      numberOfRuns: Number(process.env.LHCI_RUNS || 1),
      settings: {
        extraHeaders: {
          "Accept-Language": "en-US,en;q=0.9",
        },
        chromeFlags: [
          "--no-sandbox",
          "--disable-dev-shm-usage",
          "--disable-gpu",
          "--disable-blink-features=AutomationControlled",
          `--user-agent=${NORMAL_UA}`,
        ],
      },
    },
    upload: {
      target: "filesystem",
      outputDir: "reports/lighthouse",
    },
  },
};
