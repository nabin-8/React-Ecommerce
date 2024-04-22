
function Footer() {
  return (
        <>

            <footer className="bg-white dark:bg-gray-900 border-t-[1px] border-cyan-800" >
                <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">About Me</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className=" hover:underline">About</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Blog</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Skills</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Education</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Projects</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Web</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Mobile</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">freelancing</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Open Source</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Work With Me</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Contact</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">freelancing</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Buy Projects</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Social Media</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">X</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">GitHub</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">LinkedIn</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Instagram</a>
                            </li>
                        </ul>
                    </div>
                </div>
                
                </div>
            </footer>

        </>
  )
}

export default Footer