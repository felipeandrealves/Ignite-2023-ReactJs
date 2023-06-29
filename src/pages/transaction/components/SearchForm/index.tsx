import { MagnifyingGlass } from 'phosphor-react'

import { SearchFormContainer } from './styles'

export const SearchForm = () => {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Busque por transacoes" />

      <button type="submit">
        <MagnifyingGlass size={20} />

        <span>Pesquisar</span>
      </button>
    </SearchFormContainer>
  )
}