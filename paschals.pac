function FindProxyForURL(url, host)
{
  if (shExpMatch(url, "*paschals.net*")) {
    return "SOCKS localhost:1337";
  } else {
    return "DIRECT";
  }
}
