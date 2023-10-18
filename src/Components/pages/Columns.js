import { createColumnHelper } from "@tanstack/react-table";
const columnHelper = createColumnHelper();

export const columnDef = [
    columnHelper.accessor("id", {
      header: "Id",
    }),
    {
      accessorFn: 'first_name',
      header: "First Name",
    },
    {
      accessorKey: "last_name",
      header: "Last Name",
      
    },
    {
      accessorKey: "email",
      header: "Email",
      
    },
    {
      accessorKey: "date",
      header: "Date",
      
    },
  ];

  export const columnDefWithGrouping = [
    columnHelper.accessor("id", {
      header: "Id",
    }),
    
      
        {
          accessorKey:"first_name",
          header: "First Name",
        },
        
        {
            accessorKey: "last_name",
            header: "Last Name",
          },
    
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "date",
      header: "Date",
    },
  ];
  