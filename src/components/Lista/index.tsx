import React from 'react';

function Lista (){
    const tarefa = [{
        tarefa:'React',
        tempo:'02:00:00'
    },{
        tarefa:'javaScript',
        tempo:'02:52:00'
    }]
    return(
        <aside>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefa.map((tarefa, index) => (
                    <li>
                        <h3></h3>
                        <span></span>
                    </li>
                ))}
                <li>
                    <h3>
                    </h3>
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