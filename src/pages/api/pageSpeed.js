import lighthouse from 'lighthouse'

export default async function handler(req, res) {
  const chromeLauncher = await import('chrome-launcher')
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] })
  const options = {
    logLevel: 'info',
    output: 'json',
    port: chrome.port,
  }
  const runnerResult = await lighthouse('https://google.com', options)

  // `.report` is the HTML report as a string
  const reportJson = runnerResult.report

  // `.lhr` is the Lighthouse Result as a JS object
  console.log('Report is done for', runnerResult.lhr.finalDisplayedUrl)
  console.log(
    'Performance score was',
    runnerResult.lhr.categories.performance.score * 100
  )

  await chrome.kill()

  let success = true;
  if (!runnerResult.lhr.categories.performance.score) success = false;
  if (!runnerResult.lhr.categories.seo.score) success = false;
  if (!runnerResult.lhr.categories.accessibility.score) success = false;
  if (!runnerResult.lhr.categories['best-practices'].score) success = false;

  res.status(200).json({
    success,
    finalUrl: runnerResult.lhr.finalDisplayedUrl,
    performance: runnerResult.lhr.categories.performance.score * 100,
    seo: runnerResult.lhr.categories.seo.score * 100,
    accessibility: runnerResult.lhr.categories.accessibility.score * 100,
    bestPractices: runnerResult.lhr.categories['best-practices'].score * 100
  })
}
