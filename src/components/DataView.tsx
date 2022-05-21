// @flow 
import * as React from 'react';
type Props = {

};
export const DataView = (props: Props) => {
    return (

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-slate-900 uppercase bg-slate-600">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                11/01/2022
                            </th>
                            <td className="px-6 font-semibold uppercase text-white py-4 bg-red-500">
                                Aluguel
                            </td>
                            <td className="px-6 py-4">
                                Laptop
                            </td>
                            <td className="px-6 py-4">
                                R$420
                            </td>
                            <td className="px-6 py-4 text-right">
                                <a href="#" className="font-medium text-red-600 hover:text-red-500">Delete</a>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>

    );
};