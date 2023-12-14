module.exports = {
  include: ["app/**"],
  reporter: ["html", "text", "lcov"],
  "check-coverage": true,
  branches: 100,
  lines: 100,
  functions: 100,
  statements: 100
};
