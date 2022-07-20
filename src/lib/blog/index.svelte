<script lang="ts">
	import Dot from '$lib/svgs/dot.svelte';

	const imgUrl = new URL('../images/1.png', import.meta.url).href;
	const imgUrl2 = new URL('../images/2.png', import.meta.url).href;
	// const imgUrl = new URL('../lib/images/1.png', import.meta.url).href;
	// const imgUrl = new URL('../lib/images/1.png', import.meta.url).href;
</script>

<div class="flex h-full w-full flex-col ">
	<p class=" -mt-5 ml-8 font-Poppins text-3xl font-bold text-[#fafafa] ">Blog</p>
	<div class=" mt-3 ml-8 h-[5px] w-12 rounded-xl bg-gradient-to-r from-[#fbd66d] to-[#ffbc5d]" />
	<div class="flex flex-row flex-wrap justify-center gap-8 ">
		<!-- blog -->
		<div
		on:click={() => {
			window.open('https://raka.hashnode.dev/', '_blank');
		}}
			class="mt-8 hover:cursor-pointer flex h-fit flex-col rounded-xl bg-[#202022] shadow-lg  shadow-gray-600 transition-all duration-200 hover:scale-125 "
		>
			<img src={imgUrl} alt="" class="  h-[220px]  rounded-xl  object-cover" />
			<div class="text-[#fafafa] ">
				<p class=" mt-2 ml-3 font-OpenSans text-sm text-slate-400">
					Design <Dot class="mx-1 mb-[2px]" /> Fab 23, 2022
				</p>
				<p class="ml-2 mt-2 font-Poppins text-xl font-bold">Design conferences in 2022</p>
				<p class="mt-2 mb-3 ml-3 w-[90%] text-sm text-slate-300 line-clamp-2 ">
					Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
				</p>
			</div>
		</div>
		<!-- blog -->
		<div
		on:click={() => {
			window.open('https://raka.hashnode.dev/', '_blank');
		}}
			class="mt-8 hover:cursor-pointer flex h-fit flex-col rounded-xl bg-[#202022] shadow-lg  shadow-gray-600 transition-all duration-200 hover:scale-125 "
		>
			<img src={imgUrl2} alt="" class="  h-[220px]  rounded-xl  object-cover" />
			<div class="text-[#fafafa] ">
				<p class=" mt-2 ml-3 font-OpenSans text-sm text-slate-400">
					Design <Dot class="mx-1 mb-[2px]" /> Fab 23, 2022
				</p>
				<p class="ml-2 mt-2 font-Poppins text-xl font-bold">Design conferences in 2022</p>
				<p class="mt-2 mb-3 ml-3 w-[90%] text-sm text-slate-300 line-clamp-2 ">
					Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
				</p>
			</div>
		</div>
		<!-- blog -->
		<div
		on:click={() => {
			window.open('https://raka.hashnode.dev/', '_blank');
		}}
			class=" mt-8 hover:cursor-pointer flex h-fit flex-col rounded-xl bg-[#202022] shadow-lg  shadow-gray-600 transition-all duration-200 hover:scale-125 "
		>
			<img src={imgUrl} alt="" class="  h-[220px]  rounded-xl  object-cover" />
			<div class="text-[#fafafa] ">
				<p class=" mt-2 ml-3 font-OpenSans text-sm text-slate-400">
					Design <Dot class="mx-1 mb-[2px]" /> Fab 23, 2022
				</p>
				<p class="ml-2 mt-2 font-Poppins text-xl font-bold">Design conferences in 2022</p>
				<p class="mt-2 mb-3 ml-3 w-[90%] text-sm text-slate-300 line-clamp-2 ">
					Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
				</p>
			</div>
		</div>
		<!-- blog -->
		<div
		on:click={() => {
			window.open('https://raka.hashnode.dev/', '_blank');
		}}
			class=" mt-8 hover:cursor-pointer flex h-fit flex-col rounded-xl bg-[#202022] shadow-lg  shadow-gray-600 transition-all duration-200 hover:scale-125 "
		>
			<img src={imgUrl} alt="" class="  h-[220px]  rounded-xl  object-cover" />
			<div class="text-[#fafafa] ">
				<p class=" mt-2 ml-3 font-OpenSans text-sm text-slate-400">
					Design <Dot class="mx-1 mb-[2px]" /> Fab 23, 2022
				</p>
				<p class="ml-2 mt-2 font-Poppins text-xl font-bold">Design conferences in 2022</p>
				<p class="mt-2 mb-3 ml-3 w-[90%] text-sm text-slate-300 line-clamp-2 ">
					Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
				</p>
			</div>
		</div>
        <!-- blog -->
		<div
		on:click={() => {
			window.open('https://raka.hashnode.dev/', '_blank');
		}}
        class=" mt-8 flex  hover:cursor-pointer h-fit flex-col rounded-xl bg-[#202022] shadow-lg  shadow-gray-600 transition-all duration-200 hover:scale-125 "
    >
        <img src={imgUrl} alt="" class="  h-[220px]  rounded-xl  object-cover" />
        <div class="text-[#fafafa] ">
            <p class=" mt-2 ml-3 font-OpenSans text-sm text-slate-400">
                Design <Dot class="mx-1 mb-[2px]" /> Fab 23, 2022
            </p>
            <p class="ml-2 mt-2 font-Poppins text-xl font-bold">Design conferences in 2022</p>
            <p class="mt-2 mb-3 ml-3 w-[90%] text-sm text-slate-300 line-clamp-2 ">
                Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
            </p>
        </div>
    </div>
    <!-- blog -->
		<div
		on:click={() => {
			window.open('https://raka.hashnode.dev/', '_blank');
		}}
        class=" mt-8 hover:cursor-pointer flex h-fit flex-col rounded-xl bg-[#202022] shadow-lg  shadow-gray-600 transition-all duration-200 hover:scale-125 "
    >
        <img src={imgUrl} alt="" class="  h-[220px]  rounded-xl  object-cover" />
        <div class="text-[#fafafa] ">
            <p class=" mt-2 ml-3 font-OpenSans text-sm text-slate-400">
                Design <Dot class="mx-1 mb-[2px]" /> Fab 23, 2022
            </p>
            <p class="ml-2 mt-2 font-Poppins text-xl font-bold">Design conferences in 2022</p>
            <p class="mt-2 mb-3 ml-3 w-[90%] text-sm text-slate-300 line-clamp-2 ">
                Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
            </p>
        </div>
    </div>
	</div>
</div>

<style>
</style>
