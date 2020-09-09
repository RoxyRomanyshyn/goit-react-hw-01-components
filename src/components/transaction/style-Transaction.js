import styled from 'styled-components'


const Table = styled.table `
box-shadow: 1px 2px 4px black;
border-radius: 4px;
margin: auto;
`;

const TableHeadRow = styled.th `
width: 292px;
height: 50px;
background-color: #00bcd4;
color: #ffffff;
text-transform: uppercase;
`;

const TableBodyRow = styled.td `
width: 292px;
height: 50px;
text-align: center;
color: #5c6975;
&:first-letter {
  text-transform: uppercase;
}
`;

const Tr = styled.tr `
&:nth-child(even) {
  background-color: #ecf2f3;
}
`;

export {
    Table,
    TableHeadRow,
    TableBodyRow,
    Tr
}