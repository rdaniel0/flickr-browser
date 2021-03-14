import { ApiResponse } from 'services/FlickrApi/Models';

/* --- STATE --- */
export interface SearchState {
  searchText: string;
  loading: boolean;
  error?: Error | null;
  results?: ApiResponse;
}
