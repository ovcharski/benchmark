import { test, expect } from '@playwright/test';

test('Open multiple sites in tabs', async ({ context }) => {
  // Create first page/tab
  const page = await context.newPage();
  
  // List of URLs and their associated actions
  const sites = [
    {
      url: 'https://en.wikipedia.org/wiki/Main_Page',
      actions: async (page) => {
        expect(await page.title()).toContain('Wikipedia');
      }
    },
    {
      url: 'https://github.com/',
      actions: async (page) => {
        expect(await page.title()).toContain('GitHub');
      }
    },
    {
      url: 'https://duckduckgo.com/',
      actions: async (page) => {
        expect(await page.title()).toContain('DuckDuckGo');
      }
    },
    {
      url: 'https://www.reddit.com/r/popular/top/', actions: null },
    { url: 'https://globo.com/', actions: null },
    { url: 'https://qq.com/', actions: null },
    { url: 'https://worldathletics.org/', actions: null },
    { url: 'https://dzen.ru/', actions: null },
    { url: 'https://bilibili.com/', actions: null },
    // { url: 'https://youtube.com/', actions: null },
    { url: 'https://deviantart.com/', actions: null },
    // { url: 'https://apple.com/', actions: null },
    { url: 'https://reactjs.org/', actions: null },
    { url: 'https://fandom.com/', actions: null },
    { url: 'https://etsy.com/', actions: null },
    { url: 'https://bbc.co.uk/', actions: null },
    // { url: 'https://booking.com/', actions: null },
    // { url: 'https://adobe.com/', actions: null },
    // { url: 'https://amazon.com/', actions: null },
    { url: 'https://netflix.com', actions: null },
    { url: 'https://canva.com/', actions: null },
    { url: 'https://quora.com/', actions: null },
    { url: 'https://zoom.com/', actions: null },
    // { url: 'https://tiktok.com/', actions: null },
    // { url: 'https://twitch.tv/', actions: null },
    // { url: 'https://spotify.com/', actions: null },
    { url: 'https://stackoverflow.com/', actions: null },
    { url: 'https://wordpress.com/', actions: null },
    { url: 'https://imdb.com/', actions: null },
    // { url: 'https://microsoft.com/', actions: null },
    // { url: 'https://yahoo.com/', actions: null },
    { url: 'https://linkedin.com/', actions: null },
    // { url: 'https://bing.com/', actions: null },
    { url: 'https://videocardz.com/', actions: null },
    { url: 'https://www.pinterest.com/', actions: null },
    { url: 'https://www.pepsi.com/', actions: null }
  ];

  // Open each site in a new tab and perform actions if specified
  for (const site of sites) {
    // Wait for 3 seconds before opening a new tab
    await page.waitForTimeout(1000);
    // Create a new tab
    const newPage = await context.newPage();
    
    // Navigate to the URL
    await newPage.goto(site.url);
    
    // If there are specific actions defined for this site, perform them
    if (site.actions) {
      await site.actions(newPage);
    }
  }
});