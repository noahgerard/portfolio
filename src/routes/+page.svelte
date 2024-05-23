<script>
	import Iconlink from "../components/iconlink/page.svelte";

</script>
<div class="justify-center flex h-full">
	<div class="flex flex-row max-w-xl w-full h-fit">
		<div class="flex flex-col py-2 text-[#D1BB9E]">
			<div class="font-semibold text-4xl sm:text-6xl">
				<p>Hey there!</p>
				<p>I'm <span class="text-[#A79277]">Noah</span></p>
			</div>
			
			<div class="flex flex-row gap-1 mt-auto">
				<Iconlink icon="mdi:github" link="https://google.com" />
				<Iconlink icon="mdi:linkedin" link="https://google.com" />
				<Iconlink icon="mdi:instagram" link="https://google.com" />	
			</div>
			
		</div>
		<div class="ml-auto">
			<img src="https://placehold.co/600x600" alt="Headshot" class="rounded-full w-48 h-48 shadow-md" />
		</div>
	</div>
</div>
