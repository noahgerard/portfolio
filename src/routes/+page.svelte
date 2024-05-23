<script>
	import Iconlink from "../components/iconlink/page.svelte";
	import Project from "../components/project/page.svelte";

</script>
<div class="flex-col flex h-full mx-auto max-w-xl gap-4 text-secondary">
	<div class="mt-[20%] flex flex-row w-full h-fit">
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
			<img src="https://placehold.co/600x600" alt="Headshot" class="rounded-full size-32 sm:size-48 shadow-md" />
		</div>
	</div>

	<div class="p-2 text-primary">
		<p class="text-2xl">about</p>
		<p class="text-secondary">
			{"Computer science student at UCF. I love to code and learn new things. I'm always looking for new projects to work on and people to collaborate with :)"}
		</p>
	</div>

	<div class="p-2 text-primary">
		<p class="text-2xl">projects</p>
		<div class="my-4">
			<Project name="Test" description="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet." github={null} />
			<Project name="Test" description="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet." github={null} />
			<Project name="Test" description="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet." github={null} />
			<Project name="Test" description="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet." github={null} />

		</div>
	</div>
</div>
