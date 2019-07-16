import React from 'react'


const prioritStyle = {
    border: '1px solid black',
    width: '96%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '10px',
    resize: 'none'
}
const divStyle = {
    width: '30%',
    shadowColor: '2px 2px gray',
    border: '1px solid silver',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '50px',
    marginBottom: '10px',
    textAlign: 'center',
    boxShadow: '0 0 5px silver'
}
const nameStyle = {
    marginTop: '5px',
    width: '96%',
    height: '100px',
    marginBottom: '10px',
    resize: 'none'
}
const selectStyle = {
    width: '96%',
    height: '25px',
    // borderRadius:'0px'
    border: '1px solid black',
    marginBottom: '10px'
}
const buttonStyle = {
    width: '96%',
    height: '25px',
    marginBottom: '5px',
    color: 'black', /* цвет текста */
    textDecoration: 'none', /* убирать подчёркивание у ссылок */
    userSelect: 'none', /* убирать выделение текста */
    background: '#D3D3D3', /* фон кнопки */
    padding: '.7em 1.5em', /* отступ от текста */
    outline: 'none', /* убирать контур в Mozilla */
}

export default class AddTask extends React.Component {
    state = {
        name: '',
        worker: '',
        priorit: null
    }
    onChangeTaskName = (event) => {
        this.setState({
            ...this.state,
            name: event.target.value,
        })
    }
    onChangeWorker = (event) => {
        this.setState({
            ...this.state,
            worker: event.target.value
        })
    }
    onChangePriorit = (event) => {
        this.setState({
            ...this.state,
            priorit: Number(event.target.value),
        })
    }

    onSubmit = () => {
        const task = {
            ...this.state
        }
        this.state.name && this.state.worker && (this.state.priorit||this.state.priorit===0)
            ? this.state.priorit <= 10 && this.state.priorit >= 0
                ? this.props.addTask(task)
                : alert('Введите число в диапазоне 0...10!')
            : alert('Заполните все поля!')
    }


    render() {
        const worker = [
            {name: "Не выбрано"},
            {name: "Исполнитель_1"},
            {name: "Исполнитель_2"},
            {name: "Исполнитель_3"},
            {name: "Исполнитель_4"},
            {name: "Исполнитель_5"}
        ]
        return (
            <div className={'AddTask'} style={divStyle}>
                <textarea
                    name="nameTask"
                    style={nameStyle}
                    placeholder='Описание'
                    type="text"
                    onChange={this.onChangeTaskName}
                />
                <select
                    name="nameWorker"
                    style={selectStyle}
                    placeholder='Не выбрано'
                    onChange={this.onChangeWorker}
                >

                    {
                        worker.map((worker,index) => {
                            return (
                                index===0
                                    ?<option disabled selected>{worker.name}</option>
                                        :<option>
                                            {
                                                worker.name
                                            }
                                        </option>
                            )
                        })
                    }
                </select>
                <input
                    name="priorit"
                    style={prioritStyle}
                    placeholder={'Приоритет'}
                    type="number"
                    max={10}
                    min={0}
                    onChange={this.onChangePriorit}
                />
                <button
                    style={buttonStyle}
                    onClick={this.onSubmit}
                >Добавить
                </button>
            </div>
        )
    }
}