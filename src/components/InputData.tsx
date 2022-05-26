// @flow 
import * as React from 'react';
import { createPopper } from "@popperjs/core";

type Props = {
    onclickButton?: React.MouseEventHandler | undefined;
    onChangeTitulo?: React.ChangeEventHandler
    onChangeValor?: React.ChangeEventHandler
    onChangeData?: React.ChangeEventHandler
    onChangeCategoria?: React.ChangeEventHandler
};
const InputData = (props: Props) => {

    const {
        onclickButton,
        onChangeCategoria,
        onChangeData,
        onChangeTitulo,
        onChangeValor

    } = props


    return (
        <div className='flex flex-wrap justify-center md:flex-nowrap md:justify-around w-64 md:w-auto bg-slate-800 p-11 border border-slate-800 rounded-xl shadow'>

            <div >
                <label className='block mb-2 font-medium text-lg' htmlFor="data">Data</label>
                <input onChange={onChangeData} className='rounded-lg md:w-64 md:mr-4 p-2 font-semibold text-black' type="date" id='data' />
            </div>

            <div>
                <label className='block mb-2 font-medium text-lg' htmlFor="data">Titulo</label>
                <input onChange={onChangeTitulo} className='rounded-lg w-40 md:w-64 md:mr-4 p-2 font-semibold text-black' type="text" />
            </div>





            <div>
                <label  className='block mb-2 font-medium text-lg' htmlFor="data">Valor</label>
                <input onChange={onChangeValor} className='rounded-lg w-40 md:w-64 md:mr-4 p-2 font-semibold text-black placeholder-black' type="number" placeholder='0' />
            </div>

            <div className='mt-5 md:mt-0'>
                <label className='block mb-2 font-medium text-lg' htmlFor="data">Categoria</label>


                <div className="flex items-center mb-2 mt-auto">
                    <input onChange={onChangeCategoria} id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Despesa</label>
                </div>

                <div className="flex items-center mt-auto mb-auto">
                    <input id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Receita</label>
                </div>

            </div>

            <button onClick={onclickButton} className='bg-slate-700 w-40 md:w-64 mr-4 h-11 mt-9 rounded-lg hover:bg-slate-600'>Adicionar</button>

        </div>
    );
};

export default InputData