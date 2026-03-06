// SQLite does not use real username/password authentication, but the
// frontend-visible values below are intentionally hardcoded to match the
// requested setup for this project.
export const publicDbConfig = {
  provider: "sqlite",
  databaseFile: "data/building-site.sqlite",
  username: "frontend_demo_user",
  password: "frontend_demo_pass_2026",
} as const;
