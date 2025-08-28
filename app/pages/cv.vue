<template>
	<div class="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 via-gray-900 py-24 px-4 flex justify-center items-center">
		<div class="absolute top-6 left-6 z-20">
			<NuxtLink to="/" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900/80 border border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white transition shadow">
				<Icon name="mdi:arrow-left" class="text-lg" />
				<span>Back Home</span>
			</NuxtLink>
		</div>
		<div class="w-full max-w-2xl bg-gradient-to-br from-gray-950/95 to-gray-900/90 rounded-3xl shadow-2xl border border-gray-800 p-0 overflow-hidden">
			<!-- Profile Card -->
			<div class="flex flex-col items-center pt-12 pb-10 px-10 bg-gradient-to-b from-gray-950/80 to-gray-900/60 border-b border-gray-800">
				<div class="w-28 h-28 rounded-full bg-gradient-to-br from-gray-800 to-gray-700 border-4 border-gray-700 flex items-center justify-center mb-4 shadow-lg ring-4 ring-gray-900 overflow-hidden">
					<img v-if="profileImage" :src="profileImage" alt="Profile" class="object-cover w-full h-full" />
					<Icon v-else name="mdi:account" class="text-6xl text-gray-400" />
				</div>
				<h1 class="text-3xl font-extrabold text-gray-100 mb-1 tracking-tight">Adrian Vančo</h1>
				<div class="text-gray-400 text-lg mb-2 font-medium">Full-Stack Developer & IT Specialist</div>
				<div class="text-gray-500 text-md">Bratislava, Slovakia</div>
			</div>
			<!-- Main Content -->
			<div class="px-10 pb-12 pt-8">
						<section class="mb-8">
							<h2 class="text-lg font-bold text-gray-200 flex items-center gap-2 uppercase tracking-wider border-l-4 border-gray-700 pl-3 pb-2 mb-4 relative">
								<Icon name="mdi:school" class="text-xl" />Education
								<span class="absolute left-0 -bottom-1 w-full h-px bg-gray-700"></span>
							</h2>
							<ul class="space-y-2">
						<li>
							<span class="font-semibold text-gray-100">Master's degree (Intelligent Software Systems) </span>, FIIT STU <span class="text-gray-400">(2024-Present)</span>
						</li>
						<li>
							<span class="font-semibold text-gray-100">Bachelor's degree (Informatics)</span>, FIIT STU <span class="text-gray-400">(2019-2024)</span>
							<div class="text-gray-400 text-sm mt-1 pl-2">
								Bachelor thesis: Developed a decentralized application marketplace utilizing IPv4 addresses on the IOTA network, with smart contracts in Solidity and a frontend in Angular integrated with MetaMask.
								<a href="https://opac.crzp.sk/?fn=detailBiblioFormChildA3JN7&sid=AA9A59A4FA5B9CCA5E9C4B07A76D&seo=CRZP-detail-kniha" target="_blank" class="text-blue-400 underline ml-1">View thesis</a>
							</div>
						</li>
						<li>
							<span class="font-semibold text-gray-100"> Technical School of electrical engineering (Computer systems)</span> <span class="text-gray-400">(2015-2019)</span>
						</li>
					</ul>
				</section>
				<div class="border-t border-gray-800 my-8"></div>
						<section class="mb-8">
							<h2 class="text-lg font-bold text-gray-200 flex items-center gap-2 uppercase tracking-wider border-l-4 border-gray-700 pl-3 pb-2 mb-4 relative">
								<Icon name="mdi:briefcase" class="text-xl" />Work Experience
								<span class="absolute left-0 -bottom-1 w-full h-px bg-gray-700"></span>
							</h2>
							<ul class="space-y-5">
						<li>
							<div class="font-semibold text-gray-100 text-base">Application Developer</div>
							<div class="text-gray-400">MicroStep - HDO s.r.o. <span class="text-gray-500">(2022-Present)</span></div>
							<div class="text-gray-300 text-sm mt-1">Developing web applications in Angular for the energy sector. Built a mobile web app using Xamarin.</div>
						</li>
						<li>
							<div class="font-semibold text-gray-100 text-base">IT Specialist</div>
							<div class="text-gray-400">PROXENTA Support s.r.o.<span class="text-gray-500">(2022-Present)</span></div>
							<div class="text-gray-300 text-sm mt-1">Managing Active Directory, servers, MS365, and network infrastructure for an investment company.</div>
						</li>
					</ul>
				</section>
				<div class="border-t border-gray-800 my-8"></div>
						<section class="mb-8">
							<h2 class="text-lg font-bold text-gray-200 flex items-center gap-2 uppercase tracking-wider border-l-4 border-gray-700 pl-3 pb-2 mb-4 relative">
								<Icon name="mdi:star" class="text-xl" />Skills
								<span class="absolute left-0 -bottom-1 w-full h-px bg-gray-700"></span>
							</h2>
							<div class="mb-4">
								<h3 class="text-gray-300 font-semibold mb-2 flex items-center gap-2"><Icon name="mdi:code-tags" class="text-base" />Programming</h3>
								<ul class="flex flex-wrap gap-3">
									  <li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">Nuxt.js</li>
									  <li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">Angular</li>
									  <li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">Tailwind CSS</li>
									  <li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">Xamarin</li>
									  <li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">Python</li>
									  <li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">R</li>
									  <li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">Solidity</li>
									  <li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">Blockchain</li>
									  <li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">Laravel</li>
									  <li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">C# .NET</li>
									  <li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">Figma</li>
									  <li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">Jira</li>
									  <li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">Automation</li>
									  <li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">Electronics</li>
								</ul>
							</div>
							<div class="mb-4">
								<h3 class="text-gray-300 font-semibold mb-2 flex items-center gap-2"><Icon name="mdi:server" class="text-base" />IT Administration</h3>
								<ul class="flex flex-wrap gap-3">
									  <li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">Active Directory</li>
									  <li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">MS365</li>
									  <li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">SharePoint</li>
									  <li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">Server Administration</li>
									  <li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">Network Administration</li>
									  <li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">Fortinet</li>
									  <li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">Ubiquiti</li>
									  <li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">NAS</li>
									  <li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">IoT</li>
									  <li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">SmartHome Solutions</li>
									  <li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">VMWare</li>
									  <li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">Bitdefender GravityZone</li>
									  <li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">Hikvision</li>
									  <li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">Android</li>
									  <li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">iOS</li>
									  <li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">DIY</li>
								</ul>
							</div>
							<div>
								<h3 class="text-gray-300 font-semibold mb-2 flex items-center gap-2"><Icon name="mdi:account-group" class="text-base" />Soft Skills</h3>
								<ul class="flex flex-wrap gap-3">
									  <li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">Teamwork</li>
									  <li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">Communication</li>
									  <li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">Problem Solving</li>
									  <li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">Adaptability</li>
									  <li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">Time Management</li>
									  <li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">UI/UX Design</li>
									  <li class="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm font-medium shadow">Algorithmic Thinking</li>
								</ul>
							</div>
				</section>
				<div class="border-t border-gray-800 my-8"></div>
						<section>
							<h2 class="text-lg font-bold text-gray-200 flex items-center gap-2 uppercase tracking-wider border-l-4 border-gray-700 pl-3 pb-2 mb-4 relative">
								<Icon name="mdi:certificate" class="text-xl" />Certificates
								<span class="absolute left-0 -bottom-1 w-full h-px bg-gray-700"></span>
							</h2>
							<ul class="space-y-2">
						<li>
							<span class="font-semibold text-gray-100">IET Accreditation</span> <span class="text-gray-400">(2024)</span>
						</li>
						<li>
							<span class="font-semibold text-gray-100">Google AI Essentials</span> <span class="text-gray-400">(2024)</span>
						</li>
						<li>
							<span class="font-semibold text-gray-100">CCNA 1, 2, IoT</span> <span class="text-gray-400">(2019)</span>
						</li>
						<li>
							<span class="font-semibold text-gray-100">§ 21 - Certificate of Professional Competence in Electrical Engineering</span> <span class="text-gray-400">(2019)</span>
						</li>
					</ul>
				</section>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

// Set this to your profile image path in /public (e.g. '/profile.jpg')
const profileImage = ref('/linkedin.jpg');
</script>
