export function transformUrls(urls) {
  const urlList = [];
  // eslint-disable-next-line
  urls.map(value => {
    urlList.push(value.url);
  });
  return urlList;
}