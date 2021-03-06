<p align="center">
  <img src="https://github.com/mailclerk/mailclerk-ruby/blob/main/mailclerk.png?raw=true" alt="Mailclerk Logo"/>
</p>

# Mailclerk Node

Mailclerk helps anyone on your team design great emails, improve their performance, and free up developer time. [Learn more](https://mailclerk.app/)

## Table of Contents

- [Setup](#setup)
- [API Key & URL](#api-key--url)
- [Usage](#usage)
- [Testing](#testing)
- [Gem Tests](#gem-tests)
- [Versioning](#versioning)
- [Code of Conduct](#code-of-conduct)
- [Contributions](#contributions)
- [License](#license)
- [History](#history)

## Setup

To install, run:

```
npm install mailclerk
```

## API Key & URL

To set the Mailclerk API Key (begins with `mc_`), you can provide it as an
environmental variable: `MAILCLERK_API_KEY`. Alternatively, you provide
it while initializing the client:

```
const mailclerk = require("mailclerk")("mc_yourprivatekey")
```

_If you are using version control like git, we strongly recommend storing your
production API keys in environmental variables_.

The default API endpoint is `https://api.mailclerk.app`. To change this, you
can provide a `MAILCLERK_API_URL` ENV variable.

## Usage

You'll need an active account and at least one template (in the example `welcome-email`).

To send an email to "eve@example.com":

```
const mailclerk = require("mailclerk")();
mailclerk.deliver("welcome-email", "eve@example.com")
```

If the template has any dynamic data, you can include it in the third parameter
as a hash:

```
mailclerk.deliver("welcome-email", "eve@example.com", { "name": "Eve" })
```

`deliver` returns a promise:

```
mailclerk.deliver("welcome-email", "eve@example.com").then(data => {
  console.log("Success!", data)
}).catch(error => {
  console.error(error);
})
```

See [Mailclerk documentation](https://dashboard.mailclerk.app/docs) for more details.

## Testing

Test support is not yet implemented for the python SDK. Refer to the
[Ruby SDK](https://github.com/mailclerk/mailclerk-ruby#testing)
to see how it will function, when implemented.

## Gem Tests

Tests aren't currently implemented.

## Versioning

Read [Semantic Versioning](https://semver.org) for details. Briefly, it means:

- Major (X.y.z) - Incremented for any backwards incompatible public API changes.
- Minor (x.Y.z) - Incremented for new, backwards compatible, public API enhancements/fixes.
- Patch (x.y.Z) - Incremented for small, backwards compatible, bug fixes.

## Code of Conduct

Please note that this project is released with a [CODE OF CONDUCT](CODE_OF_CONDUCT.md). By
participating in this project you agree to abide by its terms.

## Contributions

Read [CONTRIBUTING](CONTRIBUTING.md) for details.

## License

Copyright 2021 [Mailclerk](https://mailclerk.app/).
Read [LICENSE](LICENSE.md) for details.

## History

Read [CHANGES](CHANGES.md) for details.
Built with [Gemsmith](https://github.com/bkuhlmann/gemsmith).
