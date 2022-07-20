<script lang="ts" context="module">
</script>

<script lang="ts">
	import { goto } from '$app/navigation';
	import Attherate from '$lib/svgs/attherate.svelte';
	import Attherate2 from '$lib/svgs/attherate2.svelte';
	import Message from '$lib/svgs/message.svelte';
	import Message2 from '$lib/svgs/message2.svelte';
	import Linkedin from '$lib/svgs/linkedin.svelte';
	import Upwork from '$lib/svgs/upwork.svelte';
	import Stackoverflow from '$lib/svgs/stackoverflow.svelte';
	import Location from '$lib/svgs/location.svelte';
	import Location2 from '$lib/svgs/location2.svelte';
import Github from "$lib/techImages/github2.svelte";


	import Aboutme from '$lib/aboutme/index.svelte';
	import Blog from '$lib/blog/index.svelte';
	import Contact from '$lib/contact/index.svelte';
	import Portfolio from '$lib/portfoilo/index.svelte';
	import Resume from '$lib/resume/index.svelte';

	const imgUrl = new URL('../lib/images/f1.png', import.meta.url).href;
	let li = ['Aboutme', 'Resume', 'Portfolio', 'Blog', 'Contact'];
	let active = li[2];
	let thisProfile
</script>

<svelte:head>
	<title>Sk Shahriar Ahmed Raka</title>
</svelte:head>

<div
	class="flex h-fit min-h-screen overflow-clip  w-full  justify-center gap-6  bg-[#121212] sm:flex-col sm:items-center sm:justify-center md:flex-col md:items-center md:justify-center lg:flex-col  lg:items-center lg:justify-center xl:flex-row xs:flex-col   "
>
	<!-- profile image and social links -->
	<div	
		class="  sticky  top-12  mt-12 flex flex-col items-center  gap-4 rounded-3xl border-[1px] border-[#383838]  bg-[#1e1e1f] sm:h-[180px] sm:w-[520px] md:h-[180px] md:w-[700px] lg:h-[180px] lg:w-[950px] xl:h-fit xl:w-[275px] xs:h-[115px] xs:w-full "
	>
		<img
			src={imgUrl}
			alt=""
			class=" mt-8 h-[150px] w-[150px] rounded-xl bg-[#343434] object-cover"
		/>
		<p class=" text-center font-Poppins text-2xl  font-medium text-[#fafafa]  ">
			Sk Shahriar Ahmed <br /> Raka
		</p>
		<div class=" rounded-lg bg-[#343434] p-1 px-3 font-OpenSans text-sm text-[#fafafa]">
			Golang Developer
		</div>
		<div class="rounded-lg bg-[#343434] p-1 px-3 font-OpenSans text-sm text-[#fafafa]">
			Full-Stack Web Developer
		</div>
		<div class="h-[1px] w-[80%] bg-[#343434] " />
		<div class=" flex h-fit  w-full flex-col gap-6">
			<!-- EMAIL -->
			<div
				on:click={() => {
					navigator.clipboard.writeText('skshahriarahmedraka@gmail.com');
					window.open('mailto:skshahriarahmedraka@gmail.com');
				}}
				class=" flex h-fit w-full items-center justify-start hover:cursor-pointer "
			>
				<div
					class="absolute ml-3 h-[48px]  w-[48px]  rounded-2xl "
					style=" align-items: center;background-color: #212123; box-shadow: -2px -2px 4px 0 rgba(0, 0, 0, 0.3), 4px 4px 6px rgba(255, 255, 255, 0.25); display: flex; justify-content: center; margin-right:2rm "
				>
					<Attherate2 />
				</div>
				<div class="ml-[75px] flex flex-col text-[#fafafa] line-clamp-1 ">
					<p class="  font-OpenSans text-base font-semibold">Email :</p>
					<p class="font-Poppins text-sm font-thin">skshahriarahmedraka@gmail.com</p>
				</div>
			</div>
			<!-- Github -->
			<div
				on:click={() => {
					window.open('https://github.com/skshahriarahmedraka', '_blank');
				}}
				class="flex h-fit w-full items-center justify-start hover:cursor-pointer "
			>
				<div
					class="absolute ml-3 h-[48px]  w-[48px]  rounded-2xl "
					style=" align-items: center;background-color: #212123; box-shadow: -2px -2px 4px 0 rgba(0, 0, 0, 0.3), 4px 4px 6px rgba(255, 255, 255, 0.25); display: flex; justify-content: center; margin-right:2rm "
				>
					<Github class="h-7 w-7 stroke-0 fill-[#ffdb70]" />
				</div>
				<div class="ml-[75px] flex flex-col text-[#fafafa] line-clamp-1 ">
					<p class="  font-OpenSans text-base font-semibold">Github :</p>
					<p class=" font-Poppins text-sm font-thin ">github.com/skshahriarahmedraka</p>
				</div>
			</div>
			<!-- Telegram -->
			<div
				on:click={() => {
					window.open('https://t.me/shahriarraka', '_blank');
				}}
				class="flex h-fit w-full items-center justify-start hover:cursor-pointer "
			>
				<div
					class="absolute ml-3 h-[48px]  w-[48px]  rounded-2xl "
					style=" align-items: center;background-color: #212123; box-shadow: -2px -2px 4px 0 rgba(0, 0, 0, 0.3), 4px 4px 6px rgba(255, 255, 255, 0.25); display: flex; justify-content: center; margin-right:2rm "
				>
					<Message2 />
				</div>
				<div class="ml-[75px] flex flex-col text-[#fafafa] line-clamp-1 ">
					<p class="  font-OpenSans text-base font-semibold">Telegram :</p>
					<p class=" font-Poppins text-sm font-thin ">t.me/shahriarraka</p>
				</div>
			</div>
			<!-- Linkedin -->
			<div
				on:click={() => window.open('https://linkedin.com/in/shahriarraka', '_blank')}
				class="flex h-fit w-full items-center justify-start hover:cursor-pointer "
			>
				<div
					class="absolute ml-3 h-[48px]  w-[48px]  rounded-2xl "
					style=" align-items: center;background-color: #212123; box-shadow: -2px -2px 4px 0 rgba(0, 0, 0, 0.3), 4px 4px 6px rgba(255, 255, 255, 0.25); display: flex; justify-content: center; margin-right:2rm "
				>
					<Linkedin />
				</div>
				<div class="ml-[75px] flex flex-col text-[#fafafa] line-clamp-1 ">
					<p class="  font-OpenSans text-base font-semibold">Linkedin :</p>
					<p class=" font-Poppins text-sm font-thin">linkedin.com/in/shahriarraka</p>
				</div>
			</div>
			<!-- upwork -->
			<div
				on:click={() =>
					window.open('https://upwork.com/o/profiles/users/~0107ef3405bffbe57e/', '_blank')}
				class="flex h-fit w-full items-center justify-start hover:cursor-pointer "
			>
				<div
					class="absolute ml-3 h-[48px]  w-[48px]  rounded-2xl "
					style=" align-items: center;background-color: #212123; box-shadow: -2px -2px 4px 0 rgba(0, 0, 0, 0.3), 4px 4px 6px rgba(255, 255, 255, 0.25); display: flex; justify-content: center; margin-right:2rm "
				>
					<Upwork />
				</div>
				<div class="ml-[75px] flex flex-col text-[#fafafa] line-clamp-1 ">
					<p class="  font-OpenSans font-semibold ">Upwork :</p>
					<p class=" font-Poppins text-sm font-thin ">
						upwork.com/o/profiles/users/~0107ef3405bffbe57e/
					</p>
				</div>
			</div>
			<!-- StackOverflow -->
			<div
				on:click={() => window.open('https://stackoverflow.com/users/12216779/', '_blank')}
				class=" flex h-fit w-full items-center justify-start hover:cursor-pointer "
			>
				<div
					class="absolute ml-3 h-[48px]  w-[48px]  rounded-2xl "
					style=" align-items: center;background-color: #212123; box-shadow: -2px -2px 4px 0 rgba(0, 0, 0, 0.3), 4px 4px 6px rgba(255, 255, 255, 0.25); display: flex; justify-content: center; margin-right:2rm "
				>
					<Stackoverflow />
				</div>
				<div class="ml-[75px] flex flex-col text-[#fafafa] line-clamp-1 ">
					<p class=" font-OpenSans font-semibold ">StackOverflow :</p>
					<p class=" font-Poppins text-sm font-thin ">stackoverflow.com/users/12216779/</p>
				</div>
			</div>
			<!-- Location -->
			<div
				on:click={() => {
					window.open(
						'https://www.google.com/maps/place/Dhaka/@23.7806365,90.4193257,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.810332!4d90.4125181',
						'_blank'
					);
				}}
				class=" mt-5 flex flex-row  self-center hover:cursor-pointer mb-5 "
			>
				<Location2 />
				<p class=" text-sm text-[#fafafa]">Dhaka, Bangladesh</p>
			</div>
		</div>
	</div>

	<!-- main body -->
	<div
		class=" mb-12  rounded-3xl border-[1px] border-[#383838] bg-[#1e1e1f]  sm:h-[1200px] sm:w-[520px] md:h-[1200px] md:w-[700px] lg:h-[1200px] lg:w-[950px] xl:mt-12 xl:h-fit xl:pb-10 xl:w-[900px] xs:h-[1200px] xs:w-full"
	>
		<!-- fdafjl -->
		<div
			class="float-right  flex h-[65px] w-[535px] flex-row justify-center space-x-10 rounded-tr-3xl rounded-bl-3xl bg-[#282829]  font-Poppins"
		>
			<button
				on:click={() => (active = li[0])}
				class="h-full w-fit text-center text-base   {active===li[0] ? "font-medium  text-[#ffdb70]" : " font-normal   text-[#fafafa]"} ">About</button
			>
			<button
				on:click={() => (active = li[1])}
				class="h-full w-fit text-center   {active===li[1] ? "font-medium  text-[#ffdb70]" : " font-normal   text-[#fafafa]"} ">Resume</button
			>
			<button
				on:click={() => (active = li[2])}
				class="h-full w-fit text-center    {active===li[2] ? "font-medium  text-[#ffdb70]" : " font-normal   text-[#fafafa]"}">Portfolio</button
			>
			<button
				on:click={() => (active = li[3])}
				class="h-full w-fit text-center    {active===li[3] ? "font-medium  text-[#ffdb70]" : " font-normal   text-[#fafafa]"}">Blog</button
			>
			<button
				on:click={() => (active = li[4])}
				class="h-full w-fit text-center   {active===li[4] ? "font-medium  text-[#ffdb70]" : " font-normal   text-[#fafafa]"}">Contact</button
			>
		</div>
		{#if active === li[0]}
			<Aboutme />
		{:else if active === li[1]}
			<Resume />
		{:else if active === li[2]}
			<Portfolio />
		{:else if active === li[3]}
			<Blog />
		{:else if active === li[4]}
			<Contact />
		{:else}
			<div class="">404 Error</div>
		{/if}
	</div>
</div>
