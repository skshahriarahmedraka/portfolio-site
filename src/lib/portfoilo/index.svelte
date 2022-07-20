<script lang="ts">
	import Dot from '$lib/svgs/dot.svelte';
	const imgUrl = new URL('../images/1.png', import.meta.url).href;
</script>

<div class="flex h-full w-full flex-col ">
	<p class=" -mt-5 ml-8 font-Poppins text-3xl font-bold text-[#fafafa] ">Portfolio</p>
	<div class=" mt-3 ml-8 h-[5px] w-12 rounded-xl bg-gradient-to-r from-[#fbd66d] to-[#ffbc5d]" />

	<div class="flex flex-row flex-wrap justify-center gap-8 ">
		<!-- blog -->
		<div
			on:click={() => {
				window.open('https://github.com/skshahriarahmedraka', '_blank');
			}}
			class="mt-8 flex h-fit group  w-[260px] flex-col rounded-xl bg-[#202022] shadow-lg shadow-gray-600  transition-all duration-200 hover:scale-125 hover:cursor-pointer "
		>
			<img src={imgUrl} alt="" class="  h-[200px] w-[260px]  rounded-xl  object-cover" />
			<div class="text-[#fafafa] ">
				<!-- <p class=" mt-2 ml-3 font-OpenSans text-sm text-slate-400">
					Design <Dot class="mx-1 mb-[2px]" /> Fab 23, 2022
				</p> -->
				<p class="ml-3 mt-2 font-Poppins text-xl font-bold">Accord - chating audio & video call</p>
				<p class="mt-2 mb-3 ml-3  mr-2 text-sm text-slate-300 line-clamp-2 group-hover:line-clamp-6  ">
					A Discord/Telegram like Platform | Chat,VideoCall,Group,Channel
				</p>
			</div>
		</div>
		<!-- blog -->
		<div
			on:click={() => {
				window.open('https://github.com/skshahriarahmedraka', '_blank');
			}}
			class="mt-8 group flex h-fit  w-[260px] flex-col rounded-xl bg-[#202022] shadow-lg shadow-gray-600  transition-all duration-200 hover:scale-125 hover:cursor-pointer "
		>
			<img src={imgUrl} alt="" class="  h-[200px] w-[260px]  rounded-xl  object-cover" />
			<div class="text-[#fafafa] ">
				<!-- <p class=" mt-2 ml-3 font-OpenSans text-sm text-slate-400">
					Design <Dot class="mx-1 mb-[2px]" /> Fab 23, 2022
				</p> -->
				<p class="ml-3 mt-2 font-Poppins text-xl font-bold">Heap Overflow</p>
				<p class="mt-2 mb-3 ml-3 text-sm text-slate-300 line-clamp-3 group-hover:line-clamp-6 ">
					A StackOverflow/quora clone website where users can ask questions and give answers , create Group for specific topics
				</p>
			</div>
		</div>
		<!-- blog -->
		<div
			on:click={() => {
				window.open('https://github.com/skshahriarahmedraka', '_blank');
			}}
			class="mt-8 flex h-fit group w-[260px] flex-col rounded-xl bg-[#202022] shadow-lg shadow-gray-600  transition-all duration-200 hover:scale-125 hover:cursor-pointer "
		>
			<img src={imgUrl} alt="" class="  h-[200px] w-[260px]  rounded-xl  object-cover" />
			<div class="text-[#fafafa] ">
				<!-- <p class=" mt-2 ml-3 font-OpenSans text-sm text-slate-400">
					Design <Dot class="mx-1 mb-[2px]" /> Fab 23, 2022
				</p> -->
				<p class="ml-2 mt-2 font-Poppins text-xl font-bold">VideoTube</p>
				<p class="mt-2 mb-3 ml-3 text-sm text-slate-300 line-clamp-2 group-hover:line-clamp-6  ">
					A StackOverflow/quora clone website where users can ask questions and give answers , create Group for specific topics
					
				</p>
			</div>
		</div>
		<!-- blog -->
		<div
			on:click={() => {
				window.open('https://github.com/skshahriarahmedraka', '_blank');
			}}
			class="mt-8 flex h-fit group w-[260px] flex-col rounded-xl bg-[#202022] shadow-lg shadow-gray-600  transition-all duration-200 hover:scale-125 hover:cursor-pointer "
		>
			<img src={imgUrl} alt="" class="  h-[200px] w-[260px]  rounded-xl  object-cover" />
			<div class="text-[#fafafa] ">
				<!-- <p class=" mt-2 ml-3 font-OpenSans text-sm text-slate-400">
					Design <Dot class="mx-1 mb-[2px]" /> Fab 23, 2022
				</p> -->
				<p class="ml-2 mt-2 font-Poppins text-xl font-bold">Amazonian</p>
				<p class="mt-2 mb-3 ml-3 mr-2 text-sm text-slate-300 line-clamp-2 group-hover:line-clamp-6  ">
					A StackOverflow/quora clone website where users can ask questions and give answers , create Group for specific topics
					A StackOverflow/quora clone website where users can ask questions and give answers , create Group for specific topics

				</p>
			</div>
		</div>
		<!-- blog -->
		<div
			on:click={() => {
				window.open('https://github.com/skshahriarahmedraka', '_blank');
			}}
			class="mt-8 flex h-fit group w-[260px] flex-col rounded-xl bg-[#202022] shadow-lg shadow-gray-600  transition-all duration-200 hover:scale-125 hover:cursor-pointer "
		>
			<img src={imgUrl} alt="" class="  h-[200px] w-[260px]  rounded-xl  object-cover" />
			<div class="text-[#fafafa] ">
				<!-- <p class=" mt-2 ml-3 font-OpenSans text-sm text-slate-400">
					Design <Dot class="mx-1 mb-[2px]" /> Fab 23, 2022
				</p> -->
				<p class="ml-2 mt-2 font-Poppins text-xl font-bold">BodyBuilder</p>
				<p class="mt-2 mb-3 ml-3 text-sm text-slate-300 line-clamp-2 group-hover:line-clamp-6  ">
					A StackOverflow/quora clone website where users can ask questions and give answers , create Group for specific topics

				</p>
			</div>
		</div>
	</div>
</div>

<style>
</style>
