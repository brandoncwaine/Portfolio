import React from "react";

function Experience() {
	return (
		<section className="py-10 max-w-5xl mx-auto">
			<div className="flex flex-col gap-10 justify-between lg:flex-row">
				<div className="w-full">
					<h2 className="text-[4em] text-gray-100 absolute z-0 uppercase dark:text-gray-800 ">
						Experience
					</h2>
					<div className="text-[#e91d63] z-10 relative p-5 flex flex-col gap-5">
						<h3 className="text-3xl font-bold"> 5+ </h3>
						<h4> Years of selfgit taught experience in web development </h4>
					</div>
					<h2 className="text-[4em] text-gray-100 absolute z-0 uppercase dark:text-gray-800">
						Technologies
					</h2>
					<div className="text-[#e91d63] z-10 relative p-5 flex flex-col gap-5">
						<h3 className="text-3xl font-bold"> 7+ </h3>
						<h4> Understanding of industry standard web technologies </h4>
					</div>
				</div>
				<div className="text-left w-full text-xl">
					<h3 className="text-gray-500 mb-2 md:mb-5 "> I Solve Problems </h3>
					<p className="text-lg py-5 leading-8 text-gray-800 dark:text-white">
						I&apos;m a second year student studying a degree in Software Engineering
						at Bouremouth University. I love creating exiting experiences on the
						web, making people smile and learning new things.
					</p>
				</div>
			</div>
		</section>
	);
}

export default Experience;
