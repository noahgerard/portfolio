<script>
	import Iconlink from '../components/iconlink/page.svelte';
	import Project from '../components/project/page.svelte';

	import headshot from '$lib/assets/images/mascot.svg';

	let projects = [
		{
			name: 'Naavis',
			description:
				'Full-stack location sharing platform with real-time data caching and seamless user authentication.',
			tags: ['Next.js', 'PostgreSQL', 'TailwindCSS', 'TRPC', 'Redis', 'Google Maps API'],
			github: 'https://github.com/naavis-app',
			link: 'cheerful-sunshine-bbe8c9.netlify.app/'
		},
		{
			name: 'UnityPay',
			description:
				'Discord-based crypto payment processor with secure escrow and multi-tiered subscription model. Reduced transaction and gas fees by 30%.',
			tags: ['Node.js', 'Discord API', 'PostgreSQL', 'Web3.js'],
			github: null,
			link: null
		},
		{
			name: 'GuitAR',
			description:
				'Interactive VR application for guitar learning, awarded 2nd place at Knight Hacks 2024. Enhanced user experience using Meta’s XR SDK.',
			tags: ['Unity', 'C#', 'Meta XR SDK'],
			github: 'https://github.com/must108/guitAR',
			link: 'https://devpost.com/software/guitar-o3gw19'
		},
		{
			name: 'Insurify',
			description:
				'ML-powered insurance quoting platform with responsive UI and Flask backend. Developed during a hackathon with a team of three.',
			tags: ['Next.js', 'TailwindCSS', 'Flask', 'Python', 'PostgreSQL'],
			github: 'https://github.com/noahgerard/insurify',
			link: 'https://insurify.vercel.app/'
		},
		{
			name: 'GradeMate Discord Bot',
			description:
				'TypeScript Discord bot for tutoring platform with automated student-tutor connections. Achieved 1,500+ customers and generated over $100K in revenue.',
			tags: ['Discord API', 'PostgreSQL', 'PayPal API'],
			github: null,
			link: null
		}
	];
</script>

<div class="flex-col flex min-h-full mx-auto max-w-xl gap-4 my-[6rem] text-secondary">
	<div class="flex flex-row w-full h-fit">
		<div class="flex flex-col sm:py-2">
			<div class="font-semibold text-4xl sm:text-6xl">
				<p>Hey there!</p>
				<p>I'm <span class="text-primary">Noah</span></p>
			</div>

			<div class="flex flex-row gap-1 mt-auto">
				<Iconlink icon="mdi:github" link="https://github.com/noahgerard" />
				<Iconlink icon="mdi:linkedin" link="https://www.linkedin.com/in/noah-gerard/" />
				<Iconlink icon="mdi:instagram" link="https://www.instagram.com" />
			</div>
		</div>
		<div class="ml-auto">
			<img src={headshot} alt="Headshot" class="rounded-full size-32 sm:size-48" />
		</div>
	</div>

	<div class="p-2 text-primary">
		<p class="text-xl font-semibold">about</p>
		<p class="text-secondary">
			{"I'm a second-year computer science student at UCF. I'm a passionate web developer, and I love making cool stuff."}
		</p>
	</div>

	<div class="p-2 text-primary text-po">
		<p class="text-xl font-semibold">projects</p>
		<div class="my-4">
			{#each projects as project}
				<Project
					name={project.name}
					description={project.description}
					github={project.github}
					link={project.link}
					tags={project.tags}
				/>
			{/each}
		</div>
	</div>

	<div class="p-2 text-primary">
		<p class="text-xl font-semibold">contact</p>
		<p class="text-secondary">
			{"Let's chat! Shoot me an email at"}
			<a href="mailto:helix.dev.xyz@gmail.com" class="text-primary inline"
				>helix.dev.xyz@gmail.com</a
			>
		</p>
	</div>
</div>
