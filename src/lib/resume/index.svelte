<script lang="ts">
	import Book from '$lib/svgs/book.svelte';
	import Book2 from '$lib/svgs/book2.svelte';
	import Dot from '$lib/svgs/dot.svelte';
	import Sent from '$lib/svgs/sent.svelte';
	import Language from '$lib/svgs/language.svelte';
	import Backend from '$lib/svgs/server.svelte';
	import Fronted from '$lib/svgs/idcard.svelte';
	import Os from '$lib/svgs/ubuntu.svelte';
	import DevOps from '$lib/svgs/devops.svelte';
	import Devops from '$lib/svgs/devops.svelte';
	import Cloud from '$lib/svgs/cloud.svelte';
	import Database from '$lib/svgs/database.svelte';
	import Bug from '$lib/svgs/bug.svelte';
	import Tools from '$lib/svgs/tools.svelte';
	import Download from '$lib/svgs/download2.svelte';
	import Certificate from '$lib/svgs/certificate.svelte';

	const resume = new URL('./SkShahriarAhmedRaka.pdf', import.meta.url).href;
</script>

<div class=" flex h-full w-full flex-col  ">
	<p
		class=" -mt-5 ml-8 font-Poppins text-3xl font-bold text-[#fafafa] sm:mt-2 sm:text-3xl xs:mt-2 xs:text-2xl "
	>
		Resume
	</p>
	<div class=" mt-3 ml-8 h-[5px] w-12 rounded-xl bg-gradient-to-r from-[#fbd66d] to-[#ffbc5d]" />
	<!-- resume -->
	<a
		download
		href={resume}
		class=" float-right -mt-6 ml-8 mr-4 flex h-fit w-fit gap-2 self-end rounded-2xl bg-[#212123] p-2 px-3 font-OpenSans text-[#ffdb70] transition-all duration-150 hover:cursor-pointer  hover:bg-slate-800 sm:-mt-10 xs:-mt-10  xs:mr-2 "
		style=" align-items:center; box-shadow: -2px -2px 4px 0 rgba(0, 0, 0, 0.3), 4px 4px 6px rgba(255, 255, 255, 0.25); display: flex; justify-content: center; margin-right:2rm "
	>
		<!-- <Sent class="h-6 w-6 fill-[#ffdb70]" /> -->
		<Download class="h-6 w-6 fill-[#ffdb70]" />
		<button class=""> Resume </button>
	</a>

	<!-- programming language -->
	<div class="mt-2 ml-2 flex flex-row">
		<div
			class="absolute ml-3 h-[48px] w-[48px]  rounded-2xl  xs:ml-1 "
			style=" align-items: center;background-color: #212123; box-shadow: -2px -2px 4px 0 rgba(0, 0, 0, 0.3), 4px 4px 6px rgba(255, 255, 255, 0.25); display: flex; justify-content: center; margin-right:2rm "
		>
			<!-- <Stackoverflow /> -->
			<Language class=" h-6 w-6  fill-[#ffdb70]" />
			<!-- <Book2 class="   stroke-[#ffdb70]" /> -->
		</div>
		<p class="ml-20 mt-2 font-Poppins text-[22px] font-bold text-[#fafafa] xs:ml-16 xs:text-xl ">
			Programming Languages
		</p>
	</div>

	<div
		class=" min-h-24 mt-1 xs:mt-2 ml-24 flex w-fit flex-row flex-wrap items-center gap-2 font-OpenSans text-lg  text-[#fafafa] xs:ml-5 xs:text-base"
	>
		<p class="">Golang</p>
		<Dot />
		<p class="">TypeScript</p>
		<Dot />
		<p class="">Python</p>
		<Dot />
		<p class="">JavaScript</p>
		<Dot />
		<p class="">Bash</p>
		<Dot />
		<p class="">Powershell</p>
		<Dot />
		<p class="">C</p>
		<Dot />
		<p class="">C++</p>
	</div>

	<!-- Backend -->
	<div class="mt-3 ml-2 flex flex-row">
		<div
			class="absolute ml-3 h-[48px] w-[48px]  rounded-2xl  xs:ml-1 "
			style=" align-items: center;background-color: #212123; box-shadow: -2px -2px 4px 0 rgba(0, 0, 0, 0.3), 4px 4px 6px rgba(255, 255, 255, 0.25); display: flex; justify-content: center; margin-right:2rm "
		>
			<!-- <Stackoverflow /> -->
			<Backend class="  h-6 w-6  fill-[#ffdb70]" />
		</div>
		<p class="ml-20 mt-2 font-Poppins text-2xl font-bold text-[#fafafa] xs:ml-16 xs:text-xl ">
			Back End
		</p>
	</div>

	<div
		class=" min-h-24 mt-1 xs:mt-5 ml-24 flex  w-fit flex-row flex-wrap items-center gap-2 font-OpenSans text-lg text-[#fafafa] xs:ml-5 xs:text-base"
	>
		<p>Fiber(golang)</p>
		<Dot />
		<p>Gin(golang)</p>
		<Dot />
		<p>Grpc</p>
		<Dot />
		<p>protocol buffer</p>
		<Dot />
		<p>WebRTC</p>
		<Dot />
		<p>WebSocket</p>
		<Dot />
		<p>Nginx</p>
	</div>

	<!-- Front End -->
	<div class="mt-3 ml-2 flex flex-row">
		<div
			class="absolute ml-3 h-[48px] w-[48px]  rounded-2xl  xs:ml-1 "
			style=" align-items: center;background-color: #212123; box-shadow: -2px -2px 4px 0 rgba(0, 0, 0, 0.3), 4px 4px 6px rgba(255, 255, 255, 0.25); display: flex; justify-content: center; margin-right:2rm "
		>
			<!-- <Stackoverflow /> -->
			<Fronted class=" h-6 w-6 fill-[#ffdb70] stroke-[0px]" />
			<!-- <Book2 class="   stroke-[#ffdb70]" /> -->
		</div>
		<p class="ml-20 mt-2 font-Poppins text-2xl font-bold text-[#fafafa] xs:ml-16 xs:text-xl ">
			Front End
		</p>
	</div>

	<div
		class=" min-h-24 mt-1 ml-24 xs:mt-5 flex w-fit flex-row flex-wrap items-center gap-2 font-OpenSans text-lg text-[#fafafa] xs:ml-5 xs:text-base"
	>
		<p class="">SvelteJS</p>
		<Dot />
		<p>SvelteKit</p>
		<Dot />
		<p>Tailwindcss</p>
		<Dot />
		<p>Dash.js</p>
		<Dot />
		<p>Hls.js</p>
		<Dot />
		<p>video.js</p>
		<Dot />
		<p>Plyr.js</p>
	</div>

	<!-- OS -->
	<div class="mt-3 ml-2 flex flex-row">
		<div
			class="absolute ml-3 h-[48px] w-[48px]  rounded-2xl  xs:ml-1 "
			style=" align-items: center;background-color: #212123; box-shadow: -2px -2px 4px 0 rgba(0, 0, 0, 0.3), 4px 4px 6px rgba(255, 255, 255, 0.25); display: flex; justify-content: center; margin-right:2rm "
		>
			<!-- <Stackoverflow /> -->
			<Os class=" h-6 w-6 fill-[#ffdb70] stroke-[0px]" />
			<!-- <Book2 class="   stroke-[#ffdb70]" /> -->
		</div>
		<p class="ml-20 mt-2 font-Poppins text-2xl font-bold text-[#fafafa] xs:ml-16 xs:text-xl ">
			Oparating System
		</p>
	</div>

	<div
		class=" min-h-24 mt-1 ml-24 xs:mt-5 flex w-fit flex-row flex-wrap items-center gap-2 font-OpenSans text-lg text-[#fafafa] xs:ml-5 xs:text-base"
	>
		<p>Ubuntu</p>
		<Dot />
		<p>Redhat</p>
		<Dot />
		<p>Debian</p>
		<Dot />
		<p>Kali linux</p>
	</div>

	<!-- DevOps -->
	<div class="mt-3 ml-2 flex flex-row">
		<div
			class="absolute ml-3 h-[48px] w-[48px]  rounded-2xl  xs:ml-1 "
			style=" align-items: center;background-color: #212123; box-shadow: -2px -2px 4px 0 rgba(0, 0, 0, 0.3), 4px 4px 6px rgba(255, 255, 255, 0.25); display: flex; justify-content: center; margin-right:2rm "
		>
			<!-- <Stackoverflow /> -->
			<Devops class=" mt-2 h-7   w-7 fill-[#ffdb70]  object-cover" />
			<!-- <Book2 class="   stroke-[#ffdb70]" /> -->
		</div>
		<p class="ml-20 mt-2 font-Poppins text-2xl font-bold text-[#fafafa] xs:ml-16 xs:text-xl ">
			DevOps
		</p>
	</div>

	<div
		class=" min-h-24 mt-1 ml-24 xs:mt-5 flex w-fit flex-row flex-wrap items-center gap-2 font-OpenSans text-lg text-[#fafafa] xs:ml-5 xs:text-base"
	>
		<p>CI/CD Pipeline</p>
		<Dot />
		<p>Git</p>
		<Dot />
		<p>Github</p>
		<Dot />
		<p>Github Action</p>
		<Dot />
		<p>Docker</p>
		<Dot />
		<p>Kubernetes</p>
		<Dot />
		<p>Terraform</p>
	</div>
	<!-- Cloud Service -->
	<div class="mt-3 ml-2 flex flex-row">
		<div
			class="absolute ml-3 h-[48px] w-[48px]  rounded-2xl  xs:ml-1 "
			style=" align-items: center;background-color: #212123; box-shadow: -2px -2px 4px 0 rgba(0, 0, 0, 0.3), 4px 4px 6px rgba(255, 255, 255, 0.25); display: flex; justify-content: center; margin-right:2rm "
		>
			<!-- <Stackoverflow /> -->
			<Cloud class=" h-6 w-6 fill-[#ffdb70] stroke-[0px]" />
			<!-- <Book2 class="   stroke-[#ffdb70]" /> -->
		</div>
		<p class="ml-20 mt-2 font-Poppins text-2xl font-bold text-[#fafafa] xs:ml-16 xs:text-xl ">
			Cloud Services
		</p>
	</div>

	<div
		class=" min-h-24 mt-1 ml-24 xs:mt-5 flex w-fit flex-row flex-wrap items-center gap-2 font-OpenSans text-lg text-[#fafafa] xs:ml-5 xs:text-base"
	>
		<p>Microsoft Azure</p>
		<Dot />
		<p>Google Cloud Platform</p>
		<Dot />
		<p>Heroku</p>
		<Dot />
		<p>Versel</p>
	</div>
	<!-- Database -->
	<div class="mt-3 ml-2 flex flex-row">
		<div
			class="absolute ml-3 h-[48px] w-[48px]  rounded-2xl  xs:ml-1 "
			style=" align-items: center;background-color: #212123; box-shadow: -2px -2px 4px 0 rgba(0, 0, 0, 0.3), 4px 4px 6px rgba(255, 255, 255, 0.25); display: flex; justify-content: center; margin-right:2rm "
		>
			<Database class=" h-6 w-6  fill-[#ffdb70]" />
			<!-- <Stackoverflow /> -->
			<!-- <Book2 class="   stroke-[#ffdb70]" /> -->
		</div>
		<p class="ml-20 mt-2 font-Poppins text-2xl font-bold text-[#fafafa] xs:ml-16 xs:text-xl ">
			DataBase
		</p>
	</div>

	<div
		class=" min-h-24 mt-1 ml-24 xs:mt-5 flex w-fit flex-row flex-wrap items-center gap-2 font-OpenSans text-lg text-[#fafafa] xs:ml-5 xs:text-base"
	>
		<p>PostgreSQL</p>
		<Dot />
		<p>MySQL</p>
		<Dot />
		<p>MongoDB</p>
		<Dot />
		<p>Redis</p>
		<Dot />
		<p>Elastic Search</p>
	</div>
	<!--  PenTesting Tools -->
	<div class="mt-3 ml-2 flex flex-row">
		<div
			class="absolute ml-3 h-[48px] w-[48px]  rounded-2xl  xs:ml-1 "
			style=" align-items: center;background-color: #212123; box-shadow: -2px -2px 4px 0 rgba(0, 0, 0, 0.3), 4px 4px 6px rgba(255, 255, 255, 0.25); display: flex; justify-content: center; margin-right:2rm "
		>
			<!-- <Stackoverflow /> -->
			<!-- <Book2 class="   stroke-[#ffdb70]" /> -->
			<Tools class=" h-6 w-6  fill-[#ffdb70]" />
		</div>
		<p class="ml-20 mt-2 font-Poppins text-2xl font-bold text-[#fafafa] xs:ml-16 xs:text-xl ">
			Developer Tools
		</p>
	</div>

	<div
		class=" min-h-24 mt-1 ml-24 xs:mt-5 flex w-fit flex-row flex-wrap items-center gap-2 font-OpenSans text-lg text-[#fafafa] xs:ml-5 xs:text-base"
	>
		<p>VScode</p>
		<Dot />
		<p>Goland</p>
		<Dot />
		<p>Datagrip</p>
		<Dot />
		<p>Intellij</p>
		<Dot />
		<p>Atom</p>
		<Dot />
		<p>Jupyter Notebook</p>
	</div>

	<!-- Developer Tools -->
	<div class="mt-3 ml-2 flex flex-row">
		<div
			class="absolute ml-3 h-[48px] w-[48px]  rounded-2xl  xs:ml-1 "
			style=" align-items: center;background-color: #212123; box-shadow: -2px -2px 4px 0 rgba(0, 0, 0, 0.3), 4px 4px 6px rgba(255, 255, 255, 0.25); display: flex; justify-content: center; margin-right:2rm "
		>
			<!-- <Stackoverflow /> -->
			<!-- <Book2 class="   stroke-[#ffdb70]" /> -->
			<Bug class=" h-6 w-6 fill-[#ffdb70] stroke-[0px]" />
		</div>
		<p class="ml-20 mt-2 font-Poppins text-2xl font-bold text-[#fafafa] xs:ml-16 xs:text-xl ">
			PenTesting Tools
		</p>
	</div>

	<div
		class=" min-h-24 mt-1 ml-24 xs:mt-5 flex w-fit flex-row flex-wrap items-center gap-2 font-OpenSans text-lg text-[#fafafa] xs:ml-5 xs:text-base"
	>
		<p>BurpSuit</p>
		<Dot />
		<p>OWASP</p>
		<Dot />
		<p>Nessus</p>
		<Dot />
		<p>Wireshark</p>
	</div>
	<!-- EDUCATION -->
	<div class="mt-3 ml-2 flex flex-row">
		<div
			class="absolute ml-3 h-[48px] w-[48px]  rounded-2xl  xs:ml-1 "
			style=" align-items: center;background-color: #212123; box-shadow: -2px -2px 4px 0 rgba(0, 0, 0, 0.3), 4px 4px 6px rgba(255, 255, 255, 0.25); display: flex; justify-content: center; margin-right:2rm "
		>
			<!-- <Stackoverflow /> -->
			<Book2 class="   stroke-[#ffdb70]" />
		</div>
		<p class="ml-20 mt-2 font-Poppins text-2xl font-bold text-[#fafafa] xs:ml-16 xs:text-xl ">
			EDUCATION
		</p>
	</div>

	<div
		class=" min-h-24 mt-1 ml-24 xs:mt-5  w-fit  items-center  font-OpenSans text-lg text-[#fafafa] xs:ml-5 xs:text-base"
	>
		<p>BSc in Computer Science And Engineering</p>
		<p>Pabna University Of Science And Technology</p>
		<p>March 2018 - Present Excellent Standing</p>
		</div>
	<!-- Developer Tools -->
	<div class="mt-3 ml-2 flex flex-row">
		<div
			class="absolute ml-3 h-[48px] w-[48px]  rounded-2xl  xs:ml-1 "
			style=" align-items: center;background-color: #212123; box-shadow: -2px -2px 4px 0 rgba(0, 0, 0, 0.3), 4px 4px 6px rgba(255, 255, 255, 0.25); display: flex; justify-content: center; margin-right:2rm "
		>
			<!-- <Stackoverflow /> -->
			<!-- <Book2 class="   stroke-[#ffdb70]" /> -->
			<!-- <Bug class=" h-6 w-6 fill-[#ffdb70] stroke-[0px]" /> -->
			<Certificate class=" h-6 w-6 fill-[#ffdb70] stroke-[0px]" />
		</div>
		<p class="ml-20 mt-2 font-Poppins text-2xl font-bold text-[#fafafa] xs:ml-16 xs:text-xl ">
			Certifications
		</p>
	</div>

	<div
		class=" min-h-24 mt-3 mb-4 xs:mt-5 ml-16 w-full  font-OpenSans text-lg text-[#fafafa] sm:ml-3 xs:ml-5  xs:text-base  "
	>
		<!-- <p class="">BurpSuit <Dot /> OWASP <Dot /> Nessus <Dot /> Wireshark</p> -->
		<Dot /> Go Kubernetes Expert with Azure Challenge
		<a
			href="https://docs.microsoft.com/en-us/users/SkShahriarAhmedRaka-7930"
			class=" text-sky-600 hover:text-sky-500">-Microsoft</a
		> <br />
		<Dot /> Go Solution Expert with Azure Challenge
		<a
			href="https://docs.microsoft.com/en-us/users/SkShahriarAhmedRaka-7930"
			class=" text-sky-600 hover:text-sky-500">-Microsoft</a
		><br />
		<Dot /> Get Started with Azure DevOps
		<a
			href="https://docs.microsoft.com/en-us/users/SkShahriarAhmedRaka-7930"
			class=" text-sky-600 hover:text-sky-500">-Microsoft</a
		><br />
		<Dot /> Architecting with Google Kubernetes Engine Specialization
		<a
			href="https://drive.google.com/drive/folders/19WRnojZc8iOK-8zM6c3TcVP8bwpUhPAg?usp=sharing"
			class=" text-sky-600 hover:text-sky-500"
			>-Google
		</a><br />
		<Dot /> Cloud M001: MongoDB Basics
		<a
			href="https://drive.google.com/drive/folders/19WRnojZc8iOK-8zM6c3TcVP8bwpUhPAg?usp=sharing"
			class=" text-sky-600 hover:text-sky-500">-MongoDB</a
		> <br />
		<Dot /> University Linux Essentials
		<a
			href="https://drive.google.com/drive/folders/19WRnojZc8iOK-8zM6c3TcVP8bwpUhPAg?usp=sharing"
			class=" text-sky-600 hover:text-sky-500"
			>-Linux Professional Institute
		</a><br />
		<Dot /> Competitive Programmer's Core Skills
		<a
			href="https://drive.google.com/drive/folders/19WRnojZc8iOK-8zM6c3TcVP8bwpUhPAg?usp=sharing"
			class=" text-sky-600 hover:text-sky-500"
			>-Saint Petersburg State University
		</a><br />
		<Dot /> Introduction to Cybersecurity
		<a
			href="https://drive.google.com/drive/folders/19WRnojZc8iOK-8zM6c3TcVP8bwpUhPAg?usp=sharing"
			class=" text-sky-600 hover:text-sky-500">-Cisco</a
		><br />
		<Dot /> NSE 1 Network Security Associate
		<a
			href="https://drive.google.com/drive/folders/19WRnojZc8iOK-8zM6c3TcVP8bwpUhPAg?usp=sharing"
			class=" text-sky-600 hover:text-sky-500">-click</a
		><br />
		<Dot /> NSE 2 Network Security Associate
		<a
			href="https://drive.google.com/drive/folders/19WRnojZc8iOK-8zM6c3TcVP8bwpUhPAg?usp=sharing"
			class=" text-sky-600 hover:text-sky-500"
		>
			click</a
		><br />

		<Dot /> Introduction to CyberArk Privileged Access Security Course
		<a
			href="https://drive.google.com/drive/folders/19WRnojZc8iOK-8zM6c3TcVP8bwpUhPAg?usp=sharing"
			class=" text-sky-600 hover:text-sky-500"
		>
			click</a
		>

		<br />
		<Dot /> CyberArk Certified Trustee ICSI |
		<a
			href="https://drive.google.com/drive/folders/19WRnojZc8iOK-8zM6c3TcVP8bwpUhPAg?usp=sharing"
			class=" text-sky-600 hover:text-sky-500">CNSS Certified Network</a
		><br />
		<Dot /> Security Specialist - ICSI
		<a
			href="https://drive.google.com/drive/folders/19WRnojZc8iOK-8zM6c3TcVP8bwpUhPAg?usp=sharing"
			class=" text-sky-600 hover:text-sky-500">(International CyberSecurity Institute)</a
		><br />
		<Dot /> Certified Associate in Python Programing certification -<a
			href="https://drive.google.com/drive/folders/19WRnojZc8iOK-8zM6c3TcVP8bwpUhPAg?usp=sharing"
			class=" text-sky-600 hover:text-sky-500"
			>Python Institute
		</a><br />
		<Dot /> Digital Security Essentials
		<a
			href="https://drive.google.com/drive/folders/19WRnojZc8iOK-8zM6c3TcVP8bwpUhPAg?usp=sharing"
			class=" text-sky-600 hover:text-sky-500">-Digital Security Agency</a
		><br />
		<Dot /> How Google does Machine Learning
		<a
			href="https://drive.google.com/drive/folders/19WRnojZc8iOK-8zM6c3TcVP8bwpUhPAg?usp=sharing"
			class=" text-sky-600 hover:text-sky-500"
			>-Google Cloud Training
		</a><br />
		<Dot />
		<p class=" inline">
			Data Structures and Algorithmm Specialization
			<a
				href="https://drive.google.com/drive/folders/19WRnojZc8iOK-8zM6c3TcVP8bwpUhPAg?usp=sharing"
				class=" text-sky-600 hover:text-sky-500"
			>
				-University of California San Diego
			</a>
		</p>

		<br />
		<Dot /> IBM Data Science Professional Certificate
		<a
			href="https://drive.google.com/drive/folders/19WRnojZc8iOK-8zM6c3TcVP8bwpUhPAg?usp=sharing"
			class=" text-sky-600 hover:text-sky-500">-IBM</a
		><br />
	</div>

	<!-- <div class="mt-96 font-Poppins text-xl font-bold text-[#fafafa]" /> -->
</div>

<style>
</style>
