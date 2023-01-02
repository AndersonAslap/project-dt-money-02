import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighLight, TranasactionsContainer, TransactionsTable } from "./styles";

export function Tranasactions() {
    return (
        <div>
            <Header />
            <Summary />

            <TranasactionsContainer >
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td>
                                <PriceHighLight variant="income">
                                    R$ 12.800,80
                                </PriceHighLight>
                            </td>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>

                        <tr>
                            <td width="50%">Jogos</td>
                            <td>
                                <PriceHighLight variant="outcome">
                                    - R$ 12.800,80
                                </PriceHighLight>
                            </td>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>

                        <tr>
                            <td width="50%">Alimentação</td>
                            <td>
                                <PriceHighLight variant="income">
                                    R$ 12.800,80
                                </PriceHighLight>
                            </td>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>

                    </tbody>
                </TransactionsTable>
            </TranasactionsContainer>
        </div>
    )
}