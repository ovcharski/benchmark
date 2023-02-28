import { test, expect } from '@playwright/test';

test('Wikipedia', async ({ page }) => {
    await page.goto('https://en.wikipedia.org/wiki/Main_Page');
    await page.getByPlaceholder('Search Wikipedia').click();
    await page.getByPlaceholder('Search Wikipedia').fill('Microsoft');
    await page.getByPlaceholder('Search Wikipedia').press('Enter');
    await page.getByPlaceholder('Search Wikipedia').click();
    await page.getByPlaceholder('Search Wikipedia').fill('Apple');
    await page.getByPlaceholder('Search Wikipedia').press('Enter');
});

test('GitHub', async ({ page }) => {
    await page.goto('https://github.com/');
    await page.getByPlaceholder('Search GitHub').click();
    await page.getByPlaceholder('Search GitHub').fill('raspberry');
    await page.getByPlaceholder('Search GitHub').press('Enter');
});

test('Reddit', async ({ page }) => {
    await page.goto('https://www.reddit.com/');
    await page.goto('https://www.reddit.com/search/?q=Sport');
    await page.goto('https://www.reddit.com/r/popular/');
});

test('Duckduckgo', async ({ page }) => {
    await page.goto('https://duckduckgo.com/');
    await page.getByPlaceholder('Search the web without being tracked').click();
    await page.getByPlaceholder('Search the web without being tracked').fill('time now');
    await page.getByPlaceholder('Search the web without being tracked').press('Enter');
});

test('Time.is', async ({ page }) => {
    await page.goto('https://time.is/');
    await page.getByRole('button', { name: 'AGREE', exact: true }).click();
});

test('Globo', async ({ page }) => {
    await page.goto('https://globo.com/');
});

test('QQ', async ({ page }) => {
    await page.goto('https://qq.com/');
});

test('Netflix', async ({ page }) => {
    await page.goto('https://netflix.com/');
});

test('Dzen', async ({ page }) => {
    await page.goto('https://dzen.ru/');
});

test('Bilibili', async ({ page }) => {
    await page.goto('https://bilibili.com/');
});

test('YouTube', async ({ page }) => {
    await page.goto('https://youtube.com/');
});

test('DeviantArt', async ({ page }) => {
    await page.goto('https://deviantart.com/');
});

test('Apple', async ({ page }) => {
    await page.goto('https://apple.com/');
});

test('React JS', async ({ page }) => {
    await page.goto('https://reactjs.org/');
});

test('Fandom', async ({ page }) => {
    await page.goto('https://fandom.com/');
});

test('Etsy', async ({ page }) => {
    await page.goto('https://etsy.com/');
});

test('BBC UK', async ({ page }) => {
    await page.goto('https://bbc.co.uk/');
});

test('Booking', async ({ page }) => {
    await page.goto('https://booking.com/');
});

test('Adobe', async ({ page }) => {
    await page.goto('https://adobe.com/');
});

test('Amazon', async ({ page }) => {
    await page.goto('https://amazon.com/');
});