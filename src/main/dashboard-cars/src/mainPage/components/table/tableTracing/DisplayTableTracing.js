import React,{useState} from 'react';
import styled from 'styled-components'
import {useTable, useExpanded, useRowSelect} from 'react-table'
import '../TableDisplay.css'
import makeData from "../MakeDataTable";

const Styles = styled.div`
  padding: 1rem;
  table {
    border-spacing: 0;
     width: 100%;
     color:white; 
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
const onRowClick = (state, rowInfo, column, instance) => {
    return {
        onClick: e => {
            console.log('A Td Element was clicked!')
            console.log('it produced this event:', e)
            console.log('It was in this column:', column)
            console.log('It was in this row:', rowInfo)
            console.log('It was in this table instance:', instance)
        }
    }
}
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
const a=[]
function Table({ columns: userColumns, data, renderRowSubComponent ,selectMapChang}) {


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
            <div  className='row ab'>

            </div>

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
                                <td>

                                </td>
                            </tr>
                            {/*
                    If the row is in an expanded state, render a row with a
                    column that fills the entire length of the table.
                  */}


                        </React.Fragment>
                    )
                })}
                </tbody>
            </table>
            <p>Selected Rows: {Object.keys(selectedRowIds).length}</p>
            {/*  <pre>
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
        */}
             {
                 selectMapChang(selectedFlatRows)
             }

        </>
    )
}

function DisplayTableTracing(props) {
    var expanded=expanded;
const showItemMapfunction=(row)=>{
props.showItemMap(row.original)

}
const selectMapChang=(e)=>{
    props.selectMap(e)
}

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
          </span>
                ),
            },

            {
                Header: 'خودرو',
                accessor: 'nameCar',
            },
            {
                Header: 'نام راننده',
                accessor: 'driver',
            },


            {
                Header: "",
                id: "id",

            },


        ],
        []

    )

    const data = React.useMemo(() => makeData(10), [])

    // Create a function that will render our row sub components
    const renderRowSubComponent = React.useCallback(
        ({ row }) => (
            <div className='divDetails'>
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
                selectMapChang={selectMapChang}
            />
        </Styles>

    )
}

export default DisplayTableTracing