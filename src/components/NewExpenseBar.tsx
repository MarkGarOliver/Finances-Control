// @flow 
import * as React from 'react';
type Props = {

};
const NewExpenseBar = (props: Props) => {
    return (
        <div className='flex justify-around bg-slate-800 p-11 border border-slate-800 rounded-xl shadow'>

            <div >
                <label className='block mb-2 font-medium text-lg' htmlFor="data">Data</label>
                <input className='rounded-lg w-64 p-2 font-semibold text-black' type="date" id='data' />
            </div>

            <div>
                <label className='block mb-2 font-medium text-lg' htmlFor="data">Titulo</label>
                <input className='rounded-lg w-64 p-2 font-semibold text-black' type="text" />
            </div>

    
            <div>
                <label className='block mb-2 font-medium text-lg' htmlFor="data">Valor</label>
                <input className='rounded-lg w-64 p-2 font-semibold text-black placeholder-black' type="number" placeholder='0' />
            </div>

            <button className='bg-slate-700 w-64 h-11 mt-9 rounded-lg hover:bg-slate-600'>Adicionar</button>
        </div>
    );
};

export default NewExpenseBar