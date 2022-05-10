export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository?.name ?? "Default"}</strong>
      <p>{props.repository?.description ?? "Default"}</p>
      <a href={props.repository?.link ?? "Default"}>Acesse o repositório</a>
    </li>
  );
}

// No trecho { props.repository?.name ?? 'Default'} o que estamos dizendo é
// Se o repository.name for vazio, retornamos o valor 'Default'
// Caso a propriedade .name não exista, ele também retorna 'Default'
