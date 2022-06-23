import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
  let browser;
  let page;
  jest.setTimeout(60000);
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 250,
      ignoreDefaultArgs: ['--disable-extensions'], // ignores default setting that causes timeout errors
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event .event__Details');
    expect(eventDetails).toBeNull();
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.event .details-btn');
    const eventDetails = await page.$('.event .event__Details');
    expect(eventDetails).toBeDefined();
  });
});

describe('filter events by city', () => {
  let browser;
  let page;
  jest.setTimeout(60000);
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 250,
      ignoreDefaultArgs: ['--disable-extensions'], // ignores default setting that causes timeout errors
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  test('show events from all cities if user has not searched for one', async () => {
    const eventCount = await page.$$eval('.event', (e) => e.length);
    expect(eventCount).toBe(3);
  });

  test('show list of suggestions when user searches for a city', async () => {
    await page.type('.city', 'Berlin', { delay: 100 });
    const citiesCount = await page.$$eval('.suggestions li', (e) => e.length);
    expect(citiesCount).toBe(2);
  });

  test('let user select a city from the suggested list', async () => {
    await page.reload();
    await page.type('.city', 'Berlin', { delay: 100 });
    await page.click('.suggestions li');
    const eventCount = await page.$$eval('.event', (e) => e.length);
    expect(eventCount).toBe(1);
  });
});
