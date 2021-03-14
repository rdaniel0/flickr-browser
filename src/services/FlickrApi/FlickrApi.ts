import { ApiResponse } from './Models';

const urlPublicPhotos = `https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1`;

// Using a proxy to prevent pre-flight CORS on client browser, since Flickr server doesn't send CORS headers from the feeds endpoint.
const GET = (url: string) => fetch('https://danielr-cors.herokuapp.com/' + url);

const FlickrApi = {
  getPhotoFeed: (tags: string) => {
    // Construct url from passed in tags
    let url = urlPublicPhotos;
    if (tags?.length > 0) {
      // And replace spaces with commas
      url += `&tags=${tags.replaceAll(' ', ',')}`;
    }
    return GET(url).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<ApiResponse>;
    });
  },
};

export default FlickrApi;
