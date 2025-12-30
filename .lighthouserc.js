function parseUrls(value) {
  return (value || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

module.exports = {
  ci: {
    collect: {
      url: parseUrls(process.env.LHCI_URLS),
      numberOfRuns: Number(process.env.LHCI_RUNS || 1),
      settings: {
        chromeFlags: ["--no-sandbox", "--disable-dev-shm-usage"],
      },
    },
    // Optional: if you want it NOT to fail the job on scores, comment this entire assert block.
    //   assert: {
    //     preset: "lighthouse:recommended"
    //   },
    //   upload: {
    //     target: "filesystem",
    //     outputDir: "reports/lighthouse"
    //   }
  },
};
