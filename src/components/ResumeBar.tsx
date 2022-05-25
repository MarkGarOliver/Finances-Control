// @flow 
import * as React from 'react';
import { Fragment } from 'react';
import { Registros } from '../types/registro'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'



type Props = {
    registros: Array<Registros>
};

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}


const ResumeBar = (props: Props) => {

    const { registros } = props

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
                <p className='text-xl mt-2 font-semibold'>R${receitas}</p>
            </div>


            <div>
                <label className='uppercase text-lg' htmlFor="despesas">Despesas</label>
                <p className='text-xl mt-2 font-semibold '>R${despesas}</p>
            </div>


            <div>
                <label className='uppercase text-lg' htmlFor="Receita">Balanço</label>
                <p className='text-xl mt-2 font-semibold'>R${receitas - despesas}</p>
            </div>

            <div id='dropdown'>

                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                            Options
                            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Account settings
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Support
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            License
                                        </a>
                                    )}
                                </Menu.Item>
                                <form method="POST" action="#">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                type="submit"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block w-full text-left px-4 py-2 text-sm'
                                                )}
                                            >
                                                Sign out
                                            </button>
                                        )}
                                    </Menu.Item>
                                </form>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>

        </div>
    );
};

export default ResumeBar

