import React, { useState } from 'react';
import s from "./styles.module.css";
import Store from "../../bll/store";
import {observer} from "mobx-react-lite";

const Modal = observer(() => {
    const [newName, setNewName] = useState('')
    const [newSurname, setNewSurname] = useState('')
    const [newDateOfBirth, setNewDateOfBirth] = useState('')
    const [newFatherName, setNewFatherName] = useState('')

    function getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }

    return (
        <div className={s.modalCardEditor}>
            <div className={s.modalContent}>
                <div className={s.input}>
                    <input type="text" placeholder={'Insert name'}
                           onChange={(e) => setNewName(e.currentTarget.value)}/>
                </div>
                <div className={s.input}>
                    <input type="text" placeholder={'Insert surname'}
                           onChange={(e) => setNewSurname(e.currentTarget.value)}/>
                </div>
                <div className={s.input}><input type="text" placeholder={'Insert dateOfBirth'}
                                                onChange={(e) => setNewDateOfBirth(e.currentTarget.value)}/></div>
                <div className={s.input}><input type="text" placeholder={'Insert fatherName'}
                                                onChange={(e) => setNewFatherName(e.currentTarget.value)}/></div>
                <div>
                    <button onClick={() => {
                        Store.addCandidate(getRandomInt(44444) ,newName, newSurname, newFatherName, newDateOfBirth)
                        Store.changeModalStatus(false)

                    }}>CREATE NEW CANDIDATE
                    </button>
                </div>
            </div>
        </div>
    )
        ;
})

export default React.memo(Modal);