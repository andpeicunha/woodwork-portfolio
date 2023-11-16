import { Button } from 'tiox-ds'

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<Button
				buttonSize='sm'
				buttonColor='warning'
			>
				Teste
			</Button>
			<button className='bg-red-500 rounded-lg px-6 py-3'>Teste</button>
			<div className='mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left'></div>
		</main>
	)
}
