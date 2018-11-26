import React from 'react';
import ReactTable from 'react-table';
import './Table.css';
import "react-table/react-table.css";

export default function ({ title, tableHeader, tableBody, defaultRows }) {

  let columns = [];

  if (tableBody.length > 0) {
    let tableBodyKeys = Object.keys(tableBody[0]);

    tableBodyKeys.map((key, i) => {
      columns.push({
        Header: tableHeader[i],
        accessor: key,
        // TODO Fix better way to solve this issue with Green and Red for Offline and Online
        Cell: props => <span className={props.value === "Online" || props.value === "Offline" ? props.value : ""}>{props.value}</span>
      })
    })
  }


  return (
    <div className="Table">
      <h3 className="Table__header">{ title }</h3>
      <ReactTable
        data={ tableBody }
        columns={ columns }
        defaultPageSize={defaultRows}
      />
    </div>
  );
}
