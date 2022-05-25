// @flow 
import * as React from 'react';
import { Registros } from '../pages/Home'
import supabase from '../services/supabase';

type Props = {

    registros: Array<Registros>

};
const DataView = (props: Props) => {

    const {registros} = props


    return (

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-slate-900 uppercase bg-slate-600">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Titulo
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Categoria
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Data
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Valor
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        registros.map((items) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    {items.titulo}
                                </th>
                                {
                                   items.categoria === 'Despesa' && (
                                    <td className="px-6 font-semibold uppercase text-white py-4 bg-red-500">
                                        {items.categoria}
                                    </td>
                                   )
                                }
                                {
                                   items.categoria === 'Receita' && (
                                    <td className="px-6 font-semibold uppercase text-white py-4 bg-green-500">
                                        {items.categoria}
                                    </td>
                                   )
                                }
                                <td className="px-6 py-4">
                                    {items.data}
                                </td>
                                <td className="px-6 py-4">
                                    R${items.valor}
                                </td>
                            </tr>

                        ))
                    }
                </tbody>
            </table>
        </div>

    );
};

export default DataView