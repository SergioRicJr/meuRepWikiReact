import { ItemContainer } from './styles'

export default function ItemRepo({repo}) {
  return (
    <ItemContainer>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} target='_blank' rel="noreferrer">Ver repositóro</a><br/>
        <a className='remover' href='#'>Remover</a>
        <hr></hr>
    </ItemContainer>
  )
}
