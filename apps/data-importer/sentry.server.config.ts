/*
 * This file configures the initialization of Sentry on the server.
 * The config you add here will be used whenever the server handles a request.
 * https://docs.sentry.io/platforms/javascript/guides/nextjs/
 */

import * as Sentry from "@sentry/nextjs";
import pkg from "./package.json";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  enableTracing: false,
  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
  environment: process.env.SENTRY_ENVIRONMENT,
  release: `saleor-app-${pkg.name}@${pkg.version}`,
});
