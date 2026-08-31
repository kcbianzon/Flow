# Contributing to Flow

Thank you for your interest in contributing to Flow. This project is a clean React + Vite marketing website and we welcome improvements, fixes, and feature ideas.

## How to Contribute

1. Fork the repository.
2. Create a feature branch:

```bash
git checkout -b feature/your-feature-name
```

3. Make your changes.
4. Run the project checks locally.
5. Open a pull request with a clear description.

## Local Setup

```bash
npm install
npm run dev
```

## Required Validation

Before making a PR, run:

```bash
npm run build
```

This project uses TypeScript and Vite, so the production build must succeed before submission.

## Coding Guidelines

- Keep components modular and easy to reuse.
- Use TypeScript types where appropriate.
- Maintain the existing visual style and branding consistency.
- Prefer small, focused pull requests.
- Write clear commit messages.

## Branch Naming

Use descriptive branch names such as:

- `feature/add-pricing-section`
- `fix/contact-page-layout`
- `docs/update-readme`

## Commit Message Format

Use concise, conventional-style messages when possible:

```text
feat: add product highlight section
fix: correct navbar mobile behavior
docs: add contribution guide
```

## Pull Request Checklist

- [ ] Code builds successfully
- [ ] No unrelated files changed
- [ ] UI remains consistent with the existing design system
- [ ] Changes are documented when needed
- [ ] PR description explains the reason and impact

## Community Expectations

Please keep discussions constructive, respectful, and focused on improving the project.

## Questions

If you are unsure about a contribution, open a discussion or contact the maintainer via the project contact information.
