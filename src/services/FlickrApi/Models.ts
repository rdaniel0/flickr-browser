export interface ApiResponse {
  title: string;
  link: string;
  items: Photo[];
}

export interface Photo {
  title: string;
  link: string;
  media: {
    m: string;
  };
  date_taken: string;
  author: string;
  tags: string;
}
