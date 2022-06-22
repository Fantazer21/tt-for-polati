import React, {useState} from 'react';
import s from './styles.module.css'
import Store from "../../bll/store";
import {observer} from "mobx-react-lite";
import OutsideClickHandler from 'react-outside-click-handler';
import Modal from "../modal/modal";

const AllCandidates = observer(() => {
    const [toggleNameStatus, setToggleNameStatus] = useState(false)
    const [toggleSurnameStatus, setToggleSurnameStatus] = useState(false)
    const [toggleDateOfBirthStatus, setToggleDateOfBirthStatus] = useState(false)
    const [toggleFatherNameStatus, setToggleFatherNameStatus] = useState(false)
    const [toggleId, setToggleId] = useState(43223432)
    const [changeableValue, setChangeableValue] = useState<string>('')


    return (
        <div className={s.AllCandidates}>
            {Store.modalStatus ? <Modal/> : null}
            {Store.candidates.length === 0
                ?
                <h3>Loading ...</h3>
                :
                <div>
                    <table>
                        <caption>Our candidates</caption>
                        <thead>
                        <tr>
                            <th>Имя</th>
                            <th>Фамилия</th>
                            <th>Отчество</th>
                            <th>Дата рождения</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {Store.candidates.map(cand => (
                            <tr key={cand.id}>
                                <td>
                                    {
                                        toggleNameStatus && cand.id === toggleId
                                            ?
                                            <OutsideClickHandler onOutsideClick={() => {
                                                Store.changeName(cand.id, changeableValue)
                                                setToggleNameStatus(false)
                                                if (changeableValue === '') {
                                                    Store.changeName(cand.id, cand.name)
                                                }
                                            }}>
                                                <input onChange={(e) =>
                                                    setChangeableValue(e.currentTarget.value)
                                                }
                                                       className={s.input}
                                                       placeholder={cand.name}/>

                                            </OutsideClickHandler>
                                            :
                                            <div onClick={() => {
                                                setToggleNameStatus(true)
                                                setToggleId(cand.id)
                                            }}>{cand.name}</div>
                                    }
                                </td>
                                <td>
                                    {
                                        toggleSurnameStatus && cand.id === toggleId
                                            ?
                                            <OutsideClickHandler onOutsideClick={() => {
                                                Store.changeSurname(cand.id, changeableValue)
                                                setToggleSurnameStatus(false)
                                                if (changeableValue === '') {
                                                    Store.changeSurname(cand.id, cand.surname)
                                                }
                                            }}>
                                                <input onChange={(e) =>
                                                    setChangeableValue(e.currentTarget.value)
                                                }
                                                       className={s.input}
                                                       placeholder={cand.surname}/>

                                            </OutsideClickHandler>
                                            :
                                            <div onClick={() => {
                                                setToggleSurnameStatus(true)
                                                setToggleId(cand.id)
                                            }}>{cand.surname}</div>
                                    }
                                </td>
                                <td>
                                    {
                                        toggleFatherNameStatus && cand.id === toggleId
                                            ?
                                            <OutsideClickHandler onOutsideClick={() => {
                                                Store.changeFatherName(cand.id, changeableValue)
                                                setToggleFatherNameStatus(false)
                                                if (changeableValue === '') {
                                                    Store.changeFatherName(cand.id, cand.fatherName)
                                                }
                                            }}>
                                                <input onChange={(e) =>
                                                    setChangeableValue(e.currentTarget.value)
                                                }
                                                       className={s.input}
                                                       placeholder={cand.fatherName}/>

                                            </OutsideClickHandler>
                                            :
                                            <div onClick={() => {
                                                setToggleFatherNameStatus(true)
                                                setToggleId(cand.id)
                                            }}>{cand.fatherName}</div>
                                    }
                                </td>
                                <td>
                                    {
                                        toggleDateOfBirthStatus && cand.id === toggleId
                                            ?
                                            <OutsideClickHandler onOutsideClick={() => {
                                                Store.changeDateOfBirth(cand.id, changeableValue)
                                                setToggleDateOfBirthStatus(false)
                                                if (changeableValue === '') {
                                                    Store.changeDateOfBirth(cand.id, cand.dateOfBirth)
                                                }
                                            }}>
                                                <input onChange={(e) =>
                                                    setChangeableValue(e.currentTarget.value)
                                                }
                                                       className={s.input}
                                                       placeholder={cand.dateOfBirth}/>

                                            </OutsideClickHandler>
                                            :
                                            <div onClick={() => {
                                                setToggleDateOfBirthStatus(true)
                                                setToggleId(cand.id)
                                            }}>{cand.dateOfBirth}</div>
                                    }</td>
                                <td>
                                    <button onClick={() => {
                                        Store.removeCandidate(cand.id)
                                    }}>удалить</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <button onClick={() => Store.changeModalStatus(true)}>Добавить кандидата</button>
                </div>
            }
        </div>
    );
})

export default AllCandidates;