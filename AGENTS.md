# Repository workflow

## Branch policy

- Never make changes directly on `upstream-ready`.
- Do not commit or cherry-pick changes onto `upstream-ready`.
- Make changes on `main` unless the user explicitly requests a feature branch.
- When using a feature branch, merge it into `main` first.
- When the changes are ready for the upstream pull request, merge `main` into `upstream-ready` and push `upstream-ready`.
- Treat `upstream-ready` solely as the branch that collects changes from `main` for the upstream pull request.

## Cirrus deployment policy

- Perform all Docker operations on the `cirrus` NAS through the Synology Container Manager GUI.
- Do not use the Docker CLI, Compose CLI, Synology Container Manager web API, or SSH commands to pull images, build or recreate projects, or start, stop, restart, rename, or remove containers on `cirrus`.
- SSH may be used for read-only diagnostics, but any action that changes Docker state must be completed in the GUI.
