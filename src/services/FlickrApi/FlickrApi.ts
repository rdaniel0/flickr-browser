import { ApiResponse } from './Models';

const urlPublicPhotos = `https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1`;

const FlickrApi = {
  getPhotoFeed: (tags: string) => {
    // Construct url from passed in tags
    let url = urlPublicPhotos;
    if (tags?.length > 0) {
      // And replace spaces with commas
      url += `&tags=${tags.replaceAll(' ', ',')}`;
    }
    return fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<ApiResponse>;
    });
  },
};

export default FlickrApi;
