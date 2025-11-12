import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import FormularioDeTarefa from './components/FormularioDeTarefa';
import TodasAsTarefas from './pages/TodasAsTarefas';
import TarefasPendentes from './pages/TarefasPendentes';
import TarefasConcluidas from './pages/TarefasConcluidas';
import './index.css';

function App() {

  const [tarefas, setTarefas] = useState([]);

  useEffect(
    () =>{
      const fetchTarefas = async () => {
        try {
          const response = await fetch('http://localhost:3000/tarefas');
          if (!response.ok) {
            throw new Error('Erro ao carregar as tarefas da API.');
          }
          const data = await response.jsaon();
          const tarefasFormatadas = data.map(t => ({
            id: t.id,
            texto: t.texto,
            concluida: t.concluida
          }));
          setTarefas(tarefasFormatadas);
        }catch (error) {
          console.error("Falha ao buscar tarefas", error);
        }
      };
      fetchTarefas();

    }, []
  )

 /* const adicionarTarefa = (texto) => {
    const novaTarefa = {
      id: Date.now(),
      texto,
      concluida: false
    };
    setTarefas([...tarefas, novaTarefa]);
  };

  const alternarConclusao = (id) => {
    setTarefas(tarefas.map(tarefa =>
      tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
    ));
  };

  const removerTarefa = (id) => {
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
  };

  return (
    <Router>
      <div className="app-container">
        <h1>Lista de Tarefas</h1>
        <Header />
        <FormularioDeTarefa onAdd={adicionarTarefa} />
        <Routes>
          <Route path="/" element={<TodasAsTarefas tarefas={tarefas} onToggle={alternarConclusao} onRemove={removerTarefa} />} />
          <Route path="/pendentes" element={<TarefasPendentes tarefas={tarefas} onToggle={alternarConclusao} onRemove={removerTarefa} />} />
          <Route path="/concluidas" element={<TarefasConcluidas tarefas={tarefas} onToggle={alternarConclusao} onRemove={removerTarefa} />} />
        </Routes>
      </div>
    </Router>
  );*/
}

export default App;