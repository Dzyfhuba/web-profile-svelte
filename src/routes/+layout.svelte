<script lang="ts">
	import '../app.css';
	import logoForeWhite from '$lib/assets/logo-short-white.png';
	import logoForeBlack from '$lib/assets/logo-short.png';
	import { href } from '$lib/helpers/url-helper';

	let { children } = $props();
</script>

<nav class="p-4">
	<div class="flex items-center justify-between">
		<!-- Light mode logo -->
		<a href={href('/')} class="flex">
			<img
				src={logoForeBlack}
				class="block h-12 w-12 rounded-full dark:hidden"
				alt="hafidz ubadillah"
			/>
			<!-- Dark mode logo -->
			<img
				src={logoForeWhite}
				class="hidden h-12 w-12 rounded-full dark:block"
				alt="hafidz ubadillah"
			/>
			<div class="text-base-content">
				<h1 class="text-2xl font-bold">Hafidz Ubadillah</h1>
				<p class="text-sm">Web Developer</p>
			</div>
		</a>
		<div class="dropdown dropdown-end">
			<div tabindex="0" role="button" class="btn btn-circle btn-ghost">
				<svg
					class="h-6 w-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16m-7 6h7"
					></path>
				</svg>
			</div>
			<ul class="dropdown-content menu z-1 mt-3 w-52 menu-sm rounded-box bg-base-100 p-2 shadow">
				<li><a href={href('/')}>Homepage</a></li>
				<li><a href={href('/projects')}>Projects</a></li>
				<li><a href={href('/blogs')}>Blogs</a></li>
			</ul>
		</div>
	</div>
</nav>

{@render children()}
