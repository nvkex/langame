import React from 'react'
import styled from 'styled-components'

const Table = styled.table`
width: 100%;
th{
  color: black;
  background-color: #95afc0;
}
td{
  cursor: pointer;
  color: #535c68;
}

tr:nth-child(even){
  background-color: #dff9fb;
}
tr:nth-child(odd){
  background-color: #c7ecee;
}
tr:hover{
  background-color:#fa9f9f;
  color: white;
}

`;

const Table1 = (props) => {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th className="text-center px-1">Index</th>
            {props.headings.map(heading => (
              <th key={`t-${props.tIndex}-thead-${heading}`}>{heading}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {
            props.data.length === 0 ?
              (
                <tr>
                  <td className="text-center">-</td>
                  {props.headings.map((i) => (
                    <td className="text-center" key={`t-${props.tIndex}-tdata-${i}`}>-</td>
                  ))}
                </tr>
              ) :
              props.data.map((row, irow) => (
                <tr key={`t-${props.tIndex}-tdata-${irow}`}>
                  <td className="text-center">{irow + 1}</td>
                  {
                    row.map((col, icol) => (
                      <td key={`t-${props.tIndex}-tdata-${irow}-${icol}`}>{col}</td>
                    ))
                  }
                </tr>
              ))
          }
        </tbody>
      </Table>
    </div>
  )
}

export default Table1
