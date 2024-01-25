function FindProxyForURL(url, host)
{
  if (isInNet(myIpAddress(), "192.168.1.0", "255.255.255.0")) {
    return "DIRECT";
  }
  if (shExpMatch(url, "*paschals.net*")) {
    return "SOCKS5 127.0.0.1:1337";
  } else {
    return "DIRECT";
  }
}
