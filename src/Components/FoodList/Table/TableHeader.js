import PropTypes from "prop-types";

const TableHeader = ({ headerGroups }) => (
  <thead className="table-header">
    {headerGroups.map((headerGroup) => (
      <tr {...headerGroup.getHeaderGroupProps()}>
        {headerGroup.headers.map((column) => {
          return (
            <th {...column.getHeaderProps({})}>{column.render("Header")}</th>
          );
        })}
      </tr>
    ))}
  </thead>
);

TableHeader.propTypes = {
  headerGroups: PropTypes.array,
};

export default TableHeader;
