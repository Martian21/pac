function FindProxyForURL(url, host)
{
  if (shExpMatch(url, "*.paschals.net/*")) {
    return "PROXY localhost:1337";
  } else {
    return "DIRECT";
  }
}
