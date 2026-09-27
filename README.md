# Keycloak Theme

[![General Workflow](https://github.com/cloudpunks/keycloak-theme/actions/workflows/general.yml/badge.svg)](https://github.com/cloudpunks/keycloak-theme/actions/workflows/general.yml) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/65db65a2e86142a08562c234f83f908e)](https://app.codacy.com/gh/cloudpunks/keycloak-theme/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade) [![GitHub Repo](https://img.shields.io/badge/github-repo-yellowgreen)](https://github.com/cloudpunks/keycloak-theme)

This repository defines our customized Keycloak themes used by our auth service
which is based on [Keycloak][keycloak].

## Prerequisites

We use [mise][mise] to manage all required tools and their versions. Install it
by following the [official installation instructions][mise-install], then run
the following commands inside the repository to activate mise and install all
tools defined in `mise.toml`:

```console
mise trust
mise install
```

## Usage

We are using [Keycloakify][keycloakify] to generate most parts of the theme from
a proper predefined set of templates. We customize only what really is needed
for use. After that we are generating a JAR file which can be put into the
provider directory of Keycloak. Every change have to be submitted via merge
requests, after merging the merge request the changes are getting applied
automatically by Gitlab CI. It is possible to execute everything from a
workstation, but it's encouraged to keep it in the hands of Gitlab CI.

## Build

```console
npm ci
npm run build-keycloak
```

## Security

If you find a security issue please contact
[info@cloudpunks.de](mailto:info@cloudpunks.de) first.

## Contributing

Generally we are following [conventional commits][commits] when we apply
changes. That way we are able to generate proper changelogs for every release.
Please use always pull requests to integrate new functionalities or to fix
issues.

For the release process we are following [semantic versioning][semver] which
clearly indicates if a new version just resolves bugs, includes new features or
even includes breaking changes.

After installing the tools via `mise install` as described above set up the
pre-commit hooks so they run automatically on every commit:

```console
prek install --hook-type pre-commit --hook-type commit-msg
```

> `prek` is managed by mise and will be available after `mise install`.

If you have changed something on the source you should simply commit following
the mentioned conventions:

```console
git checkout -b feat/new-feature
git add --all
git commit -m 'feat: added awesome new feature'
git push --set-upstream origin feat/new-feature
```

After pushing your changes into the Git repository you should create a pull
request on GitHub. If the pull request have been merged and everything built
fine it will also create automatically a new release at least once a week.

## Authors

-   [Thomas Boerger](https://github.com/tboerger)

## License

Apache-2.0

## Copyright

```console
Copyright (c) 2026 cloudpunks GmbH <info@cloudpunks.de>
```

[keycloak]: https://www.keycloak.org/
[keycloakify]: https://www.keycloakify.dev/
[mise]: https://mise.jdx.dev/
[mise-install]: https://mise.jdx.dev/getting-started.html
[commits]: https://www.conventionalcommits.org/en/v1.0.0/
[semver]: https://semver.org/
