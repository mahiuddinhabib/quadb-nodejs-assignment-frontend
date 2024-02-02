import { ITicker } from '@/types';
import React from 'react';
import TableRow from '../TableRow';

const Table = ({tickers}:{tickers:ITicker[]}) => {
    return (
      <div className="mt-6 mx-6 overflow-x-auto text-nowrap">
        <table className="min-w-full table text-gray-400 border-separate space-y-6 text-2xl font-bold text-center">
          <thead className=" text-gray-500">
            <tr>
              <th>#</th>
              <th>Platform</th>
              <th>Last Traded Price</th>
              <th>Buy / Sell Price</th>
              <th>Difference</th>
              <th>Savings</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {tickers?.map((ticker, index) => (
              <TableRow key={index} ticker={ticker} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default Table;