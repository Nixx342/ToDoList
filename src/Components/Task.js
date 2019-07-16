import React from 'react'

const divStyle = {
    width: '28%',
    shadowColor: '2px 2px gray',
    border: '1px solid silver',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '50px',
    marginBottom: '10px',
    textAlign: 'left',
    paddingLeft: '2%',
    boxShadow: '0 0 5px silver'
}

const buttonStyle ={
    height: '25px',
    marginBottom: '5px',
    color: 'black', /* цвет текста */
    textDecoration: 'none', /* убирать подчёркивание у ссылок */
    userSelect: 'none', /* убирать выделение текста */
    background: '#D3D3D3', /* фон кнопки */
    padding: '.7em 1.5em', /* отступ от текста */
    outline: 'none', /* убирать контур в Mozilla */
    marginLeft: '5px',
    textAlign: 'center',
    verticalAlign: 'center'
}

const Task = (props) => {
    return(
        <div className={'Task'} style={divStyle}>
            <p>{props.name}</p>
            <p>{props.worker}</p>
            <p>
                {
                    props.priorit === 0
                        ? '-'
                        : props.priorit
                }
                <div>
                    <button
                        onClick={props.onDelete}
                        style={buttonStyle}
                    >Удалить
                    </button>
                    {
                        props.priorit !== 10
                            ? <button
                                onClick={props.upPriority}
                                style={buttonStyle}
                            >Повысить приоритет</button>
                            : null
                    }
                    {
                        props.priorit !== 0
                            ? <button
                                onClick={props.downPriority}
                                style={buttonStyle}
                            >Понизить приоритет</button>
                            : null
                    }
                </div>
            </p>
        </div>
    )

}

export default Task