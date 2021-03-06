// @flow 
import * as React from 'react';
import { useState } from 'react';
import DataView from '../components/DataView';
import { Footer } from '../components/Footer';
import InputData from '../components/InputData';
import ResumeBar from '../components/ResumeBar';
import supabase from '../services/supabase';
import supabaseAxios from '../services/supabaseAxios';
//toasts
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    const [dataView, setdataView] = useState<string>('');
    const [RegistrosFiltrados, setRegistrosFiltrados] = useState<Registros[]>([]);

    // chamadas supabase
        const NewRegistro = async () => {
            
            const { data, error } = await supabase
                .from('despesas')
                .insert([
                    { user_id: 2157, titulo: Titulo, valor: Valor, categoria: Categoria, data: Data },
                ])

            if (error) {
                toast.error('Erro ao Salvar')
            } else {
                // alert('salvo com sucesso')
                // usar toast
                toast.success('Salvo com Sucesso')

            }
            setTimeout(Filtrar, 2000);

        }

        const GetRegistros = async () => {
           
            const { data } = await supabaseAxios.get('/despesas?user_id=eq.2157&select=*')
            setRegistros(data)
        }

        const Filtrar = () => {
            
            try {
                var dados: Registros[] = []
    
                Registros.map((item)=>{
                    const strData = item.data.substring(0, item.data.length - 3);
                    const dataV = `${dataView}`
                    if(strData == dataV){
                        dados.push(item)
                    }   
                })
    
               setRegistrosFiltrados(dados)
            } catch (error) {
                toast.error('Erro ao Fazer busca')
            }
        }

    // captura de dados 
        const getTitulo = (event: React.ChangeEvent<HTMLInputElement>) => {
            setTitulo(event.target.value)

        }

        const getDataView = (event: React.ChangeEvent<HTMLInputElement>) => {
            setdataView(event.target.value)
            console.log(dataView);
            
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
        GetRegistros()
        console.log('entrou no effect');
        
        // Filtrar()
    }, [RegistrosFiltrados])

    

    return (
        <div className="text-white p-11">
            {/* <h1 className='font-bold uppercase text-xl text-center mb-10'>Finances Control</h1> */}

            <ResumeBar 
                registros={RegistrosFiltrados}
                onChangeData={getDataView}
                onClickBuscar={Filtrar}
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
                    registros={RegistrosFiltrados}
                />
            </div>
            <ToastContainer
             theme='dark'
             
             />
            
        </div>
    );
};

export default Home