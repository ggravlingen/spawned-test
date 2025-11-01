import { expect, test } from '@playwright/test'

// Test all pages with snapshot testing
const pages = [
  { path: '/', name: 'Home' },
  { path: '/open-source-projects', name: 'Open Source Projects' },
]

for (const page of pages) {
  test.describe(`${page.name} Page`, () => {
    test('should match visual snapshot in light mode', async ({ page: pw }) => {
      await pw.goto(page.path)

      // Wait for page to be fully loaded
      await pw.waitForLoadState('networkidle')

      // Take full page screenshot
      await expect(pw).toHaveScreenshot(
        `${page.name.toLowerCase().replace(/\s+/g, '-')}-light.png`,
        {
          fullPage: true,
        }
      )
    })

    test('should match visual snapshot in dark mode', async ({ page: pw }) => {
      await pw.goto(page.path)

      // Wait for page to be fully loaded
      await pw.waitForLoadState('networkidle')

      // Toggle to dark mode by clicking the dark mode button
      const darkModeButton = pw.locator(
        '[title*="dark mode" i], [title*="light mode" i]'
      )
      await darkModeButton.click()

      // Wait a bit for the theme transition
      await pw.waitForTimeout(500)

      // Take full page screenshot
      await expect(pw).toHaveScreenshot(
        `${page.name.toLowerCase().replace(/\s+/g, '-')}-dark.png`,
        {
          fullPage: true,
        }
      )
    })
  })
}
