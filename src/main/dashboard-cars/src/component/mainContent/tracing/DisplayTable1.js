  import React from 'react';
import * as FcIcons from 'react-icons/fc';
import styled from 'styled-components'
import {useTable, useExpanded, useRowSelect} from 'react-table'

import makeData from "./MakeData";
import {DetailsTable} from "./DetailsTable";

const Styles = styled.div`
  padding: 1rem;
  table {
    border-spacing: 0;
     width: 100%;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid  #dfe2ea;
      :last-child {
        border-right: 0;
      }
    }
  }
`

const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate, ...rest }, ref) => {
        const defaultRef = React.useRef()
        const resolvedRef = ref || defaultRef

        React.useEffect(() => {
            resolvedRef.current.indeterminate = indeterminate
        }, [resolvedRef, indeterminate])

        return (
            <>
                <input type="checkbox" ref={resolvedRef} {...rest} />
            </>
        )
    }
)
// A simple way to support a renderRowSubComponent is to make a render prop
// This is NOT part of the React Table API, it's merely a rendering
// option we are creating for ourselves in our table renderer
function Table({ columns: userColumns, data, renderRowSubComponent }) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        visibleColumns,
        selectedFlatRows,
        state: { selectedRowIds,expanded },
    } = useTable(

        {
            columns: userColumns,
            data,
        },

    hooks => {
            hooks.visibleColumns.push(columns => [
                // Let's make a column for selection
                {
                    id: 'selection',
                    // The header can use the table's getToggleAllRowsSelectedProps method
                    // to render a checkbox
                    Header: ({ getToggleAllRowsSelectedProps }) => (
                        <div>
                            <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
                        </div>
                    ),
                    // The cell can use the individual row's getToggleRowSelectedProps method
                    // to the render a checkbox
                    Cell: ({ row }) => (
                        <div>
                            <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
                        </div>
                    ),
                },
                ...columns,
            ])
        },

        useExpanded // We can useExpanded to track the expanded state
        // for sub components too!
            ,

    useRowSelect,


    )
    return (
        <>
                  <pre>
        <code>{JSON.stringify({ expanded: expanded }, null, 2)}</code>
      </pre>

            <table {...getTableProps()}>
                <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        // Use a React.Fragment here so the table markup is still valid
                        <React.Fragment {...row.getRowProps()}>
                            <tr>
                                {row.cells.map(cell => {
                                    return (
                                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    )
                                })}
                            </tr>
                            {/*
                    If the row is in an expanded state, render a row with a
                    column that fills the entire length of the table.
                  */}
                            {row.isExpanded ? (
                                <tr>
                                    <td colSpan={visibleColumns.length}>
                                        {/*
                          Inside it, call our renderRowSubComponent function. In reality,
                          you could pass whatever you want as props to
                          a component like this, including the entire
                          table instance. But for this example, we'll just
                          pass the row
                        */}
                                        {renderRowSubComponent({ row })}
                                    </td>
                                </tr>
                            ) : null}
                        </React.Fragment>
                    )
                })}
                </tbody>
            </table>
            <p>Selected Rows: {Object.keys(selectedRowIds).length}</p>
            <pre>
        <code>
          {JSON.stringify(
              {
                  selectedRowIds: selectedRowIds,
                  'selectedFlatRows[].original': selectedFlatRows.map(
                      d => d.original
                  ),
              },
              null,
              2
          )}
        </code>
      </pre>

        </>
    )
}

function DisplayTable1() {
    var expanded=expanded;
    const columns = React.useMemo(
        () => [
            {
                // Make an expander cell
                Header: () => null, // No header
                id: 'expander', // It needs an ID
                Cell: ({ row }) => (
                    // Use Cell to render an expander for each row.
                    // We can use the getToggleRowExpandedProps prop-getter
                    // to build the expander.
                    <span {...row.getToggleRowExpandedProps()}>
            <FcIcons.FcViewDetails />
          </span>
                ),
            },

                    {
                        Header: '??????????',
                        accessor: 'nameCar',
                    },
                    {
                        Header: '?????? ????????????',
                        accessor: 'driver',
                    },

                    {
                        Header: '?????????? ????????',
                        accessor: 'dateStart',
                    },
                    {
                        Header: '?????????? ??????????',
                        accessor: 'dateEnd',
                    },
                    {
                        Header: '???????? ????????',
                        accessor: 'speed',
                    },
                    {
                        Header: '?????????? ????????',
                        accessor: 'zone',
                    },
                    {
                        Header: '??????',
                        accessor: 'Weight',
                    },
                    {
                        Header: '????????',
                        accessor: 'Fuel',
                    },
                    {
                        Header: '?????????? ?????? ????????',
                        accessor: 'distance',
                    },
                    {
                        Header: '???????? ??????????????',
                        accessor: 'timeRest',
                    },

        ],
        []
    )

    const data = React.useMemo(() => makeData(10), [])

    // Create a function that will render our row sub components
    const renderRowSubComponent = React.useCallback(
        ({ row }) => (
                <div className='divDetails'>
                    <DetailsTable expanded={expanded} />
                </div>
        ),
        []
    )

    return (
        <Styles>

            <Table
                renderRowSubComponent={renderRowSubComponent}

                columns={columns}
                data={data}
                // We added this as a prop for our table component
                // Remember, this is not part of the React Table API,
                // it's merely a rendering option we created for
                // ourselves
            />
        </Styles>
    )
}

export default DisplayTable1