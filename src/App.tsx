import React, { useMemo } from "react";
import { useTable, Column } from "react-table";
import { makeData, NewPersonProps } from "./makeData";

import {
  Box,
  Table as ChakraTable,
  Thead,
  Tr,
  Th,
  Td,
  Tbody
} from "@chakra-ui/react";

// const Styles = styled.div`
//   padding: 1rem;

//   table {
//     border-spacing: 0;
//     border: 1px solid black;

//     tr {
//       :last-child {
//         td {
//           border-bottom: 0;
//         }
//       }
//     }

//     th,
//     td {
//       margin: 0;
//       padding: 0.5rem;
//       border-bottom: 1px solid black;
//       border-right: 1px solid black;

//       :last-child {
//         border-right: 0;
//       }
//     }
//   }
// `;

interface TableProps {
  columns: Column<NewPersonProps>[];
  data: NewPersonProps[];
}

function Table({ columns, data }: TableProps) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable<NewPersonProps>({
    columns,
    data
  });

  return (
    <Box padding="1rem">
      <ChakraTable
        {...getTableProps()}
        variant="unstyled"
        maxW="545px"
        border="1px solid black"
        border-spacing="0"
      >
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr
              {...headerGroup.getHeaderGroupProps()}
              sx={{
                "&:last-child": {
                  td: {
                    borderBottom: "0"
                  }
                }
              }}
            >
              {headerGroup.headers.map((column) => (
                <Th
                  {...column.getHeaderProps()}
                  margin="0"
                  padding="0.5rem"
                  borderBottom="1px solid black"
                  borderRight="1px solid black"
                  sx={{
                    "&:last-child": {
                      borderRight: "0"
                    }
                  }}
                >
                  {column.render("Header")}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <Tr
                {...row.getRowProps()}
                sx={{
                  "&:last-child": {
                    td: {
                      borderBottom: "0"
                    }
                  }
                }}
              >
                {row.cells.map((cell) => {
                  return (
                    <Td
                      {...cell.getCellProps()}
                      margin="0"
                      padding="0.5rem"
                      borderBottom="1px solid black"
                      borderRight="1px solid black"
                      sx={{
                        "&:last-child": {
                          borderRight: "0"
                        }
                      }}
                    >
                      {cell.render("Cell")}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </ChakraTable>
      <br />
      <Box>Showing the first 20 results of {rows.length} rows</Box>
    </Box>
  );
}

function App() {
  const columns: Column<NewPersonProps>[] = useMemo(
    () => [
      {
        Header: "Name",
        columns: [
          {
            Header: "First Name",
            accessor: "firstName" as keyof NewPersonProps
          },
          {
            Header: "Last Name",
            accessor: "lastName" as keyof NewPersonProps
          }
        ]
      },
      {
        Header: "Info",
        columns: [
          {
            Header: "Age",
            accessor: "age" as keyof NewPersonProps
          },
          {
            Header: "Visits",
            accessor: "visits" as keyof NewPersonProps
          },
          {
            Header: "Status",
            accessor: "status" as keyof NewPersonProps
          },
          {
            Header: "Profile Progress",
            accessor: "progress" as keyof NewPersonProps
          }
        ]
      }
    ],
    []
  );

  const data = useMemo(() => makeData(20), []);

  return <Table columns={columns} data={data} />;
}

export default App;
