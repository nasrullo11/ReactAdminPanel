import "./userlist.css"
import { DataGrid } from '@material-ui/data-grid';

export default function UserList() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'username',
          headerName: 'First name',
          width: 150,
          editable: true,
        },
        {
          field: 'email',
          headerName: 'Last name',
          width: 150,
          editable: true,
        },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 110,
          editable: true,
        },
        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,}
      ];

      
const rows = [
    { id: 1, username: 'Jon Snow', avatar: "https://i.pinimg.com/originals/4e/28/d3/4e28d33ef2fed94b1704434cc9fe9ebd.jpg" ,
    email: "hon@gmail.com",
    status: "active",
    transaction: "$120.00"
},
{ id: 1, username: 'Jon Snow', avatar: "https://i.pinimg.com/originals/4e/28/d3/4e28d33ef2fed94b1704434cc9fe9ebd.jpg" ,
email: "hon@gmail.com",
status: "active",
transaction: "$120.00"
},
{ id: 2, username: 'Jon Snow', avatar: "https://i.pinimg.com/originals/4e/28/d3/4e28d33ef2fed94b1704434cc9fe9ebd.jpg" ,
email: "hon@gmail.com",
status: "active",
transaction: "$120.00"
},
{ id: 3, username: 'Jon Snow', avatar: "https://i.pinimg.com/originals/4e/28/d3/4e28d33ef2fed94b1704434cc9fe9ebd.jpg" ,
email: "hon@gmail.com",
status: "active",
transaction: "$120.00"
},
{ id: 4, username: 'Jon Snow', avatar: "https://i.pinimg.com/originals/4e/28/d3/4e28d33ef2fed94b1704434cc9fe9ebd.jpg" ,
email: "hon@gmail.com",
status: "active",
transaction: "$120.00"
},
{ id: 5, username: 'Jon Snow', avatar: "https://i.pinimg.com/originals/4e/28/d3/4e28d33ef2fed94b1704434cc9fe9ebd.jpg" ,
email: "hon@gmail.com",
status: "active",
transaction: "$120.00"
},
{ id: 6, username: 'Jon Snow', avatar: "https://i.pinimg.com/originals/4e/28/d3/4e28d33ef2fed94b1704434cc9fe9ebd.jpg" ,
email: "hon@gmail.com",
status: "active",
transaction: "$120.00"
},
{ id: 7, username: 'Jon Snow', avatar: "https://i.pinimg.com/originals/4e/28/d3/4e28d33ef2fed94b1704434cc9fe9ebd.jpg" ,
email: "hon@gmail.com",
status: "active",
transaction: "$120.00"
},
{ id: 8, username: 'Jon Snow', avatar: "https://i.pinimg.com/originals/4e/28/d3/4e28d33ef2fed94b1704434cc9fe9ebd.jpg" ,
email: "hon@gmail.com",
status: "active",
transaction: "$120.00"
},
{ id: 9, username: 'Jon Snow', avatar: "https://i.pinimg.com/originals/4e/28/d3/4e28d33ef2fed94b1704434cc9fe9ebd.jpg" ,
email: "hon@gmail.com",
status: "active",
transaction: "$120.00"
},
{ id: 10, username: 'Jon Snow', avatar: "https://i.pinimg.com/originals/4e/28/d3/4e28d33ef2fed94b1704434cc9fe9ebd.jpg" ,
email: "hon@gmail.com",
status: "active",
transaction: "$120.00"
}
  ];
    return (
        <div className="userList">
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            checkboxSelection
      />
        </div>
    )
}
