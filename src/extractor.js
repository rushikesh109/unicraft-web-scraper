function extractInfo($, url) {
  const title = $('title').text();
  const emailMatch = $.html().match(/[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}/g);
  const phoneMatch = $.html().match(/\+?[0-9][0-9()\s.-]{7,}/g);
  return {
    company: title || '',
    url,
    emails: emailMatch ? [...new Set(emailMatch)] : [],
    phones: phoneMatch ? [...new Set(phoneMatch)] : [],
  };
}
module.exports = { extractInfo };