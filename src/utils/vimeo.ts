export async function getVimeoThumbnail(vimeoUrl: string): Promise<string> {
  const vimeoId = vimeoUrl.split('/').pop()?.split('?')[0];
  const response = await fetch(`https://vimeo.com/api/oembed.json?url=http://vimeo.com/${vimeoId}`);
  const data = await response.json();
  return data.thumbnail_url;
}
