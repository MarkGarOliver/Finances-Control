// @flow 
import * as React from 'react';
import { useState } from 'react';
import DataView from '../components/DataView';
import InputData from '../components/InputData';
import ResumeBar from '../components/ResumeBar';
import supabase from '../services/supabase';
import supabaseAxios from '../services/supabaseAxios';

export interface Registros {
    id: number
    titulo: string
    valor: number
    categoria: string
    data: string
}

const Home = () => {

    const [Titulo, setTitulo] = useState<string>('');
    const [Valor, setValor] = useState<string>('');
    const [Data, setData] = useState<string>('');
    const [Categoria, setCategoria] = useState<string>('Receita');
    const [Registros, setRegistros] = useState<Registros[]>([]);


    const NewRegistro = async () => {

        const { data, error } = await supabase
            .from('despesas')
            .insert([
                { user_id: 2157, titulo: Titulo, valor: Valor, categoria: Categoria, data: Data },
            ])

        if (error) {
            alert('erro ao salvar')
        } else {
            alert('salvo com sucesso')
        }
    }



    const GetData = async () => {

        const { data } = await supabaseAxios.get('/despesas?user_id=eq.2157&select=*')
        setRegistros(data)

    }


    const getTitulo = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitulo(event.target.value)
        console.log(Titulo);

    }


    const getValor = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValor(event.target.value)
        console.log(Valor);

    }

    const getData = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData(event.target.value)
        console.log(Data);

    }

    const getCategoria = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked === true) {
            setCategoria('Despesa')
        }
    }

    React.useEffect(() => {
        GetData()
    })
    return (
        <div className="text-white bg-slate-900 h-screen p-11">
            <h1 className='font-bold uppercase text-xl text-center mb-10'>Finances Control</h1>

            <ResumeBar 
                registros={Registros}
            />

            <InputData
                onChangeCategoria={getCategoria}
                onChangeData={getData}
                onChangeValor={getValor}
                onChangeTitulo={getTitulo}
                onclickButton={NewRegistro}
            />

            <div className='mt-10'>

                <DataView
                    registros={Registros}
                />
            </div>

        </div>
    );
};

export default Home