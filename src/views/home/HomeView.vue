<template>
	<div>
		<div class="bg-color-primary">
			<v-container>
				<div class="mt-9 text-center">
					<h1 class="text-h1 mb-n2">Hi I'm Ollie</h1>
					<h2 class="text-h3 mb-n2">Software Engineer</h2>
				</div>
				<v-img
					contain
					max-height="55vh"
					max-width="100%"
					:src="greetingImg"
				/>
			</v-container>
			<v-container
				class="d-flex justify-center flex-wrap skills-container mb-10"
			>
				<v-img
					v-for="(skill, index) in skills"
					:key="'skillLogo' + index"
					class=""
					contain
					height="75px"
					max-width="100px"
					:alt="skill.alt"
					:src="skill.src"
				/>
			</v-container>
			<section-border />
		</div>

		<section-head>Current Role</section-head>
		<section-border position="btm" />
		<cards-collection
			:cards="jobs"
			:isHorizontalCards="useHorizontalCards"
		/>

		<section-border />
		<section-head>Recs</section-head>
		<div class="bg-color-primary d-flex flex-column align-center">
			<section-border position="btm" />

			<div
				v-for="(rec, index) in recommendations"
				:key="`recommendation-${index}`"
			>
				<hr v-if="index > 0" class="section-content mt-8" />
				<recommendation-card
					:name="rec.name"
					:jobTitle="rec.jobTitle"
					:text="rec.text"
				/>
			</div>
			<v-btn
				large
				color="accent"
				class="primary--text mt-6 mb-10"
				@click="openLink('https://www.linkedin.com/in/olliechurch/')"
			>
				Read More On LinkedIn
			</v-btn>
			<section-border />
		</div>

		<section-head>Personal Projects</section-head>
		<section-border position="btm" />
		<cards-collection :cards="projects" />

		<articles-section />
		<contact-section />
		<site-footer />
	</div>
</template>

<script>
	import SectionHead from '../../components/SectionHead.vue'
	import SectionBorder from '@/components/SectionBorder.vue'
	import SiteFooter from '../../components/SiteFooter.vue'
	import CardsCollection from '@/components/CardsCollection.vue'
	import RecommendationCard from '@/components/RecommendationCard.vue'

	import ArticlesSection from './sections/ArticlesSection.vue'
	import ContactSection from './sections/ContactSection.vue'

	import greetingImg from '../../assets/images/png/programing.png'
	import currentJobLogo from '../../assets/images/jpg/ontime_payments_logo.jpeg'
	import vueLogo from '../../assets/images/png/vue.png'
	import csharpLogo from '../../assets/images/png/csharp.png'
	import dotnetLogo from '../../assets/images/png/dotnet.png'
	import mysqlLogo from '../../assets/images/png/mysql.png'
	import javascriptLogo from '../../assets/images/png/javascript.png'
	import cssLogo from '../../assets/images/png/css.png'
	import htmlLogo from '../../assets/images/png/html.png'

	import maxwellImg from '../../assets/images/jpg/maxwellMysteries2.jpg'
	import actorImg from '../../assets/images/jpg/actorPortfolio1.jpg'
	import directorImg from '../../assets/images/jpg/directorPortfolio.jpg'
	import glitchImg from '../../assets/images/jpg/taskGlitch.jpg'

	export default {
		name: 'HomeView',

		components: {
			SectionHead,
			SiteFooter,
			ArticlesSection,
			CardsCollection,
			ContactSection,
			SectionBorder,
			RecommendationCard
		},

		data: function () {
			return {
				greetingImg: greetingImg,
				skills: [
					{
						alt: 'Csharp Logo',
						src: csharpLogo
					},
					{
						alt: 'Vue Logo',
						src: vueLogo
					},
					{
						alt: '.Net logo',
						src: dotnetLogo
					},
					{
						alt: 'MySQL logo',
						src: mysqlLogo
					},
					{
						alt: 'Javascript logo',
						src: javascriptLogo
					},
					{
						alt: 'CSS logo',
						src: cssLogo
					},
					{
						alt: 'HTML logo',
						src: htmlLogo
					}
				],
				jobs: [
					{
						title: 'Ontime Payments',
						subtitle: 'Lead Developer',
						img: currentJobLogo,
						text: 'We’re here to help you get cheaper prices, better products and a healthier credit score. With Ontime we’re taking pay-by-salary mainstream. We’re making it available to the millions of people who need it for all their regular bills. Our tech stack is mainly C#, Blazor and AWS.',
						buttons: [
							{
								name: 'Visit LinkedIn',
								linkTo: 'https://www.linkedin.com/in/olliechurch/'
							},
							// {
							// 	name: 'Download CV',
							// 	linkTo: 'ollieChurchCV.pdf'
							// }
						]
					}
				],
				recommendations: [
					{
						name: 'Dima Horda',
						jobTitle: 'Product Manager',
						text: 'Throughout our time working together at Salary Finance, Ollie consistently demonstrated a remarkable ability to quickly grasp new concepts and take initiative in solving complex problems. His proactive approach played a pivotal role in enhancing the efficiency and effectiveness of our development team. I could always rely on Ollie to deliver high-quality work and meet deadlines without fail. Any team would be fortunate to have Ollie onboard.'
					},
					{
						name: 'Charlotte Prior',
						jobTitle: 'Operations Director - Facilities',
						text: "I had the pleasure of working with Ollie whilst at GLive and was very lucky to have him as part of the team. He's reliable, diligent, proactive and takes initiative. I knew that Ollie could be trusted to run things smoothly with a focus on customer service and attention to detail. Ollie is friendly and approachable with a lovely manner. He has the ability to put people at ease whilst maintaining the ability to be assertive when the situation requires it."
					}
				],
				projects: [
					{
						title: 'Maxwell Mysteries',
						img: maxwellImg,
						text: 'Online puzzle game series following the cases of 1930s P.I. Larry Maxwell through the New York underworld. Over 700 games purchased and generated ~£8500 in profit. Built using React, React Router and CSS.',
						buttons: [
							{
								name: 'See The Code',
								linkTo: 'https://github.com/ollieChurch/MaxwellMysteriesDemo'
							},
							{
								name: 'Play The Demo',
								linkTo: 'https://mysteries-demo.co.uk'
							}
						]
					},
					{
						title: "Director's Portfolio",
						img: directorImg,
						text: 'Indiana Lown-Collins is an award winning theatre director who, following a high profile win, was looking for a website she could provide to professional contacts to showcase her work. I built this site using Vue and Bootstrap, designed mobile-first, and included a CMS for Indiana to edit the content.',
						buttons: [
							{
								name: 'See The Code',
								linkTo: 'https://github.com/ollieChurch/IndianaDirector'
							},
							{
								name: 'Take It For A Spin',
								linkTo: 'https://indianalowncollins.co.uk'
							}
						]
					},
					{
						title: 'Task Glitch',
						img: glitchImg,
						text: 'A productivity tool made with Vue & Bootstrap on the frontend while utilising Firebase in the backend. Fill up your backlog and allow Glitch to prioritise & schedule your tasks, ensuring you never miss another important deadline. Built to automate my own productivity process.',
						buttons: [
							{
								name: 'See The Code',
								linkTo: 'https://github.com/ollieChurch/taskGlitch'
							},
							{
								name: 'Under Construction'
							}
						]
					},
					{
						title: "Actor's Portfolio",
						img: actorImg,
						text: "Isobelle Pippin is an actor who needed a portfolio website for her self promotion. After discussing with Isobelle her requirements, I created this site, deisgned 'mobile first', and included a CMS so that Isobelle can edit her own content. Built using HTML, CSS and Javascript.",
						buttons: [
							{
								name: 'See The Code',
								linkTo: 'https://github.com/ollieChurch/ActingPortfolioIP'
							},
							{
								name: 'Take It For A Spin',
								linkTo: 'https://isobellepippin.co.uk'
							}
						]
					}
				]
			}
		},

		computed: {
			useHorizontalCards() {
				return !(
					this.$vuetify.breakpoint.name == 'xs' ||
					this.$vuetify.breakpoint.name == 'sm'
				)
			}
		},

		methods: {
			openLink(link) {
				window.open(link, '_blank, norefferer')
			}
		}
	}
</script>

<style scoped>
	.skills-container {
		gap: 1.5em;
	}
</style>
