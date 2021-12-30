import "./clientList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { clientRows } from "../../../dummydata";

export default function ClientList() {
  const [data, setdata] = useState(clientRows);

  const handleDelete = (id) => {
    setdata(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 60 },
    {
      field: "clientName",
      headerName: "Name of the organization",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="clientListClient">
            <img className="clientListImg" src={params.row.avatar} alt="" />
            {params.row.clientName}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 140,
    },
    {
      field: "contractNumber",
      headerName: "Contract number",
      width: 140,
    },
    {
      field: "Transitbank",
      headerName: "Transit bank",
      width: 120,
    },
    {
      field: "servicingbank",
      headerName: "Servicing bank",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/clients/" + params.row.id}>
              <button className="clientListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="clientListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="clientList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
