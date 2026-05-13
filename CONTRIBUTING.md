# Contributing to LendX

First off, thank you for considering contributing to LendX! It's people like you
that make LendX such a great tool for the Stellar ecosystem.

## Code of Conduct

By participating in this project, you agree to abide by our
[Code of Conduct](./CODE_OF_CONDUCT.md).

## How Can I Contribute?

### Reporting Bugs

- Use the GitHub Issue Tracker.
- Describe the bug and provide steps to reproduce.

### Suggesting Enhancements

- Open a Discord thread or a GitHub Issue to discuss.

### Pull Requests

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.

## 🌊 Drips Wave Workflow

If you are contributing as part of a **Drips Wave** sprint, please follow this flow to ensure your work is tracked and rewarded:

1. **Find a Wave Task**: Look for issues labeled `wave-task`. These have Points allocated to them.
2. **Claim the Task**: Comment `/attempt` on the issue. We prefer one contributor per task to avoid overlapping work.
3. **Submit Your PR**: 
   - Reference the issue in your PR description (e.g., `Fixes #123`).
   - Use the Pull Request Template checklist.
   - Ensure the CI (GitHub Actions) passes.
4. **Review & Merge**: A maintainer will review your code. Once merged, your **Points** will be recorded for the current Wave rewards distribution.

## Development Setup

See the [Getting Started](./README.md#getting-started) section in the README for environment setup.

### Testing

- **Contracts**: `cargo test`
- **Frontend/Agents**: `npm run lint` and `npm test`

## Architecture Overview

Before contributing to the core logic, please read the [Architecture Documentation](./ARCHITECTURE.md) to understand the x402 and Action Model Programming primitives.

---

Happy coding! 🚀
