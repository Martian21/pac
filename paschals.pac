function FindProxyForURL(url, host)
{
  if (shExpMatch(url, "*paschals.net*")) {
    return "SOCKS5 127.0.0.1:1337";
  } else {
    return "DIRECT";
  }
}
