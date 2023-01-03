import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormmatter, priceFormatter } from "../../utils/formatter";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TranasactionsContainer, TransactionsTable } from "./styles";


export function Tranasactions() {

    const { transactions } = useContext(TransactionsContext);

    return (
        <div>
            <Header />
            <Summary />

            <TranasactionsContainer >
                <SearchForm />

                <TransactionsTable>
                    <tbody>
                        {transactions.map(transaction => (
                            <tr key={transaction.id}>
                                <td width="50%">{transaction.description}</td>
                                <td>
                                    <PriceHighLight variant={transaction.type}>
                                        {transaction.type === 'outcome' && '- '}
                                        {priceFormatter.format(transaction.price)}
                                    </PriceHighLight>
                                </td>
                                <td>{transaction.category}</td>
                                <td>{dateFormmatter.format(new Date(transaction.createdAt))}</td>
                            </tr>
                        ))}
                    </tbody>
                </TransactionsTable>
            </TranasactionsContainer>
        </div>
    )
}