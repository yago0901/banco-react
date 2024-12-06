
import './styles.scss'

const Body = () => {
  return (
    <div className='body'>
      <div className='body__container'>
        <div className='body__container__user_data'>
          <h1>
            Bem vindo,
          </h1>
          <p>
            João da Silva Lima
          </p>
          <p>
            Agência:16159-1 Conta: 59486-6
          </p>
          <p>
            Saldo: R$ 1.000,00
          </p>
        </div>
        <div className='body__container__history'>
          <h1>
            Histórico
          </h1>
          <div className='body__container__history__items'>
            <div className='body__container__history__items__item'>
              <div>Seta</div>
              <div>Seta</div>
            </div>
            <div className='body__container__history__items__item'>
              <div>CPF/CNPJ</div>
              <div>CPF/CNPJ</div>
            </div>
            <div  className='body__container__history__items__item'>
              <div>Fornecido</div>
              <div>CPF/CNPJ</div>
            </div>
            <div  className='body__container__history__items__item'>
              <div>Agência / Conta</div>
              <div>CPF/CNPJ</div>
            </div>
            <div className='body__container__history__items__item'>
              <div>Chave Pix</div>
              <div>CPF/CNPJ</div>
            </div>
            <div className='body__container__history__items__item'>
              <div>Banco</div>
              <div>CPF/CNPJ</div>
            </div>
            <div className='body__container__history__items__item'>
              <div>Valor</div>
              <div>CPF/CNPJ</div>
            </div>
            <div className='body__container__history__items__item'>
              <div>Data</div>
              <div>CPF/CNPJ</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Body;
