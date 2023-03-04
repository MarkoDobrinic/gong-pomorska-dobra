import puppeteer from "https://deno.land/x/puppeteer@16.2.0/mod.ts";

const browser = await puppeteer.launch({
	headless: false,
	defaultViewport: null, //Defaults to an 800x600 viewport

	//by default puppeteer runs Chromium buddled with puppeteer
	args: ["--start-maximized", "--start-fullscreen"],
});

const [page] = await browser.pages();

const url = "https://oss.uredjenazemlja.hr/map";

await page.goto(url);

page.setDefaultNavigationTimeout(null);

page.on("response", async (e) => {
	if (e.url().includes("https://oss.uredjenazemlja.hr/OssWebServices/wfs")) {
		console.log(await e.json());
	}
});

const lookupButtonSelector =
	"#navbarSupportedContent > ul > div > li:last-child > div";

await page.waitForSelector(lookupButtonSelector);

await page.click(lookupButtonSelector);

const searchSelector = "#smartSearchInput";

await page.waitForSelector(searchSelector);

const VALID_SEARCH = "507 BANJ";
const INVALID_SEARCH = "1 BANJ";

await page.type(searchSelector, INVALID_SEARCH);

try {
	const resultSelector = "#mat-option-0";

	await page.waitForSelector(resultSelector);

	await page.click(resultSelector);
} catch {
	// pass
}
