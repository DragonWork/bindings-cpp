#ifndef SRC_SERIALPORT_LINUX_H_
#define SRC_SERIALPORT_LINUX_H_

int linuxSetCustomBaudRate(const int fd, const unsigned int baudrate);
int linuxGetSystemBaudRate(const int fd, int* const outbaud);
int linuxSetLowLatencyMode(const int fd, const bool enable);
int linuxGetLowLatencyMode(const int fd, bool* const enabled);

#endif  // SRC_SERIALPORT_LINUX_H_
