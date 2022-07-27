import React from 'react'

const BeneficiariesItem = ({ name, amount, currency }: { name: string, amount: number, currency: string }) => {
    return (
        <>
            <article > <h1>{name}</h1> <p>{amount.toLocaleString()} - {currency}</p> </article>
            <style jsx>
                {`
                article {
                    width: 60%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
            `}
            </style>
        </>
    )
}

export default BeneficiariesItem