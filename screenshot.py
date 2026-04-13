import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={'width': 1920, 'height': 1080})
        print("Navigating to page...")
        await page.goto("https://3i2ehllt5rpo2.ok.kimi.link", wait_until="networkidle")
        await page.wait_for_timeout(3000) # wait for animations
        print("Taking screenshot...")
        await page.screenshot(path="site_screenshot.png", full_page=True)
        html = await page.content()
        with open("site.html", "w") as f:
            f.write(html)
        print("Done")
        await browser.close()

asyncio.run(main())
