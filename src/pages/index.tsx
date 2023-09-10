import React from 'react';
import { CiSearch } from 'react-icons//ci';
import { HiChevronDown } from 'react-icons/hi'
import MainLayout from '../layouts/MainLayout';

const HomePage = () => {
  return (
    <MainLayout>
      
      <section className="grid grid-cols-12">
        <main className="col-span-8 border-r border-gray-300 w-full h-full px-24">
          <div className="flex flex-col space-y-4 w-full py-10">
            <div className="flex space-x-4 items-center w-full">
              <label htmlFor="search" className="relative w-full rounded-3xl border-gray-800 border">
                <div className="absolute left-2 h-full flex items-center">
                  <CiSearch />
                </div>
                <input 
                  type="text" 
                  name="search" 
                  id="search" 
                  className="outline-none py-1 px-4 pl-7 text-sm w-full rounded-3xl placeholder:text-sm placeholder:text-gray-300"
                  placeholder="Search..."
                />
              </label>
              <div className="flex items-center justify-end w-full space-x-4">
                <div>
                  My topics:
                </div>
                <div className="flex items-center space-x-2">
                  {Array.from({length:4}).map((_,i) => (
                    <div key={i} className="rounded-3xl bg-gray-200/50 px-4 py-3">
                      tag {i}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full justify-between flex items-center border-b border-gray-300 pb-8">
              <div>
                Articles:
              </div>
              <div>
                <button className="flex items-center space-x-2 border-gray-800 rounded-3xl border px-4 py-1.5 font-semibold">
                  <div>
                    Following
                  </div>
                  <div>
                    <HiChevronDown className="text-xl" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center space-y-8">
            {
              Array.from({length: 5}).map((_,i) => (
                <div key={i} className="flex group flex-col space-y-4 border-b border-gray-300 pb-8 last:border-none">
                  <div className="flex w-full items-center space-x-2">
                    <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
                    <div>
                      <p className="font-semibold">
                        Shrinjoy Saha &#x2022; 22 Dec 2022
                      </p>
                      <p className="text-sm">
                        The Founder, Software Developer
                      </p>
                    </div>
                  </div>
                  <div className="w-full grid grid-cols-12 gap-4">
                    <div className="col-span-8 flex flex-col space-y-4">
                      <p className="text-2xl font-bold text-gray-800 group-hover:underline decoration-indigo-600">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, omnis.
                      </p>
                      <p className="text-sm text-gray-500 break-words">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corporis velit distinctio expedita ipsam in molestias iure ullam reiciendis blanditiis doloribus natus quia pariatur vero, debitis perferendis aliquid ipsum cum eligendi? Pariatur tempora saepe sint id eius praesentium ad doloremque incidunt voluptatibus quod accusamus quo est explicabo iste enim consectetur, reprehenderit dicta. Molestias laborum vitae quis blanditiis fuga delectus ullam!
                      </p>
                    </div>
                    <div className="col-span-4">
                      <div className="bg-gray-300 w-full h-full rounded-xl transform transition hover:scale-105 duration-300 hover:shadow-xl"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-start w-full space-x-4">
                      <div className="flex items-center space-x-2">
                        {Array.from({length:4}).map((_,i) => (
                          <div key={i} className="rounded-2xl bg-gray-200/50 px-5 py-3">
                            tag {i}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </main>
        <aside className="col-span-4 w-full p-6 flex flex-col space-y-4">
          <div>
            <h3 className="my-6 font-semibold text-lg">People you might be interested</h3>
            <div className="flex flex-col space-y-4">
              {
                Array.from({length: 4}).map((_, i) => (
                  <div key={i} className="flex flex-row space-x-5 items-center">
                    <div className="bg-gray-300 w-10 h-10 rounded-full flex-none">

                    </div>
                    <div>
                      <div className="text-gray-900 font-bold text-sm">Jhon Doe</div>
                      <div className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt ex ducimus aliquid labore!</div>
                    </div>
                    <div>
                      <button className="flex items-center space-x-3 border border-gray-400/50 px-4 py-2 transition hover:border-gray-900 hover:text-gray-900">
                        Follow
                      </button>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div>
            <h3 className="my-6 font-semibold text-lg">Your reading list</h3>
            <div className="flex flex-col space-y-8">
              {
                Array.from({length: 4}).map((_, i) => (
                  <div key={i} className="flex space-x-6 items-center group">
                    <div className="w-2/5 h-full bg-gray-300 rounded-xl aspect-square"></div>
                    <div className="w-3/5 flex flex-col space-y-2">
                      <div className="text-lg font-semibold group-hover:underline decoration-indigo-600">Lorem ipsum dolor sit amet consectetur.</div>
                      <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta nemo placeat libero quaerat exercitationem!</div>
                      <div className="flex items-center space-x-4 w-full">
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                        <div>Shrinjoy Saha &#x2022; </div>
                        <div>Dec 22, 2023</div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </aside>
      </section>
    </MainLayout>
  )
}

export default HomePage
