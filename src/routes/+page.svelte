<script>
	import Photo from '$lib/assets/photo-with-shadow.png'
</script>

<div class="relative h-screen lg:mx-auto lg:flex lg:max-w-7xl lg:justify-between">
	<div
		class="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-full flex-col gap-3 px-3 text-center text-xl sm:left-0 sm:translate-x-0 sm:text-start md:max-w-lg md:translate-y-0 lg:relative lg:max-w-2xl lg:text-5xl"
	>
		<div>
			<p>I'M</p>
			<h1 class="font-mozilla text-7xl text-primary">Hafidz Ubaidillah</h1>
		</div>
		<p>Web And Mobile Developer</p>
		<a href="mailto:hafidz21ub@gmail.com" class="btn mx-auto w-max btn-outline btn-primary sm:mx-0">
			Contact Me
		</a>
	</div>

	<img
		src={Photo}
		alt="hafidz ubadillah's photo"
		aria-hidden="true"
		class="absolute right-1/2 bottom-0 max-h-1/2 translate-x-1/2 sm:right-0 sm:max-h-3/5 sm:translate-x-0 lg:relative lg:self-end"
	/>
</div>

<div class="h-screen"></div>
