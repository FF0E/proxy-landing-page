# Development Workflow

## Setup Git Hooks

To enable git hooks, run:

```bash
# Make the hook executable
chmod +x .git-hooks/pre-commit

# Create symlink to git hooks directory
ln -sf ../../.git-hooks/pre-commit .git/hooks/pre-commit
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run type-check` - Check TypeScript types
- `npm run build:analyze` - Build with bundle analysis
- `npm run clean` - Clean build artifacts

## Environment Setup

1. Copy `.env.example` to `.env.local`
2. Update environment variables as needed
3. Run `npm run dev` to start development

## Quality Checks

The pre-commit hook will automatically run:
- TypeScript type checking
- ESLint linting

This ensures code quality before commits.