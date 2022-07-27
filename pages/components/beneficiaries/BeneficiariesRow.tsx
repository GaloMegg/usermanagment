import React, { useState } from 'react'
import { Beneficiaries } from '../../types/beneficiaries'
import { User } from '../../types/userInfo'
import BeneficiaryItem from './BeneficiaryItem'
let beneficiariesList: Beneficiaries[] = [
  {
    "id": "HASH-10",
    "name": "Comedor Infantil",
    "location": "Argentina",
    "quantity": 23,
    "owner": "1234",
  },
  {
    "id": "HASH-11",
    "name": "Cruz Roja",
    "location": "Argentina",
    "quantity": 31,
    "owner": "4567",
  },

]
const BeneficiariesRows = ({ userInfo }: { userInfo: User }) => {
  const [programListState, setProgramListState] = useState(beneficiariesList)
  const { beneficiary } = userInfo.permissions

  const removeOneBeneficiary = (id: string) => {
    setProgramListState(programListState.filter(b => b.id != id))
  }
  const updateProgramData = (id: string, name: string, location: string, quantity: number) => {
    setProgramListState(programListState.map(b => {
      if (b.id == id) {
        b.name = b.name == name ? b.name : name
        b.location = b.location == location ? b.location : location
        b.quantity = b.quantity == quantity ? b.quantity : quantity
      }
      return b
    }))
  }

  if (beneficiary.view == "none") {
    return <h6>You are not allowed to see the beneficiary groups</h6>
  }
  return (
    <>
      <section>
        <article>
          <p>Name</p>
          <p>Location</p>
          <p>Quantity</p>
        </article>
        {programListState.map(b => {
          return beneficiary.view == "owned-only"
            ? b.owner == userInfo.userId ? <BeneficiaryItem key={b.id} userInfo={userInfo} {...b} updateProgramData={updateProgramData} removeOneBeneficiary={removeOneBeneficiary} /> : null
            : <BeneficiaryItem key={b.id} {...b} userInfo={userInfo} updateProgramData={updateProgramData} removeOneBeneficiary={removeOneBeneficiary} />
        })}
      </section>
      <style jsx>
        {`
               article {
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }   
            p{
                width: 30%;
                margin: 1%;
            }
          `}
      </style>
    </>
  )
}

export default BeneficiariesRows