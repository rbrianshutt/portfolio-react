import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import pic from '../public/test-profile-pic.jpg';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';
import { useState } from 'react';

const Home: NextPage = () => {
	const [darkMode, setDarkMode] = useState(false);
	return (
		<div className={darkMode ? 'dark' : ''}>
			<Head>
				<title>John Smith Portfolio</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='bg-white px-10 md:px-20 lg:px:40 dark:bg-gray-900'>
				<section className='min-h-screen'>
					<nav className='py-10 mb-12 flex justify-between '>
						<h1 className='dark:text-gray-300 text-xl uppercase font-medium tracking-wide'>
							Developed by Brian
						</h1>
						<ul className='flex items-center'>
							<li>
								<BsFillMoonStarsFill
									onClick={() => setDarkMode(!darkMode)}
									className='cursor-pointer text-2xl dark:text-gray-300'
								/>
							</li>
							<li>
								<a
									href='#'
									className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'
								>
									Resume
								</a>
							</li>
						</ul>
					</nav>
					<div className='text-center p-10'>
						<h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>
							John Smith
						</h2>
						<h3 className='text-2xl py-2 md:text-3xl dark:text-gray-300'>
							Developer and designer
						</h3>
						<p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-400'>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi corrupti
							dolorum porro ratione recusandae harum eos, modi sunt praesentium odio?
						</p>
					</div>
					<div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
						<AiFillTwitterCircle />
						<AiFillYoutube />
						<AiFillLinkedin />
					</div>
					<div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:w-96 md:h-96'>
						<Image src={pic} layout='fill' objectFit='cover' />
					</div>
				</section>
				<section>
					<div>
						<h3 className='text-3xl text-center mt-10 py-1 dark:text-gray-300'>
							Services I offer
						</h3>
						<p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-400'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, repudiandae!
							Dicta ipsum placeat tenetur repellendus nulla nobis explicabo reprehenderit
							a accusantium porro minus nemo quis cum alias, eveniet quam modi.
						</p>
						<p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-400'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
							suscipit <span className='text-teal-500'>adipisicing elit.</span>
							exercitationem minima. Expedita in pariatur laborum? Accusantium atque
							repellendus quo beatae. A{' '}
							<span className='text-teal-500'>tempore necessitatibus</span> animi error,
							earum quo praesentium totam debitis, quas veniam odit facere!
						</p>
					</div>
					<div className='lg:flex gap-10'>
						<div className='text-center shadow-lg rounded-xl my-10 dark:bg-gray-800'>
							<Image src={design} width={100} height={100} />
							<h3 className='text-lg font-medium pt-8 pb-2 dark:text-gray-300'>
								Beautiful Designs
							</h3>
							<p className='py-2 dark:text-gray-400'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint blanditiis
								ex amet!
							</p>
							<h4 className='py-4 text-teal-600 dark:text-gray-300'>
								Design tools I use
							</h4>
							<p className='text-gray-800 py-1 dark:text-gray-400'>Illustrator</p>
							<p className='text-gray-800 py-1 dark:text-gray-400 '>Photoshop</p>
							<p className='text-gray-800 py-1 dark:text-gray-400'>Figma</p>
						</div>
						<div className='text-center shadow-lg rounded-xl my-10 dark:bg-gray-800'>
							<Image src={code} width={100} height={100} />
							<h3 className='text-lg font-medium pt-8 pb-2 dark:text-gray-300'>
								Beautiful Designs
							</h3>
							<p className='py-2 dark:text-gray-400'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint blanditiis
								ex amet!
							</p>
							<h4 className='py-4 text-teal-600 dark:text-gray-300'>
								Design tools I use
							</h4>
							<p className='text-gray-800 py-1 dark:text-gray-400'>Illustrator</p>
							<p className='text-gray-800 py-1 dark:text-gray-400'>Photoshop</p>
							<p className='text-gray-800 py-1 dark:text-gray-400'>Figma</p>
						</div>
						<div className='text-center shadow-lg rounded-xl my-10 dark:bg-gray-800'>
							<Image src={consulting} width={100} height={100} />
							<h3 className='text-lg font-medium pt-8 pb-2 dark:text-gray-300'>
								Beautiful Designs
							</h3>
							<p className='py-2 dark:text-gray-400'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint blanditiis
								ex amet!
							</p>
							<h4 className='py-4 text-teal-600 dark:text-gray-300'>
								Design tools I use
							</h4>
							<p className='text-gray-800 py-1 dark:text-gray-400'>Illustrator</p>
							<p className='text-gray-800 py-1 dark:text-gray-400'>Photoshop</p>
							<p className='text-gray-800 py-1 dark:text-gray-400'>Figma</p>
						</div>
					</div>
				</section>
				<section>
					<div>
						<h3 className='text-3xl text-center py-1 dark:text-gray-300'>Portfolio</h3>
						<p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-400'>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi corrupti
							dolorum porro ratione recusandae harum eos, modi sunt praesentium odio?
						</p>
						<p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-400'>
							Lorem ipsum dolor sit, amet consectetur{' '}
							<span className='text-teal-500'>adipisicing elit.</span> Quasi corrupti
							dolorum porro ratione <span className='text-teal-500'>recusandae</span>{' '}
							harum eos, modi sunt praesentium odio?
						</p>
					</div>
					<div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
						<div className='basis-1/3 flex-1'>
							<Image
								src={web1}
								className='rounded-lg object-cover'
								width={'100%'}
								height={'100%'}
								layout='responsive'
							/>
						</div>
						<div className='basis-1/3 flex-1'>
							<Image
								src={web2}
								className='rounded-lg object-cover'
								width={'100%'}
								height={'100%'}
								layout='responsive'
							/>
						</div>
						<div className='basis-1/3 flex-1'>
							<Image
								src={web3}
								className='rounded-lg object-cover'
								width={'100%'}
								height={'100%'}
								layout='responsive'
							/>
						</div>
						<div className='basis-1/3 flex-1'>
							<Image
								src={web4}
								className='rounded-lg object-cover'
								width={'100%'}
								height={'100%'}
								layout='responsive'
							/>
						</div>
						<div className='basis-1/3 flex-1'>
							<Image
								src={web5}
								className='rounded-lg object-cover'
								width={'100%'}
								height={'100%'}
								layout='responsive'
							/>
						</div>
						<div className='basis-1/3 flex-1'>
							<Image
								src={web6}
								className='rounded-lg object-cover'
								width={'100%'}
								height={'100%'}
								layout='responsive'
							/>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default Home;
