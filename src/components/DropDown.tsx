import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import "./Dropdown.css"

export default function DropDown({types, setType}) {

    const [chosen, setChosen] = useState(types[0]);

    let indexes = []
    for (let i = 0; i < types.length; i++) {
        indexes.push(i)
    }

    let showTypes = indexes.map(index=>{
        return (
            <Dropdown.Item href={"#/action-" + (index + 1)} onClick={() => {
                setChosen(types[index])
                setType(types[index])
            }} className='custom-item'>{types[index]}</Dropdown.Item>
        )
    })

    return (
        <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic" className='custom-toggle'>
                {chosen}
            </Dropdown.Toggle>

            <Dropdown.Menu className='custom-menu' >
                {showTypes}
                {/* <Dropdown.Item href="#/action-1" onClick={() => setChosen(types[0])}>{types[0]}</Dropdown.Item>
                <Dropdown.Item href="#/action-2" onClick={() => setChosen(types[1])}>{types[1]}</Dropdown.Item>
                <Dropdown.Item href="#/action-3" onClick={() => setChosen(types[2])}>{types[2]}</Dropdown.Item> */}
            </Dropdown.Menu>
        </Dropdown>
    );
}