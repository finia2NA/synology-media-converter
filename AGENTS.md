# Repository workflow

## Branch policy

- Never make changes directly on `upstream-ready`.
- Do not commit or cherry-pick changes onto `upstream-ready`.
- Make changes on `main` unless the user explicitly requests a feature branch.
- When using a feature branch, merge it into `main` first.
- When the changes are ready for the upstream pull request, merge `main` into `upstream-ready` and push `upstream-ready`.
- Treat `upstream-ready` solely as the branch that collects changes from `main` for the upstream pull request.
