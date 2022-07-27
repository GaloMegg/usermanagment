import React, { useState } from 'react'
import { User } from '../../types/userInfo'

const ProgramsItem = ({ userInfo, name, location, beneficiaries, owner, removeOneProgram, id, updateProgramData }: { userInfo: User, name: string, location: string, beneficiaries: number, owner: string, removeOneProgram: Function, id: string, updateProgramData: Function }) => {
    const [disabled, setDisabled] = useState(true)
    const [programInfo, setProgramInfo] = useState({
        name,
        location,
        beneficiaries,
        owner,
        id
    })
    const { programs } = userInfo.permissions

    return (
        <>
            <form >
                <input
                    name='name'
                    value={programInfo.name}
                    disabled={disabled}
                    onChange={(e) => setProgramInfo({ ...programInfo, [e.target.name]: e.target.value })} />

                <input
                    name='location'
                    value={programInfo.location}
                    disabled={disabled}
                    onChange={(e) => setProgramInfo({ ...programInfo, [e.target.name]: e.target.value })} />

                <input
                    name='beneficiaries'
                    value={programInfo.beneficiaries}
                    disabled={disabled}
                    onChange={(e) => setProgramInfo({ ...programInfo, [e.target.name]: e.target.value })} />
                <div className='form__buttons--container'>

                    {((programs.edit == "owned-only" && owner == userInfo.userId) || programs.edit == "everything") &&

                        <button type='button'
                            onClick={() => {
                                setDisabled(!disabled);
                                if (!disabled) {
                                    updateProgramData(id, programInfo.name, programInfo.location, programInfo.beneficiaries)
                                }
                            }} className="form__buttons--btn">
                            {disabled ? "Edit" : "Done"}

                        </button>}

                    {((programs.deleteData == "owned-only" && owner == userInfo.userId) || programs.deleteData == "everything") &&

                        <button type='button'
                            onClick={() => { removeOneProgram(id) }} className="form__buttons--btn">
                            Delete
                        </button>}
                </div>
            </form>

            <style jsx>
                {`
                form {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                
                }
                input, input:disabled {
                    margin: 1%;
                    width: 30%;
                }
                .form__buttons--container{
                    display: flex;
                    min-width: 10%;
                }
                .form__buttons--btn{
                display: flex;
                align-items: center;
                justify-content: center;
                    padding: 4%;
                    color: white;
                
                    background-color: #005bc5;
                    border-radius: 16px;
                }
            `}
            </style>
        </>
    )
}

export default ProgramsItem