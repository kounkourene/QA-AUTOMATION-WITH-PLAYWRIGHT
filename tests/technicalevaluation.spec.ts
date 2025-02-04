import { expect, test } from "@playwright/test";
import { login } from "../tests/technicalevaluation.json";

test.beforeEach(async ({ page }) => {
  page.goto(login.url);
  await page.locator("#username").fill(login.userName);
  await page.locator("#password").fill(login.password);
  await page.locator('[type="submit"]').click();
});

test.describe("Web Application", () => {
  test.beforeEach("Navigate to Web Applivation", async ({ page }) => {
    await page.locator('[class="font-medium"]').first().click();
    //Making sure we are in the To Do column
    await page.getByText("To Do").click();
  });
  test("Test Case 1", async ({ page }) => {
    //Verify "Implement user authentication" is in the "To Do" column.
    const taskisInToDoColumn = page.getByText("Implement user authentication");
    await expect(taskisInToDoColumn).toBeVisible();

    //Confirm tag "Feature"
    const tagFeature = page
      .locator(".bg-white")
      .filter({ hasText: "Implement user authentication" })
      .getByText("Feature");
    await expect(tagFeature).toContainText("Feature");

    //Confirm tag "High Priority"
    const taghighPriority = page
      .locator(".bg-white")
      .filter({ hasText: "Implement user authentication" })
      .getByText("High Priority");
    await expect(taghighPriority).toContainText("High Priority");
  });

  test("Test Case 2", async ({ page }) => {
    //Verify "Fix navigation bug" is in the "To Do" column.
    const fixNavigationBug = page.getByText("Fix navigation bug");
    await expect(fixNavigationBug).toBeVisible();

    //Confirm tags: "Bug"
    const tagBug = page
      .locator(".bg-white")
      .filter({ hasText: "Menu does not close on mobile" })
      .locator(".px-2")
      .getByText("Bug");
    await expect(tagBug).toContainText("Bug");
  });
  test("Test Case 3", async ({ page }) => {
    //Making sure we are in the In Progress column
    await page.getByText("In Progress").click();

    //Verify "Design system updates" is in the "In Progress" column.
    const designSystemUpdates = page.getByText("Design system updates");
    await expect(designSystemUpdates).toBeVisible();

    //Confirm tags: "Design”
    const tagDesign = page
      .locator(".bg-white")
      .filter({ hasText: "Design system updates" })
      .locator(".px-2")
      .getByText("Design");
    await expect(tagDesign).toContainText("Design");
  });
});

test.describe("Mobile Application", () => {
  test.beforeEach("Navigate to Mobile Application", async ({ page }) => {
    await page.getByText("Mobile Application").click();
  });

  test("Test Case 4", async ({ page }) => {
    //Making sure we are in To Do Culumn
    await page.getByText("To Do").click();
    //Verify "Push notification system" is in the "To Do" column.
    const verifyPushNotification = page.getByText("Push notification system");
    await expect(verifyPushNotification).toContainText(
      "Push notification system"
    );
    //Confirm tags: "Feature”
    const tagFeatureTestCase4 = page
      .locator(".bg-white")
      .filter({ hasText: "Push notification system" })
      .getByText("Feature");
    await expect(tagFeatureTestCase4).toContainText("Feature");
  });
  test("Test Case 5", async ({ page }) => {
    //Making sure we are in the "In Progress" column
    await page.getByText("In Progress").click();
    //Verify "Offline mode" is in the "In Progress" column.
    const verifyOflineMode = page.getByText("Offline mode");
    await expect(verifyOflineMode).toBeVisible();
    //Confirm tags: "Feature"
    const confirmTagFeature = page
      .locator(".bg-white")
      .filter({ hasText: "Offline mode" })
      .getByText("Feature");
    await expect(confirmTagFeature).toContainText("Feature");
    //Confirm tags: "High Priority"
    const confirmTagHighPriority = page
      .locator(".bg-white")
      .filter({ hasText: "Offline mode" })
      .getByText("High Priority");
    await expect(confirmTagHighPriority).toContainText("High Priority");
  });
  test("Test Case 6", async ({ page }) => {
    //Making sure we are in "Done" colum
    await page.getByText("Done").click();
    //Verify "App icon design" is in the "Done" column.
    const verifyAppActionDesign = page.getByText("App icon design");
    await expect(verifyAppActionDesign).toBeVisible();
    //Confirm tags: "Design”
    const confirmDesignTag = page
      .locator(".bg-white")
      .filter({ hasText: "App icon design" })
      .locator(".px-2")
      .getByText("Design");
    await expect(confirmDesignTag).toContainText("Design");
  });
});
