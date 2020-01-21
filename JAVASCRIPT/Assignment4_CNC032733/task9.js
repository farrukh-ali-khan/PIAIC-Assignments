var str = "<p><strong><em>Only print this</em></strong></p>";

document.write(str);
document.write(
  "Output:<br />" +
    str
      .replace(/<[^>]*>/g, " ")
      .replace(/\s{2,}/g, " ")
      .trim()
);
