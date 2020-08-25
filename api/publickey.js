export const publicKey = `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEApxuhME6fzEgJ7iGsANXk
O2Q8us+UiaIMh8KzhTY94P+1aZv79/FSedIorggQIu9C55d7JXa3JnS89xjE0vOl
cW1th9+3usV/lZY1oUp+wj56D9rHWo/ZtYbvBN+eLLH4rW+h/5BGtWxYH9ZDrADd
17z77kMKSevpYX9j4i6EZjiF+bI72iifS4POcwjWRnyGzH6q8YVmwP6JEbBwJHAD
SR3VuDwq/Tm4VdAwanhgBIeLAtQNOIJG/P59QpuYRZub/df9inMMeFVkGrV3xtpz
RHYjSJ7w9lkpeFbZxTgbvrQ/w8wNjqXsn3pN8/rVmQbZpobPGWzoPKU3Yqors9xu
tpkZ9jty1Bvirj6KSWHCNLqakPSv8pzrKFvE5KAtv/TMhe5F+DyqRKjLIL8PwkHs
cwb3ufmtRyv/tyUfRgxpuodOdzlWoyjg7+QSX+uJdAwEPBZjR6w9HEiamKtKmsot
9E/XcTYPFTFN7Nwl1LixGUcth3EaJuCBcGalmy2fJ1+WDfCdGYBnxUouj5WZM5Ng
8rNXhhmd12OCOxnMxxnXxnnn4AKUbz59LCCfs9f5jxcd1jrm2xS70fDuCsiodiF3
vFbysS5ku/2RzC22P6rOvphe6KAcKxfPzCEtaDqNiBT512ODsnBYxDhjfTp61BOe
J3Mc3AWlPl7s9MnAmZw7CCMCAwEAAQ==
-----END PUBLIC KEY-----
`;

export async function handler() {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/plain"
    },
    body: publicKey
  };
}