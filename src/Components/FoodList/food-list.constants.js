import { baseApi } from "app.constants";

const tableColumns = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Product Id",
    accessor: "productId",
  },
  {
    Header: "Reviewer",
    accessor: "profileName",
  },
  {
    Header: "Score",
    accessor: "score",
  },
  {
    Header: "Summary",
    accessor: "summary",
  },
  {
    Header: "View",
    accessor: "view",
  },
];

const numPerPageOptions = [
  { value: 10, label: "Show 10 results" },
  { value: 20, label: "Show 20 results" },
  { value: 30, label: "Show 30 results" },
  { value: 40, label: "Show 40 results" },
  { value: 50, label: "Show 50 results" },
];

const scoreFilterOptions = [
  { value: "all", label: "All" },
  { value: 1, label: "One" },
  { value: 2, label: "Two" },
  { value: 3, label: "Three" },
  { value: 4, label: "Four" },
  { value: 5, label: "Five" },
];

const getAllReviewsEndPoint = (pageIndex, pageSize) =>
  `${baseApi}?page=${pageIndex}&numPerPage=${pageSize}`;

const searchReviewsEndPoint = (pageIndex, pageSize) =>
  `${baseApi}/search?page=${pageIndex}&numPerPage=${pageSize}`;

export {
  tableColumns,
  numPerPageOptions,
  scoreFilterOptions,
  getAllReviewsEndPoint,
  searchReviewsEndPoint,
};
