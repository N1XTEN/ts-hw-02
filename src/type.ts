export interface Image {
  alt: string;
  id: string;
  small: string;
  regular: string;
}

export interface UnsplashImage {
  client_id: string,
  query: string,
  orientation: string,
  page: number,
  per_page:number,
}