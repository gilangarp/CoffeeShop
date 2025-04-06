export interface IPagination {
  totalData: number;
  totalPages: string;
  prevLink: string | null;
  nextLink: string | null;
  currentPage: string;
}
