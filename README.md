# bzmb-totp

A [bzBond-server](https://github.com/beezwax/bzBond/tree/main/packages/bzBond-server#bzbond-server) microbond to generate TOTP codes.

## Installation

On a FileMaker server with bzBond-server installed run the following command:

`/var/www/bzbond-server/bin/install-microbond.sh bzmb-totp https://github.com/beezwax/bzmb-totp`

See the [bzBond-server documentation](https://github.com/beezwax/bzBond/tree/main/packages/bzBond-server#installing-microbonds) for more details on installation.

## Usage

The bzmb-totp microbond provides one route

### bzmb-totp-generate

In a server-side FileMaker script run `bzBondRelay` script with parameters in the following format:

```
{
  "mode": "PERFORM_JAVASCRIPT",

  "route": "bzmb-totp-generate",

  "customMethod": "POST",

  "customBody": {
    // Required. The TOTP secret for the multifactor authentication method
    "secret": "string"

    // Optional. The encoding format of the secret
    // Default
    "encoding": "base32",
  }
}

```

The code can be accessed via `Get ( ScriptResult )`:
`JSONGetElement ( Get ( ScriptResult ); "response.result" )`