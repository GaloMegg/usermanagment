import BeneficiariesItem from "./BeneficiariesItem";

interface beneficiary {
    id: string;
    name: string;
    amount: number;
    currency: string;
}

const beneficiaries: beneficiary[] = [
    {
        id: "HASH-01",
        "name": "John Doe",
        "amount": 100,
        "currency": "USD"
    },
    {
        id: "HASH-02",
        "name": "Jane Doe",
        "amount": 200,
        "currency": "USD"

    },
    {
        id: "HASH-03",
        "name": "Rick Sanchez",
        "amount": 300,
        "currency": "USD"
    }
]

const InfoRows = () => {
    return (
        <>
            <section>
                <article> <h1>Name</h1> <p>Amount-Currency</p> </article>
                {beneficiaries.map(b => <BeneficiariesItem {...b} />)}
            </section>
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

export default InfoRows