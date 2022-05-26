// @flow 
import * as React from 'react';
import { Fragment } from 'react';
import { Registros } from '../types/registro'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'



type Props = {
    registros: Array<Registros>
    onChangeData?: React.ChangeEventHandler
    onClickBuscar: React.MouseEventHandler | undefined;
};

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}


const ResumeBar = (props: Props) => {

    const { registros, onChangeData, onClickBuscar } = props

    var despesas = 0
    var receitas = 0
    registros.map((item) => {
        if (item.categoria === 'Despesa') {
            despesas += item.valor
        } else if (item.categoria === 'Receita') {
            receitas += item.valor
        }
    })



    return (
        <div className='flex flex-wrap justify-center md:flex-nowrap w-64 md:w-auto md:justify-around bg-slate-800 p-11 mb-10 border border-slate-800 rounded-xl shadow'>

            <div className='mt-auto mb-auto' id='dropdown'> 


                <input onChange={onChangeData} className='rounded-lg w-40 md:w-64 p-2 font-semibold text-black' type="month" id="bdaymonth" name="bdaymonth" /> 

                <button onClick={onClickBuscar} className='md:ml-2 bg-slate-700 w-40 md:w-32 h-11 mt-9 rounded-lg hover:bg-slate-600'>Buscar</button>

            </div>

            <div className='text-center mt-auto mb-auto mt-5'>
                <label className='uppercase text-small md:text-lg' htmlFor="Receita">Receita</label>
                <p className='text-xl mt-2 font-semibold'>R${receitas}</p>
            </div>


            <div className='text-center mt-auto mb-auto'>
                <label className='uppercase text-small md:text-lg' htmlFor="despesas">Despesas</label>
                <p className='text-xl mt-2 font-semibold '>R${despesas}</p>
            </div>


            <div className='text-center mt-auto mb-auto'>
                <label className='uppercase text-small md:text-lg' htmlFor="Receita">Balanço</label>
                <p className='text-xl mt-2 font-semibold'>R${receitas - despesas}</p>
            </div>


        </div>
    );
};

export default ResumeBar

