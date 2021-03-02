const getFinalFilters = (filters) => {
  let mapFilters = [];
  if (filters && filters.length > 0) {
    mapFilters = filters.reduce(
      (total, cur) =>
        !["all", ""].includes(cur?.value) ? [...total, cur] : total,
      []
    );
  }
  return mapFilters?.length > 0 ? mapFilters : null;
};

export { getFinalFilters };
