import RepositoryItem from './RepositoryItem'

import '../styles/repositories.scss'
import { useEffect, useState } from 'react'

interface Repository {
	id: string
	name: string
	description: string
	html_url: string
}

export function RespositoryList() {
	const [repositories, setRepositories] = useState<Repository[]>([])

	useEffect(() => {
		fetch('https://api.github.com/users/glsvitoria/repos')
			.then((reponse) => reponse.json())
			.then((data) => setRepositories(data))
	}, [])

	return (
		<section className="repository-list">
			<h1>Lista de repositórios</h1>

			<ul>
				{repositories.map((repository) => {
					return (
						<RepositoryItem key={repository.id} repository={repository} />
					)
				})}
			</ul>
		</section>
	)
}
