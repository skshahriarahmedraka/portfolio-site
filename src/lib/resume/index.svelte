
<script lang="ts">
import Book from "$lib/svgs/book.svelte";
import Book2 from "$lib/svgs/book2.svelte";
import Dot from "$lib/svgs/dot.svelte";
import Sent from "$lib/svgs/sent.svelte";

	const resume = new URL('./SkShahriarAhmedRaka.pdf', import.meta.url).href;
    
</script>

<style>

</style>

<div class=" flex h-full w-full flex-col  ">
	<p class=" -mt-5 ml-8 font-Poppins text-3xl font-bold text-[#fafafa] ">Resume</p>
	<div class=" mt-3 ml-8 h-[5px] w-12 rounded-xl bg-gradient-to-r from-[#fbd66d] to-[#ffbc5d]" />

    <!-- programming language -->
    <div class="mt-8 ml-4 flex flex-row">
        <div
					class="absolute ml-3 h-[48px]  w-[48px]  rounded-2xl "
					style=" align-items: center;background-color: #212123; box-shadow: -2px -2px 4px 0 rgba(0, 0, 0, 0.3), 4px 4px 6px rgba(255, 255, 255, 0.25); display: flex; justify-content: center; margin-right:2rm "
				>
					<!-- <Stackoverflow /> -->
                    <Book2 class="   stroke-[#ffdb70]" />
				</div>
        <p class="font-Poppins ml-24 mt-2 text-2xl font-bold text-[#fafafa] ">Programming Languages</p>
    </div>
    
    <div class=" min-h-24 mt-5  w-full text-[#fafafa] ml-24 text-lg font-OpenSans">
        <p class="">Golang <Dot/> TypeScript <Dot/> Python <Dot/> JavaScript <Dot/> Bash <Dot/> Powershell <Dot/> C <Dot/> C++</p>
    </div>

    <!-- Backend -->
    <div class="mt-8 ml-4 flex flex-row">
        <div
					class="absolute ml-3 h-[48px]  w-[48px]  rounded-2xl "
					style=" align-items: center;background-color: #212123; box-shadow: -2px -2px 4px 0 rgba(0, 0, 0, 0.3), 4px 4px 6px rgba(255, 255, 255, 0.25); display: flex; justify-content: center; margin-right:2rm "
				>
					<!-- <Stackoverflow /> -->
                    <Book2 class="   stroke-[#ffdb70]" />
				</div>
        <p class="font-Poppins ml-24 mt-2 text-2xl font-bold text-[#fafafa] ">Back End</p>
    </div>
    
    <div class=" min-h-24 mt-5  w-full text-[#fafafa] ml-24 text-lg font-OpenSans">
        <p class="">Fiber(golang) <Dot/> Gin(golang) <Dot/> Grpc <Dot/> protocol buffer  <Dot/> WebRTC <Dot/> WebSocket <Dot/> Nginx </p>
    </div>

    <!-- Front End -->
    <div class="mt-8 ml-4 flex flex-row">
        <div
					class="absolute ml-3 h-[48px]  w-[48px]  rounded-2xl "
					style=" align-items: center;background-color: #212123; box-shadow: -2px -2px 4px 0 rgba(0, 0, 0, 0.3), 4px 4px 6px rgba(255, 255, 255, 0.25); display: flex; justify-content: center; margin-right:2rm "
				>
					<!-- <Stackoverflow /> -->
                    <Book2 class="   stroke-[#ffdb70]" />
				</div>
        <p class="font-Poppins ml-24 mt-2 text-2xl font-bold text-[#fafafa] ">Front End</p>
    </div>
    
    <div class=" min-h-24 mt-5  w-full text-[#fafafa] ml-24 text-lg font-OpenSans">
        <p class="">SvelteJS <Dot/> SvelteKit <Dot/> Tailwindcss <Dot/> Dash.js <Dot/> Hls.js <Dot/> video.js  <Dot/> Plyr.js  </p>
    </div>

    <!-- OS -->
    <div class="mt-8 ml-4 flex flex-row">
        <div
					class="absolute ml-3 h-[48px]  w-[48px]  rounded-2xl "
					style=" align-items: center;background-color: #212123; box-shadow: -2px -2px 4px 0 rgba(0, 0, 0, 0.3), 4px 4px 6px rgba(255, 255, 255, 0.25); display: flex; justify-content: center; margin-right:2rm "
				>
					<!-- <Stackoverflow /> -->
                    <Book2 class="   stroke-[#ffdb70]" />
				</div>
        <p class="font-Poppins ml-24 mt-2 text-2xl font-bold text-[#fafafa] ">Oparating System</p>
    </div>
    
    <div class=" min-h-24 mt-5  w-full text-[#fafafa] ml-24 text-lg font-OpenSans">
        <p class="">Ubuntu <Dot/> Redhat <Dot/> Debian <Dot/> Kali linux  </p>
    </div>

    <!-- DevOps -->
    <div class="mt-8 ml-4 flex flex-row">
        <div
					class="absolute ml-3 h-[48px]  w-[48px]  rounded-2xl "
					style=" align-items: center;background-color: #212123; box-shadow: -2px -2px 4px 0 rgba(0, 0, 0, 0.3), 4px 4px 6px rgba(255, 255, 255, 0.25); display: flex; justify-content: center; margin-right:2rm "
				>
					<!-- <Stackoverflow /> -->
                    <Book2 class="   stroke-[#ffdb70]" />
				</div>
        <p class="font-Poppins ml-24 mt-2 text-2xl font-bold text-[#fafafa] ">DevOps</p>
    </div>
    
    <div class=" min-h-24 mt-5  w-full text-[#fafafa] ml-24 text-lg font-OpenSans">
        <p class="">CI/CD Pipeline <Dot/> Git <Dot/> Github <Dot/> Github Action <Dot/> Docker <Dot/> Kubernetes  <Dot/> Terraform  </p>
    </div>
    <!-- Cloud Service -->
    <div class="mt-8 ml-4 flex flex-row">
        <div
					class="absolute ml-3 h-[48px]  w-[48px]  rounded-2xl "
					style=" align-items: center;background-color: #212123; box-shadow: -2px -2px 4px 0 rgba(0, 0, 0, 0.3), 4px 4px 6px rgba(255, 255, 255, 0.25); display: flex; justify-content: center; margin-right:2rm "
				>
					<!-- <Stackoverflow /> -->
                    <Book2 class="   stroke-[#ffdb70]" />
				</div>
        <p class="font-Poppins ml-24 mt-2 text-2xl font-bold text-[#fafafa] ">Cloud Services</p>
    </div>
    
    <div class=" min-h-24 mt-5  w-full text-[#fafafa] ml-24 text-lg font-OpenSans">
        <p class="">Microsoft Azure <Dot/> Google Cloud Platform <Dot/> Heroku <Dot/> Versel </p>
    </div>
     <!-- Database -->
     <div class="mt-8 ml-4 flex flex-row">
        <div
					class="absolute ml-3 h-[48px]  w-[48px]  rounded-2xl "
					style=" align-items: center;background-color: #212123; box-shadow: -2px -2px 4px 0 rgba(0, 0, 0, 0.3), 4px 4px 6px rgba(255, 255, 255, 0.25); display: flex; justify-content: center; margin-right:2rm "
				>
					<!-- <Stackoverflow /> -->
                    <Book2 class="   stroke-[#ffdb70]" />
				</div>
        <p class="font-Poppins ml-24 mt-2 text-2xl font-bold text-[#fafafa] ">DataBase</p>
    </div>
    
    <div class=" min-h-24 mt-5  w-full text-[#fafafa] ml-24 text-lg font-OpenSans">
        <p class="">PostgreSQL <Dot/> MySQL <Dot/> MongoDB <Dot/> Redis <Dot/> Elastic Search </p>
    </div>
    <!--  PenTesting Tools -->
    <div class="mt-8 ml-4 flex flex-row">
        <div
					class="absolute ml-3 h-[48px]  w-[48px]  rounded-2xl "
					style=" align-items: center;background-color: #212123; box-shadow: -2px -2px 4px 0 rgba(0, 0, 0, 0.3), 4px 4px 6px rgba(255, 255, 255, 0.25); display: flex; justify-content: center; margin-right:2rm "
				>
					<!-- <Stackoverflow /> -->
                    <Book2 class="   stroke-[#ffdb70]" />
				</div>
        <p class="font-Poppins ml-24 mt-2 text-2xl font-bold text-[#fafafa] "> PenTesting Tools</p>
    </div>
    
    <div class=" min-h-24 mt-5  w-full text-[#fafafa] ml-24 text-lg font-OpenSans">
        <p class="">VScode <Dot/> Goland <Dot/> Datagrip <Dot/> Intellij <Dot/> Atom <Dot/> Jupyter Notebook </p>
    </div>

    <!-- Developer Tools -->
    <div class="mt-8 ml-4 flex flex-row">
        <div
					class="absolute ml-3 h-[48px]  w-[48px]  rounded-2xl "
					style=" align-items: center;background-color: #212123; box-shadow: -2px -2px 4px 0 rgba(0, 0, 0, 0.3), 4px 4px 6px rgba(255, 255, 255, 0.25); display: flex; justify-content: center; margin-right:2rm "
				>
					<!-- <Stackoverflow /> -->
                    <Book2 class="   stroke-[#ffdb70]" />
				</div>
        <p class="font-Poppins ml-24 mt-2 text-2xl font-bold text-[#fafafa] ">Developer Tools</p>
    </div>
    
    <div class=" min-h-24 mt-5  w-full text-[#fafafa] ml-24 text-lg font-OpenSans">
        <p class="">BurpSuit <Dot/> OWASP <Dot/> Nessus <Dot/> Wireshark  </p>
    </div>
    <!-- EDUCATION -->
    <div class="mt-8 ml-4 flex flex-row">
        <div
					class="absolute ml-3 h-[48px]  w-[48px]  rounded-2xl "
					style=" align-items: center;background-color: #212123; box-shadow: -2px -2px 4px 0 rgba(0, 0, 0, 0.3), 4px 4px 6px rgba(255, 255, 255, 0.25); display: flex; justify-content: center; margin-right:2rm "
				>
					<!-- <Stackoverflow /> -->
                    <Book2 class="   stroke-[#ffdb70]" />
				</div>
        <p class="font-Poppins ml-24 mt-2 text-2xl font-bold text-[#fafafa] ">EDUCATION </p>
    </div>
    
    <div class=" min-h-24 mt-5  w-full text-[#fafafa] ml-24 text-lg font-OpenSans">
        <p class=""> EDUCATION
            PABNA UNIVERSITY OF SCIENCE
    AND TECHNOLOGY
    BSc in COMPUTER SCIENCE AND
    Engineering
    
    March 2018 - Present
    Excellent Standing
     </p>
    </div>
    <a
        download
        href="{resume}"
            class=" flex gap-2 mt-4  ml-8 h-fit font-OpenSans bg-[#212123] hover:bg-slate-800 transition-all duration-150 hover:cursor-pointer  w-fit p-4 text-[#ffdb70]  rounded-2xl "
            style=" align-items: center; box-shadow: -2px -2px 4px 0 rgba(0, 0, 0, 0.3), 4px 4px 6px rgba(255, 255, 255, 0.25); display: flex; justify-content: center; margin-right:2rm "
        >
        <Sent class="h-6 w-6 fill-[#ffdb70]"/>
           <button class="">
               PDF Resume 
           </button> 
        </a>
    <div class="font-Poppins mt-96 text-xl font-bold text-[#fafafa]">
        LANGUAGES
        Golang, Python, TypeScript, JavaScript, Bash, Powershell, C ,C++,Java  
        Back End :
        Fiber(golang), Gin(golang), Nginx, WebSocket, Socket.io, WebRTC,Grpc, protocol buffer 
        Front End :
        SvelteJS, SvelteKit, Tailwindcss, video.js,Plyr.js , Dash.js, Hls.js, VueJS 
        OS:
        Ubuntu,Redhat,Debian,Kali linux
        DevOps :
        CI/CD Pipeline ,Git, Github, Github Action, Docker, Kubernetes, Terraform,   
        Cloud Services:
        Microsoft Azure,, Google Cloud Platform 
        Database:
        PostgreSQL, MySQL, MongoDB, Redis, Elastic Search
        Developer Tools:
        VScode, Goland, Intellij, Atom, Jupyter Notebook, Datagrip
    
        PenTesting Tools :
        BurpSuit , OWASP ,Nessus, Wireshark


        EDUCATION
        PABNA UNIVERSITY OF SCIENCE
AND TECHNOLOGY
BSc in COMPUTER SCIENCE AND
Engineering

March 2018 - Present
Excellent Standing

Certifications

Go Kubernetes Expert with Azure Challenge -Microsoft
Architecting with Google Kubernetes Engine Specialization -Google Cloud
M001: MongoDB Basics -MongoDB University
Linux Essentials -Linux Professional Institute
Competitive Programmer's Core Skills -Saint Petersburg State University
Introduction to Cybersecurity - Cisco
NSE 1 Network Security Associate
NSE 2 Network Security Associate
Introduction to CyberArk Privileged Access Security Course
CyberArk Certified Trustee
ICSI | CNSS Certified Network Security Specialist - ICSI (International
CyberSecurity Institute)
Certified Associate in Python Programing certification -Python Institute
Digital Security Essentials -Digital Security Agency
How Google does Machine Learning -Google Cloud Training 
Data Structures and Algorithm Specialization -University of California San Diego 
IBM Data Science Professional Certificate
    </div>
</div>
