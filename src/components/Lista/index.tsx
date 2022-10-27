import React from 'react';
import '../Lista/Lista.css'

function Lista (){
    const tarefa = [{
        tarefa:'React',
        tempo:'02:00:00'
    },{
        tarefa:'javaScript',
        tempo:'02:52:00'
    }]
    return(
        <aside className="lista">
            <h2>Estudos do dia</h2>
            <ul>
                {tarefa.map((item, index) => (
                    <li key={index}>
                        <h3>{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                    </li>
                ))}
                <li>
                    <h3>Cadê</h3>
                    <span>
                        02:00:00
                    </span>
                </li>
                <li>
                    <h3>
                        React-nt
                    </h3>
                    <span>
                        02:00:00
                    </span>
                </li>
            </ul>
        </aside>
    )
}

export default Lista;