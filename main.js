// Function to decode Base64 to UTF-8 safely
function decodeBase64Utf8(encodedString) {
  // Ensure the string is well-formed by cleaning any spaces or newlines
  const cleanedString = encodedString.replace(/\s/g, "");
  const decodedData = Buffer.from(cleanedString, "base64").toString("utf-8"); // Decode to UTF-8
  return decodedData;
}

const encodedData = `
SGkgU2FuZGVlcCwNCg0KDQpJIGhvcGUgeW914oCZcmUgZG9pbmcgd2VsbCEgSeKAmW0gQ2hlcmlzaCwgYW5kIEnigJltIHJlYWxseSBleGNpdGVkIGFib3V0IHRoZSAqRnVsbA0KU3RhY2sgRGV2ZWxvcGVyIGludGVybnNoaXAqIGF0ICpEYXRhemlwKi4gV2l0aCBteSBmdWxsIHN0YWNrIGV4cGVyaWVuY2UgYW5kDQpwYXNzaW9uIGZvciBidWlsZGluZyBzY2FsYWJsZSBzb2x1dGlvbnMsIEnigJltIGNvbmZpZGVudCBJIGNvdWxkIGNvbnRyaWJ1dGUNCnRvIHRoZSB0ZWFt4oCZcyBzdWNjZXNzIGFuZCBoZWxwIGRyaXZlIERhdGF6aXDigJlzIGdvYWxzIGZvcndhcmQuIEnigJl2ZSBhdHRhY2hlZA0KbXkgcmVzdW1lIGZvciB5b3VyIHJlZmVyZW5jZSBhbmQgd291bGQgZ3JlYXRseSBhcHByZWNpYXRlIGFueSBvcHBvcnR1bml0eQ0KdG8gZGlzY3VzcyBob3cgSSBjYW4gYnJpbmcgdmFsdWUgdG8geW91ciB0ZWFtLg0KDQoNCkJlc3QgcmVnYXJkcywNCg0KUC4gU2l2YSBTYWkgQ2hlcmlzaA0KDQpzYWljaGVyaXNoOTBAZ21haWwuY29tDQoNCltSZXN1bWUNCjxodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFuNzhkMTVBN1pKdnJ6dGthNU5DSk9RSG5oR1VjeVhPdC92aWV3P3VzcD1zaGFyaW5nPg0KXQ0K`;

// Decode and print the result
try {
  const decodedString = decodeBase64Utf8(encodedData);
  console.log(decodedString);
} catch (error) {
  console.error("Error decoding:", error.message);
}
