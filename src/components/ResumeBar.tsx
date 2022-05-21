// @flow 
import * as React from 'react';
type Props = {
    
};
export const ResumeBar = (props: Props) => {
    return (
        <div className='flex justify-around bg-slate-800 p-11 mb-10 border border-slate-800 rounded-xl shadow'>
            <div className='flex w-96 justify-around mt-auto mb-auto '>

                <a className='bg-slate-700 border-slate-700 p-2 border rounded-xl cursor-pointer'>
                    back
                </a>

                <p>
                    Janeiro 2020
                </p>

                <a className='bg-slate-700 border-slate-700 p-2 border rounded-xl cursor-pointer'>
                    next
                </a>
                
            </div>

            <div className='text-center'>
                <label className='uppercase text-lg' htmlFor="Receita">Receita</label>
                <p className='text-xl mt-2 font-semibold'>R$7000.00</p>
            </div>

            
            <div>
                <label className='uppercase text-lg' htmlFor="despesas">Despesas</label>
                <p className='text-xl mt-2 font-semibold '>R$7000.00</p>
            </div>

            
            <div>
                <label className='uppercase text-lg' htmlFor="Receita">Balanço</label>
                <p className='text-xl mt-2 font-semibold'>R$7000.00</p>
            </div>


        </div>
    );
};