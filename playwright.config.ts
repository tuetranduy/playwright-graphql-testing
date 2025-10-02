import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: process.env.GRAPHQL_ENDPOINT,
  },
  reporter: [
    ["line"],
    ['list', { printSteps: true }],
    ["html", { open: "never", outputFolder: "./reports/playwright-report" }],
  ],
});