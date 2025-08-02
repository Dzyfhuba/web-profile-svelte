<script lang="ts">
	import '../app.css'
	import logoForeWhite from '$lib/assets/logo-short-white.png'
	import logoForeBlack from '$lib/assets/logo-short.png'
	import { href } from '$lib/helpers/url-helper'
	import { onMount, onDestroy } from 'svelte'

	let { children } = $props()

	const menuItems = [
		{ label: 'About', href: href('/') },
		{ label: 'Portfolio', href: href('/about') },
		{ label: 'Blog', href: href('/blog') }
	]

	let previousScroll = 0
	let isVisible = $state(true)

	const handleScroll = () => {
		const currentScroll = window.scrollY
		isVisible = currentScroll < previousScroll || currentScroll < 10
		previousScroll = currentScroll
	}

	onMount(() => {
		if (typeof window === 'undefined') return
		window.addEventListener('scroll', handleScroll)
	})

	onDestroy(() => {
		if (typeof window === 'undefined') return
		window.removeEventListener('scroll', handleScroll)
	})
</script>

<nav
	class="fixed top-0 right-0 left-0 z-50 bg-base-100 p-4 transition-transform duration-300"
	style="transform: translateY({isVisible ? '0%' : '-100%'});"
>
	<div class="mx-auto max-w-xl">
		<div class="flex items-center justify-between">
			<!-- Light mode logo -->
			<a href={href('/')} class="flex">
				<img
					src={logoForeWhite}
					class="hidden h-12 w-12 rounded-full dark:block"
					alt="hafidz ubadillah"
				/>
				<!-- <div class="text-base-content">
				<h1 class="text-2xl font-bold">Hafidz Ubadillah</h1>
				<p class="text-sm">Web Developer</p>
			</div> -->
			</a>

			<!-- Desktop menu -->
			<div class="hidden sm:flex">
				<ul class="menu menu-horizontal p-0">
					{#each menuItems as item}
						<li>
							<a href={item.href}>{item.label}</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Mobile menu -->
			<div class="dropdown dropdown-end sm:hidden">
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
					{#each menuItems as item}
						<li>
							<a href={item.href}>{item.label}</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</nav>

{@render children()}
