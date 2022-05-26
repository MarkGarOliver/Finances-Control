// @flow 
import * as React from 'react';
type Props = {
    
};
export const Footer = (props: Props) => {
    return (
        <div>
            <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-slate-800 mt-2">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <p className="flex items-center mb-4 sm:mb-0">
                   
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DevTools</span>
                    </p>
                    <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <p className="mr-4 hover:underline md:mr-6 ">About</p>
                        </li>
                        <li>
                            <p className="mr-4 hover:underline md:mr-6">TodoList</p>
                        </li>
                        <li>
                            <p className="mr-4 hover:underline md:mr-6 ">Projects</p>
                        </li>
                        <li>
                            <p className="hover:underline">PassGenerator</p>
                        </li>
                    </ul>
                </div>

                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <p className="hover:underline">Marcos Oliveira</p>. All Rights Reserved.
                </span>
            </footer>
        </div>
    );
};