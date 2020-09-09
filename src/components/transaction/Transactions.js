import React from 'react';
import PropTypes from 'prop-types';
import {
    Table,
    TableHeadRow,
    TableBodyRow,
    Tr
} from './style-Transaction';

export default function TransactionHistory({
    items
}) {
    return ( <
        Table >
        <
        thead >
        <
        tr >
        <
        TableHeadRow > Type < /TableHeadRow>{' '} <
        TableHeadRow > Amount < /TableHeadRow>{' '} <
        TableHeadRow > Currency < /TableHeadRow>{' '} < /
        tr > {
            ' '
        } <
        /thead> <
        tbody > {
            ' '
        } {
            items.map(item => ( <
                Tr key = {
                    item.id
                } >
                <
                TableBodyRow > {
                    item.type
                } < /TableBodyRow>{' '} <
                TableBodyRow > {
                    item.amount
                } < /TableBodyRow>{' '} <
                TableBodyRow > {
                    item.currency
                } < /TableBodyRow>{' '} < /
                Tr >
            ))
        } {
            ' '
        } <
        /tbody>{' '} < /
        Table >
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ),
};