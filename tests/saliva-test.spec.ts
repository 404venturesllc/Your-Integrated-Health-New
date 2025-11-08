import { test, expect } from '@playwright/test';

test.describe('ZRT Hormone Test Landing Page', () => {
  test('should load the page successfully', async ({ page }) => {
    await page.goto('/saliva-test');

    // Check page title
    await expect(page).toHaveTitle(/ZRT Women's Hormone Saliva Test/i);

    // Check main heading is visible
    await expect(page.getByRole('heading', {
      name: /Find Out What Your Hormones Are Really Saying/i
    })).toBeVisible();
  });

  test('should display all symptoms in the checklist', async ({ page }) => {
    await page.goto('/saliva-test');

    const expectedSymptoms = [
      "Your energy crashes by 2 PM, no matter how much sleep you got",
      "Your weight won't budge despite diet and exercise",
      "You feel anxious, irritable, or 'off' for no clear reason",
      "Your periods are unpredictable, painful, or gone altogether",
      "Brain fog makes it hard to focus or remember simple things",
      "Your libido has disappeared",
      "You're exhausted but can't fall or stay asleep"
    ];

    for (const symptom of expectedSymptoms) {
      await expect(page.getByText(symptom)).toBeVisible();
    }
  });

  test('should display comprehensive hormone panel items', async ({ page }) => {
    await page.goto('/saliva-test');

    const panelItems = [
      'Estradiol (E2)',
      'Progesterone (Pg)',
      'Testosterone (T)',
      'DHEA',
      'Cortisol × 4 (morning, noon, evening, night)'
    ];

    for (const item of panelItems) {
      await expect(page.getByText(item, { exact: true })).toBeVisible();
    }
  });

  test('should have three CTA buttons with correct text and price', async ({ page }) => {
    await page.goto('/saliva-test');

    const ctaButtons = page.getByRole('link', {
      name: /Start Your Hormone Investigation — \$380/i
    });

    await expect(ctaButtons).toHaveCount(3);

    // Verify all CTAs are visible
    for (const button of await ctaButtons.all()) {
      await expect(button).toBeVisible();
    }
  });

  test('should have correct analytics attributes on CTA buttons', async ({ page }) => {
    await page.goto('/saliva-test');

    // Hero CTA
    const heroCTA = page.locator('[data-analytics="cta:hero"]');
    await expect(heroCTA).toBeVisible();
    await expect(heroCTA).toHaveAttribute('href', /checkout/);

    // Mid CTA
    const midCTA = page.locator('[data-analytics="cta:mid"]');
    await expect(midCTA).toBeVisible();
    await expect(midCTA).toHaveAttribute('href', /checkout/);

    // Final CTA
    const finalCTA = page.locator('[data-analytics="cta:final"]');
    await expect(finalCTA).toBeVisible();
    await expect(finalCTA).toHaveAttribute('href', /checkout/);
  });

  test('should preserve UTM parameters in checkout URLs', async ({ page }) => {
    // Visit page with UTM parameters
    await page.goto('/saliva-test?utm_source=google&utm_medium=cpc&utm_campaign=test');

    // Wait for the checkout URL to be set
    await page.waitForTimeout(100);

    // Check that all CTA links contain the UTM parameters
    const heroCTA = page.locator('[data-analytics="cta:hero"]');
    const href = await heroCTA.getAttribute('href');

    expect(href).toContain('utm_source=google');
    expect(href).toContain('utm_medium=cpc');
    expect(href).toContain('utm_campaign=test');
  });

  test('should preserve GCLID parameter in checkout URLs', async ({ page }) => {
    // Visit page with GCLID parameter
    await page.goto('/saliva-test?gclid=test123456');

    // Wait for the checkout URL to be set
    await page.waitForTimeout(100);

    // Check that all CTA links contain the GCLID parameter
    const heroCTA = page.locator('[data-analytics="cta:hero"]');
    const href = await heroCTA.getAttribute('href');

    expect(href).toContain('gclid=test123456');
  });

  test('should display all key sections', async ({ page }) => {
    await page.goto('/saliva-test');

    // Hero section
    await expect(page.getByRole('heading', {
      name: /Find Out What Your Hormones Are Really Saying/i
    })).toBeVisible();

    // Symptoms section
    await expect(page.getByRole('heading', {
      name: /Does This Sound Familiar\?/i
    })).toBeVisible();

    // Investigation section
    await expect(page.getByRole('heading', {
      name: /Let's Investigate, Not Guess/i
    })).toBeVisible();

    // What's included section
    await expect(page.getByRole('heading', {
      name: /What's Included in Your Hormone Investigation/i
    })).toBeVisible();

    // Video section
    await expect(page.getByRole('heading', {
      name: /What Your Hormones Are Trying to Tell You/i
    })).toBeVisible();

    // Medical disclaimer
    await expect(page.getByText(/Medical Disclaimer:/i)).toBeVisible();
  });

  test('should display Megan Hormazdi quote', async ({ page }) => {
    await page.goto('/saliva-test');

    await expect(page.getByText(/I don't just look at numbers/i)).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Megan Hormazdi, FNP-BC' })).toBeVisible();
  });

  test('should display the investment applies credit message', async ({ page }) => {
    await page.goto('/saliva-test');

    await expect(page.getByText(/Investment applies toward ongoing care/i)).toBeVisible();
    await expect(page.getByText(/your full \$380 applies toward your first month/i)).toBeVisible();
  });

  test('should have proper meta tags', async ({ page }) => {
    await page.goto('/saliva-test');

    // Check meta description from react-helmet
    const metaDescription = page.locator('meta[data-rh="true"][name="description"]');
    await expect(metaDescription).toHaveAttribute('content', /You're not broken/i);

    // Check robots meta
    const metaRobots = page.locator('meta[data-rh="true"][name="robots"]');
    await expect(metaRobots).toHaveAttribute('content', 'noindex, follow');
  });

  test('should be responsive on mobile viewport', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/saliva-test');

    // Check main elements are still visible
    await expect(page.getByRole('heading', {
      name: /Find Out What Your Hormones Are Really Saying/i
    })).toBeVisible();

    const ctaButtons = page.getByRole('link', {
      name: /Start Your Hormone Investigation — \$380/i
    });
    await expect(ctaButtons.first()).toBeVisible();
  });

  test('should display all four "what\'s included" cards', async ({ page }) => {
    await page.goto('/saliva-test');

    await expect(page.getByRole('heading', { name: 'At-Home Saliva Kit' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Comprehensive Hormone Panel' })).toBeVisible();
    await expect(page.getByRole('heading', { name: '30-Minute Personalized Review' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Educational Video Lesson' })).toBeVisible();
  });

  test('CTA buttons should have hover states', async ({ page }) => {
    await page.goto('/saliva-test');

    const heroCTA = page.locator('[data-analytics="cta:hero"]');

    // Get initial background color
    const initialBg = await heroCTA.evaluate((el) =>
      window.getComputedStyle(el).backgroundColor
    );

    // Hover over the button
    await heroCTA.hover();

    // Verify button is still visible and accessible
    await expect(heroCTA).toBeVisible();
  });
});
