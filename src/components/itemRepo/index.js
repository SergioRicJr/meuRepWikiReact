import { ItemContainer } from './styles'

export default function ItemRepo({repo, funcRemoveRepo}) {
  return (
    <ItemContainer>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} target='_blank' rel="noreferrer">Ver repositóro</a><br/>
        <a className='remover' onClick={funcRemoveRepo} href='#'>Remover</a>
        <hr></hr>
    </ItemContainer>
  )
}
