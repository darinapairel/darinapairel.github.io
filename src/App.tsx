/**  TODO:
 * Add button click handler to download pdf
 * Add theme switcher with oklch colors
 * Add lang switcher
 * */

import { useEffect, useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
  }
`

const Container = styled.div`
	max-width: 1000px;
	margin: auto;
	background: white;
	padding: 20px;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`

const HeaderInfo = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
`

const Header = styled.header`
	display: flex;
	flex-direction: column;
	background: #12224d;
	color: white;
	text-align: center;
	padding: 20px 0;
`
const Contacts = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`

const ProfileImage = styled.img`
	width: 150px;
	height: 150px;
	border-radius: 50%;
	border: 3px solid white;
`

const PersonalDetails = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 10px;
`

const Section = styled.section`
	margin: 20px 0;
`

const Title = styled.h2`
	color: #12224d;
	border-bottom: 2px solid #12224d;
	padding-bottom: 5px;
`

const SkillsList = styled.ul`
	list-style-type: none;
	padding: 0;
`

const SkillItem = styled.li`
	background: #e0e0e0;
	display: inline-block;
	margin: 5px;
	padding: 5px 10px;
	border-radius: 5px;
`

const SoftSkillsList = styled.ul`
	padding-left: 15px;
`

const SoftSkillsItem = styled.li`
	padding: 0 0 8px 8px;
	&::marker {
		content: '✔';
		font-size: 1em;
	}
`

const InfoItem = styled.p<{ margintop?: string }>`
	margin: 5px 0;
	margin-top: ${props => props.margintop ?? 0};
`

const ContactLink = styled.a`
	color: white;
	text-decoration: none;
	&:hover {
		color: grey;
	}
`

const DownloadButton = styled.button`
	position: fixed;
	width: 45px;
	height: 45px;
	background-color: white;
	border: none;
	padding: 0;
	border-radius: 50%;
	align-self: flex-end;
	margin-right: 15px;
	cursor: pointer;
	color: '#12224d';

	&::before {
		content: '⤓';
		font-size: 25px;
	}

	&:hover {
		background-color: grey;
	}
`

function App() {
	const [scrollTop, setScrollTop] = useState(0)

	useEffect(() => {
		const onScroll = e => {
			setScrollTop(e.target.documentElement.scrollTop)

			// REFACTOR THIS
			// ADD MEMO
			// ADD Refs
			const paddingsFromTop = 90
			const button = document.querySelector('header>button')
			const buttonParams = button?.getBoundingClientRect()
			const headerParams = document
				.querySelector('header')
				?.getBoundingClientRect()

			if (
				window.scrollY - buttonParams.height - paddingsFromTop >
				headerParams.bottom
			) {
				button.style.backgroundColor = '#12224d'
				button.style.color = 'white'
			} else {
				button.style.backgroundColor = 'white'
				button.style.border = '2px solid rgb(18, 34, 77)'
				button.style.color = '#12224d'
			}
		}
		window.addEventListener('scroll', onScroll)

		return () => window.removeEventListener('scroll', onScroll)

		/**
		 *
		 * const button = document.querySelector('header>button')
		 * const buttonParams = button.getBoundingClientRect()
		 * const headerParams = document.querySelector('header').getBoundingClientRect()
		 * if (window.scrollY + buttonParams.height < headerParams.bottom){
		 * 		button.style.backgroundColor = '#12224d'
		 * } else{
		 * 	button.style.backgroundColor = white
		 * }
		 *
		 */
	}, [scrollTop])

	return (
		<>
			<GlobalStyle />
			<Container>
				<Header>
					<HeaderInfo>
						<ProfileImage src="src/assets/cv.png" alt="Profile" />
						<PersonalDetails>
							<h1>Darina Pairel</h1>
							<h3>Frontend Developer</h3>
						</PersonalDetails>
						<Contacts>
							<InfoItem>
								<b>Email: </b>
								<ContactLink href="mailto:">paireldarina@gmail.com</ContactLink>
							</InfoItem>
							<InfoItem>
								<b>LinkedIn: </b>
								<ContactLink href="https://www.linkedin.com/in/d-i-pairel/">
									@d-i-pairel
								</ContactLink>
							</InfoItem>
							<InfoItem>
								<b>GitHub: </b>
								<ContactLink href="https://github.com/darinapairel">
									darinapairel
								</ContactLink>
							</InfoItem>
						</Contacts>
					</HeaderInfo>
					{/**
					 * Add download generated Pdf resume button
					 * <DownloadButton />
					 */}
				</Header>

				<Section>
					<Title>Technical Skills</Title>
					<SkillsList>
						<SkillItem>React</SkillItem>
						<SkillItem>MobX</SkillItem>
						<SkillItem>Redux</SkillItem>
						<SkillItem>Wasaby</SkillItem>
						<SkillItem>JavaScript</SkillItem>
						<SkillItem>TypeScript</SkillItem>
						<SkillItem>ECMAScript</SkillItem>
						<SkillItem>HTML</SkillItem>
						<SkillItem>CSS (Materialize/Bootstrap)</SkillItem>
						<SkillItem>MUI</SkillItem>
						<SkillItem>SCSS/SASS</SkillItem>
						<SkillItem>Styled-Components</SkillItem>
						<SkillItem>Axios</SkillItem>
						<SkillItem>React-Final-Form</SkillItem>
						<SkillItem>React-Testing-Library</SkillItem>
						<SkillItem>Webpack</SkillItem>
						<SkillItem>NPM</SkillItem>
						<SkillItem>ESLint</SkillItem>
						<SkillItem>Prettier</SkillItem>
						<SkillItem>BEM</SkillItem>
						<SkillItem>Docker</SkillItem>
						<SkillItem>RestAPI</SkillItem>
						<SkillItem>Git</SkillItem>
						<SkillItem>Jira</SkillItem>
						<SkillItem>Figma</SkillItem>
						<SkillItem>Adobe XD</SkillItem>
					</SkillsList>
				</Section>

				<Section>
					<Title>Soft Skills</Title>
					<SoftSkillsList>
						<SoftSkillsItem>
							Responsible, have an eye for details, curious
						</SoftSkillsItem>
						<SoftSkillsItem>
							Good at time management and self-organized
						</SoftSkillsItem>
						<SoftSkillsItem>
							Quick learner with a desire to improve both technical and soft
							skills
						</SoftSkillsItem>
						<SoftSkillsItem>
							Follow tech forums to keep myself abreast with new development in
							my work and domain of interest
						</SoftSkillsItem>
						<SoftSkillsItem>
							Writing papers and preparing presentation based on my science
							papers
						</SoftSkillsItem>
						<SoftSkillsItem>
							PiterJS (JavaScript community) organizer
						</SoftSkillsItem>
						<SoftSkillsItem>Fluent English</SoftSkillsItem>
					</SoftSkillsList>
				</Section>

				<Section>
					<Title>Experience</Title>
					<p>
						<strong>Frontend Developer</strong> - Tensor (10/2024 - Ongoing)
					</p>
					<p>
						Responsible for migration from Wasaby to React and new buisiness
						logic implementation. Also, I was responsible for the development of
						new features and bug fixing.
					</p>

					<p>
						<strong>Frontend Developer</strong> - Marvel (01/2022 - 10/2024)
					</p>
					<p>
						Was working on a B2B project creating a new interface with React,
						MobX, TypeScript, and styled-components from a jQuery old site.
						Responsible for troubleshooting and doing code review. Designing
						mockups with Figma, building UI documentation from scratch with
						Storybook. Built e-learning platform from scratch (2nd project).
					</p>

					<p>
						<strong>Frontend Developer</strong> - ADEVI (11/2021 - 02/2022)
					</p>
					<p>
						Remote full-time project work. Worked in a multinational team.
						Created a login/registration form component with React-Final-Form
						and other functionality using TypeScript, HTML5, CSS3, React, Redux,
						and Material-UI.
					</p>

					<p>
						<strong>Frontend Developer</strong> - SportApp Train-Time (Czech
						Republic) (09/2019 - 01/2020)
					</p>
					<p>
						Remote part-time project work. Worked in a team to create a
						functional website. Responsible for building and designing the
						interface using Material-UI, Figma, and React-Redux. Took part in
						creating mockups, designing, and developing new features.
					</p>
				</Section>

				<Section>
					<Title>Education</Title>
					<p>
						<strong>React Advanced Course</strong> - IBS-Learning (Luxoft)
						(05/2022 - 12/2022)
					</p>
					<p>
						<strong>Master of Pedagogy (Corporate e-learning)</strong> - Herzen
						State Pedagogical University (09/2019 - 08/2021)
					</p>
					<p>
						Graduated with honors. Wrote and published 2 papers. Grade: 5.0/5.
						Thesis: Electronic portfolio of a high school teacher.
					</p>
					<p>
						<strong>JavaScript Development Training</strong> - EPAM (03/2019 -
						05/2019)
					</p>
					<p>
						<strong>Bachelor of Computer Science</strong> - Herzen State
						Pedagogical University (10/2015 - 08/2019)
					</p>
					<p>
						Graduated with honors. Participated in scientific conferences. Wrote
						and published 3 papers. Grade: 4.7/5. Thesis: Web Interface for
						Software Developer Electronic Portfolio.
					</p>
				</Section>

				<Section>
					<Title>Time Zone</Title>
					<InfoItem margintop="1em"> GMT+2 (±3h)</InfoItem>
				</Section>
			</Container>
		</>
	)
}

export default App
