// @flow 
import * as React from 'react';
import { Registros } from '../pages/Home'
import supabase from '../services/supabase';
//toasts
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {

    registros: Array<Registros>

};
const DataView = (props: Props) => {

    const {registros} = props


    return (

        <div className="relative w-64 md:w-auto mr-auto ml-auto overflow-x-auto overflow-y-auto md:h-[400px] shadow-md sm:rounded-lg">
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
                        <th scope="col" className="px-6 py-3">
                            
                        </th>
                    </tr>
                </thead>
                <tbody className='overflow-scroll h-[290px]'>
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
                                <td className="px-6 py-4 text-red-500">
                                    <button onClick={async ()=>{

                                        const { data, error } = await supabase
                                            .from('despesas')
                                            .delete()
                                            .eq('id', items.id)
                                        
                                            if(error){
                                                toast.error('Erro ao deletar !')
                                            }else{
                                                toast.success('Excluido com sucesso')
                                                toast.info('clique em buscar para atualizar a lista')
                                            }
                                    }}>Deletar</button>
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