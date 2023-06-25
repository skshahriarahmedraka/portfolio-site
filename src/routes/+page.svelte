<script lang="ts">
	import { flip } from 'svelte/animate';
	// import { fade, fly } from 'svelte/transition';

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
	import Github from '$lib/techImages/github2.svelte';

	import Aboutme from '$lib/aboutme/index.svelte';
	import Blog from '$lib/blog/index.svelte';
	import Contact from '$lib/contact/index.svelte';
	import Projects from '$lib/projects/index.svelte';
	import Resume from '$lib/resume/index.svelte';
	import { backInOut, elasticInOut, linear } from 'svelte/easing';

	const imgUrl = new URL('../lib/images/f1.png', import.meta.url).href;
	let li = ['Aboutme', 'Resume', 'Projects', 'Blog', 'Contact'];
	let active = li[0];
	let thisProfile;
	import { elasticIn, elasticOut } from 'svelte/easing';

	import { slide } from 'svelte/transition';
</script>

<svelte:head>
	<title>Sk Shahriar Ahmed Raka</title>
</svelte:head>

<div
	class="xs:flex-col xs:items-center xs:justify-center xs:px-3  flex  h-fit min-h-screen  w-full justify-center gap-6 overflow-clip bg-[#121212] sm:flex-col sm:items-center sm:justify-center md:flex-col md:items-center  md:justify-center  lg:flex-col lg:items-center lg:justify-center   xl:flex-row "
>
	<!-- profile image and social links -->
	<div
		class=" xs:static xs:m-2 xs:h-fit xs:w-full  sticky top-12  mt-12 flex flex-col items-center  rounded-3xl  border-[1px]   border-[#383838] bg-[#1e1e1f] sm:static sm:mt-8  sm:h-fit  sm:w-[520px] sm:flex-col sm:flex-wrap md:static md:mt-8 md:h-fit  md:w-[700px] md:flex-col md:flex-wrap  lg:static  lg:mt-8    lg:h-fit  lg:w-[950px] lg:flex-col  lg:flex-wrap xl:h-fit xl:w-[275px] xl:gap-4 "
	>
		<!-- Prifileimage , name , work -->
		<div
			class=" flex flex-col justify-center sm:w-full sm:flex-row sm:items-center sm:justify-start md:w-full md:flex-row md:items-center md:justify-start  lg:w-full lg:flex-row lg:items-center lg:justify-start "
		>
			<img
				src={imgUrl}
				alt=""
				class=" xs:mt-4 xs:h-[125px] xs:w-[125px] mt-8 h-[150px] w-[150px] self-center  rounded-xl bg-[#343434] object-cover sm:mt-3 sm:ml-3 sm:items-center sm:self-start md:mt-3 md:ml-3 md:items-center md:self-start lg:mt-3 lg:ml-3 lg:items-center lg:self-start"
			/>
			<div
				class="lg:items-left md:items-left flex  w-full  flex-col gap-2 md:ml-3 md:h-full md:w-full lg:ml-3 lg:h-full lg:w-full  "
			>
				<div class="flex w-full flex-row sm:flex-col  sm:gap-1 ">
					<p
						class=" lg:self-left md:self-left sm:self-left font-Poppins xs:text-xl text-center text-2xl font-medium text-[#fafafa]  sm:-ml-5  lg:text-left "
					>
						Sk Shahriar Ahmed Raka
					</p>
					<div class=" md:grow lg:grow xl:hidden" />
					<div
					on:keypress={()=>{}}
						on:click={() => {
							window.open(
								'https://www.google.com/maps/place/Dhaka/@23.7806365,90.4193257,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.810332!4d90.4125181',
								'_blank'
							);
						}}
						class="  xs:hidden flex flex-row hover:cursor-pointer sm:ml-4  md:mr-5  lg:mr-5 xl:hidden "
					>
						<Location2 />
						<p class=" xs:text-xs text-sm text-[#fafafa]">Dhaka, Bangladesh</p>
					</div>
				</div>
				<div
					class="xs:mb-3 flex w-fit flex-col gap-2 self-center sm:ml-2 sm:mt-3 sm:flex-row sm:self-start md:flex-row md:self-start lg:flex-row lg:self-start"
				>
					<div
						class=" font-OpenSans  w-fit self-center rounded-lg bg-[#343434] p-1 px-3 text-sm text-[#fafafa] "
					>
						Golang Developer
					</div>
					<div
						class="font-OpenSans w-fit self-center rounded-lg bg-[#343434]  p-1 px-3 text-sm text-[#fafafa] "
					>
						Full-Stack Software Engineer
					</div>
				</div>
			</div>
		</div>
		<div class="h-[1px] w-[80%] bg-[#343434] " />
		<div
			class="xs:mt-2 xs:mb-3 flex  w-full flex-col gap-2 sm:mb-5 md:flex md:flex-row md:flex-wrap  lg:flex lg:flex-row lg:flex-wrap   "
		>
			<div
				class=" flex h-fit   w-full flex-col gap-6  sm:mt-6 sm:flex-row  sm:flex-wrap sm:justify-start sm:gap-5  md:mt-6 md:flex-row  md:flex-wrap md:justify-start md:gap-5 lg:mt-6 lg:flex-row lg:flex-wrap  lg:justify-start lg:space-x-2  "
			>
				<!-- Email -->
				<div
					on:click={() => {
						navigator.clipboard.writeText('skshahriarahmedraka@gmail.com');
						window.open(
							'https://mail.google.com/mail/?view=cm&fs=1&to=skshahriarahmedraka@gmail.com',
							'_blank'
						);
					}}
					on:keypress={()=>{}}
					transition:slide={{ duration: 2000, easing: linear }}
					class="group flex  h-fit w-full flex-row space-x-4  hover:cursor-pointer sm:ml-1 sm:w-fit md:ml-1 md:w-fit lg:ml-2 lg:w-fit  "
				>
				<!-- {#if ! window.matchMedia("(max-width: 1250px)").matches} -->
					 <!-- content here -->
					 <div
					 transition:slide={{ duration: 2000, easing: linear }}
						 class="  xs:w-[48px]  ml-3  flex  h-[48px] w-[56px] items-center justify-center rounded-2xl xl:group-hover:transition-all xl:group-hover:ease-in-out xl:group-hover:duration-500  xl:group-hover:hidden "
						 style=" background-color: #212123; box-shadow: -2px -2px 4px 0 rgba(0, 0, 0, 0.3), 4px 4px 6px rgba(255, 255, 255, 0.25)"
					 >
						 <Attherate2
						 
						 class="xl:group-hover:hidden   " />
					 </div>
				<!-- {/if} -->

					<div
					transition:slide={{ duration: 2000, easing: linear }} class=" h-[48px]	flex w-fit flex-col overflow-hidden text-[#fafafa]   ">
						<p class="  font-OpenSans text-base  font-semibold">Email :</p>
						<p class=" font-Poppins text-sm font-thin  ">skshahriarahmedraka@gmail.com</p>
					</div>
				</div>
				<!-- Github -->
				<div

					on:keypress={()=>{}}
					on:click={() => {
						window.open('https://github.com/skshahriarahmedraka', '_blank');
					}}
					transition:slide={{ duration: 2000, easing: elasticOut }}
					class="group flex  h-fit w-full flex-row space-x-4   hover:cursor-pointer md:w-fit  lg:w-fit   "
				>
					<div
						class="  xs:w-[48px]  ml-3  flex  h-[48px] w-[56px] items-center justify-center rounded-2xl  md:ml-1 xl:group-hover:hidden "
						style=" background-color: #212123; box-shadow: -2px -2px 4px 0 rgba(0, 0, 0, 0.3), 4px 4px 6px rgba(255, 255, 255, 0.25)"
					>
						<Github
							class="h-7 w-7  fill-[#ffdb70] stroke-0 transition-all duration-200 ease-linear"
						/>
					</div>

					<div
						class="

					flex w-fit flex-col overflow-hidden text-[#fafafa] h-[48px]  "
					>
						<p class="  font-OpenSans text-base font-semibold">Github :</p>
						<p class=" font-Poppins text-sm font-thin  ">github.com/skshahriarahmedraka</p>
					</div>
				</div>
				<!-- Telegram -->
				<div

					on:keypress={()=>{}}
					on:click={() => {
						window.open('https://t.me/shahriarraka', '_blank');
					}}
					transition:slide={{ duration: 2000, easing: elasticOut }}
					class="group flex  h-fit w-full flex-row space-x-4   hover:cursor-pointer md:mr-28 md:w-fit   lg:w-fit  "
				>
					<div
						class="  xs:w-[48px]  ml-3  flex  h-[48px] w-[48px]   items-center justify-center rounded-2xl sm:w-[56px]  md:w-[56px] xl:group-hover:hidden "
						style=" background-color: #212123; box-shadow: -2px -2px 4px 0 rgba(0, 0, 0, 0.3), 4px 4px 6px rgba(255, 255, 255, 0.25)"
					>
						<Message2 />
					</div>

					<div class="h-[48px]	flex w-fit flex-col overflow-hidden text-[#fafafa]   ">
						<p class="  font-OpenSans text-base font-semibold">Telegram :</p>
						<p class=" font-Poppins text-sm font-thin  ">t.me/shahriarraka</p>
					</div>
				</div>
				<!-- Linkedin -->
				<div
				on:keypress={()=>{}}
					on:click={() => {
						window.open('https://linkedin.com/in/shahriarraka', '_blank');
					}}
					transition:slide={{ duration: 2000, easing: elasticOut }}
					class="group flex  h-fit w-full flex-row space-x-4   hover:cursor-pointer   md:w-fit lg:w-fit lg:pr-12   "
				>
					<div
						class="  xs:w-[48px]  ml-3  flex  h-[48px] w-[48px]  items-center justify-center rounded-2xl sm:w-[56px] md:w-[56px] xl:group-hover:hidden"
						style=" background-color: #212123; box-shadow: -2px -2px 4px 0 rgba(0, 0, 0, 0.3), 4px 4px 6px rgba(255, 255, 255, 0.25)"
					>
						<Linkedin />
					</div>

					<div class="	h-[48px] flex w-fit flex-col overflow-hidden text-[#fafafa]   ">
						<p class="  font-OpenSans text-base font-semibold">Linkedin :</p>
						<p class=" font-Poppins text-sm font-thin line-clamp-1  ">
							linkedin.com/in/shahriarraka
						</p>
					</div>
				</div>
				<!-- Upwork -->
				<div
					on:keypress={()=>{}}
					on:click={() => {
						window.open('https://upwork.com/o/profiles/users/~0107ef3405bffbe57e/', '_blank');
					}}
					transition:slide={{ duration: 2000, easing: elasticOut }}
					class="group flex  h-fit w-full flex-row space-x-4   hover:cursor-pointer    md:w-fit  lg:w-fit   "
				>
					<div
						class="  xs:w-[56px]  ml-3  flex  h-[48px]  w-[65px]   items-center justify-center       rounded-2xl xl:group-hover:hidden "
						style=" background-color: #212123; box-shadow: -2px -2px 4px 0 rgba(0, 0, 0, 0.3), 4px 4px 6px rgba(255, 255, 255, 0.25)"
					>
						<Upwork />
					</div>

					<div class="h-[48px]	flex w-full flex-col overflow-hidden text-[#fafafa]   ">
						<p class="  font-OpenSans text-base font-semibold">Upwork :</p>
						<p class=" font-Poppins overflow-hidden text-sm  font-thin line-clamp-1 ">
							upwork.com/o/profiles/users/~0107ef3405bffbe57e/
						</p>
					</div>
				</div>
				<!-- StackOverflow -->
				<div
					on:keypress={()=>{}}
					on:click={() => {
						window.open('https://stackoverflow.com/users/12216779/', '_blank');
					}}
					transition:slide={{ duration: 2000, easing: elasticOut }}
					class="group flex  h-fit w-full flex-row space-x-4   hover:cursor-pointer  md:mb-5 md:w-fit lg:mb-5  lg:w-fit    "
				>
					<div
						class="  xs:w-[48px]  ml-3  flex  h-[48px] w-[56px]  items-center justify-center rounded-2xl  xl:group-hover:hidden "
						style=" background-color: #212123; box-shadow: -2px -2px 4px 0 rgba(0, 0, 0, 0.3), 4px 4px 6px rgba(255, 255, 255, 0.25)"
					>
						<Stackoverflow />
					</div>

					<div class="h-[48px]	flex w-fit flex-col overflow-hidden text-[#fafafa]  ">
						<p class="  font-OpenSans text-base font-semibold">StackOverflow :</p>
						<p class=" font-Poppins text-sm font-thin line-clamp-1  ">
							stackoverflow.com/users/12216779/
						</p>
					</div>
				</div>

				<!-- Location -->
				<div
					on:keypress={()=>{}}
					on:click={() => {
						window.open(
							'https://www.google.com/maps/place/Dhaka/@23.7806365,90.4193257,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.810332!4d90.4125181',
							'_blank'
						);
					}}
					transition:slide={{ duration: 2000, easing: elasticOut }}
					class=" xs:hidden mt-5 mb-5 flex  flex-row  self-center  hover:cursor-pointer sm:hidden md:hidden lg:hidden  "
				>
					<Location2 />
					<p class=" text-sm text-[#fafafa]">Dhaka, Bangladesh</p>
				</div>
			</div>
		</div>
	</div>

	<!-- main body -->
	<div
		class=" xs:rounded-tl-none  xs:h-fit xs:w-full mb-12 rounded-3xl border-[1px]  border-[#383838] bg-[#1e1e1f] sm:h-fit sm:w-[520px] md:h-fit md:w-[700px] lg:h-fit lg:w-[950px] xl:mt-12 xl:h-fit xl:w-[900px] xl:pb-10"
	>
		<!-- fdafjl -->
		<div
			class="xs:space-x-0  xs:justify-between xs:px-2 xs:text-sm xs:w-full font-Poppins float-right flex h-[65px] w-[535px] flex-row justify-center space-x-10 rounded-tr-3xl  rounded-bl-3xl  border-[1px]  border-[#383838] bg-[#282829] sm:w-full  md:w-[500px]"
		>
			<button
				on:click={() => (active = li[0])}
				class="h-full w-fit text-center text-base  {active === li[0]
					? 'font-medium  text-[#ffdb70]'
					: ' font-normal   text-[#fafafa]'} ">About</button
			>
			<button
				on:click={() => (active = li[1])}
				class="h-full w-fit text-center   {active === li[1]
					? 'font-medium  text-[#ffdb70]'
					: ' font-normal   text-[#fafafa]'} ">Resume</button
			>
			<button
				on:click={() => (active = li[2])}
				class="h-full w-fit text-center    {active === li[2]
					? 'font-medium  text-[#ffdb70]'
					: ' font-normal   text-[#fafafa]'}">Projects</button
			>
			<button
				on:click={() => (active = li[3])}
				class="h-full w-fit text-center    {active === li[3]
					? 'font-medium  text-[#ffdb70]'
					: ' font-normal   text-[#fafafa]'}">Blog</button
			>
			<button
				on:click={() => (active = li[4])}
				class="h-full w-fit text-center   {active === li[4]
					? 'font-medium  text-[#ffdb70]'
					: ' font-normal   text-[#fafafa]'}">Contact</button
			>
		</div>
		{#if active === li[0]}
			<Aboutme />
		{:else if active === li[1]}
			<Resume />
		{:else if active === li[2]}
			<Projects />
		{:else if active === li[3]}
			<Blog />
		{:else if active === li[4]}
			<Contact />
		{:else}
			<div class="">404 Error</div>
		{/if}
	</div>
</div>
