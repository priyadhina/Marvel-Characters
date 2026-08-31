export interface URLObject {
  url: string;
  type?: string;
}

export function transformUrls(urls: URLObject[]): string[] {
  const urlList: string[] = [];
  urls.forEach(value => {
    urlList.push(value.url);
  });
  return urlList;
}
