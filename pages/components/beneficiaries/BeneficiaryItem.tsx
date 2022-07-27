import React, { useState } from 'react'
import { User } from '../../types/userInfo'

const BeneficiaryItem = ({ userInfo, name, location, owner, quantity, id, updateProgramData, removeOneBeneficiary }: { userInfo: User, name: string, location: string, owner: string, removeOneBeneficiary: Function, quantity: number, id: string, updateProgramData: Function }) => {
  const [disabled, setDisabled] = useState(true)
  const [beneficiaryInfo, setbeneficiaryInfo] = useState({
    name,
    location,
    owner,
    quantity,
    id
  })
  const { beneficiary } = userInfo.permissions
  return (
    <>
      <form >
        <input
          name='name'
          value={beneficiaryInfo.name}
          disabled={disabled}
          onChange={(e) => setbeneficiaryInfo({ ...beneficiaryInfo, [e.target.name]: e.target.value })} />

        <input
          name='location'
          value={beneficiaryInfo.location}
          disabled={disabled}
          onChange={(e) => setbeneficiaryInfo({ ...beneficiaryInfo, [e.target.name]: e.target.value })} />

        <input
          name='quantity'
          value={beneficiaryInfo.quantity}
          disabled={disabled}
          onChange={(e) => setbeneficiaryInfo({ ...beneficiaryInfo, [e.target.name]: e.target.value })} />

        <div className='form__buttons--container'>
          {((beneficiary.edit == "owned-only" && owner == userInfo.userId) || beneficiary.edit == "everything") &&

            <button type='button'
              onClick={() => {
                setDisabled(!disabled);
                if (!disabled) {
                  updateProgramData(id, beneficiaryInfo.name, beneficiaryInfo.location, beneficiaryInfo.owner)
                }
              }} className="form__buttons--btn">
              {disabled ? "Edit" : "Done"}
            </button>}

          {((beneficiary.deleteData == "owned-only" && owner == userInfo.userId) || beneficiary.deleteData == "everything") &&

            <button type='button'
              onClick={() => { removeOneBeneficiary(id) }} className="form__buttons--btn">
              Delete
            </button>}
        </div>
      </form>
      {

      }
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


export default BeneficiaryItem