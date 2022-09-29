interface RepositoryItemProps {
	repository: {
		name: string
		description: string
		html_url: string
	}
}

function RepositoryItem({ repository }: RepositoryItemProps) {
	return (
		<li>
			<strong>{repository.name}</strong>
			<p>{repository.description ?? 'Não possui descrição'}</p>

			<a target="_blank" href={repository.html_url}>
				Acessar o repositório
			</a>
		</li>
	)
}

export default RepositoryItem
