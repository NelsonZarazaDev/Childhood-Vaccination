import React, { useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import { salir } from "./Utilities/funciones";
import { validaToken } from "./Utilities/funciones";

export default function Menu() {
  const decodedToken = localStorage.getItem("decodedToken");
  const rolGlobal = localStorage.getItem("rol");

  let navigate = useNavigate();

  // useEffect(() => {
  //   validaToken(navigate);
  // },[]);

  return (
    <>
      <div className="w-full h-20 border-b-2 border-lightGrey flex bg-white">
        <Disclosure as="nav">
          {({ open }) => (
            <>
              <div className="flex">
                <div className="flex w-full h-20 items-center justify-between">
                  <div className="flex items-center">
                    <div className="logo text-4xl font-bold space-x-4 w-40 h-full flex items-center justify-center">
                      vaku
                    </div>
                    {rolGlobal === "Jefe de enfermeria" && (
                      <div className="hidden md:block">
                        <div className="font-bold flex space-x-10">
                          <Link to={`tabla`}>Usuarios</Link>
                          <div>Niños</div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="-mr-2 flex md:hidden">
                    {rolGlobal === "Jefe de enfermeria" ? (
                      <Disclosure.Button className="relative mr-3 inline-flex items-center justify-center rounded-md bg-Silver p-2 text-black hover:bg-lightGrey  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <GiHamburgerMenu
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <GiHamburgerMenu
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    ) : null}
                  </div>
                </div>
              </div>

              {rolGlobal === "Jefe de enfermeria" && (
                <>
                  <Disclosure.Panel className="lg:hidden absolute inset-x-0 bg-LightBlue rounded-bl-xl rounded-br-xl">
                    <div className="space-y-2 px-2 pb-3 pt-2 sm:px-3 bg-lightGreen">
                      <div className="font-bold flex flex-col">
                        <Link to={`tabla`}>Usuarios</Link>
                        <Link>Niño</Link>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </>
          )}
        </Disclosure>
        <div className="m-auto w-full flex justify-end mr-10">
          <details className="w-12 h-12 rounded-full border border-black ">
            <summary className="w-12 h-12 text-2xl flex justify-center items-center ">
              <FaUser />
            </summary>
            <div className="mt-3 w-28 text-sm leading-6 font-bold text-black m-auto">
              <button
                onClick={() => salir(navigate)}
                className="w-28 bg-white shadow-xl rounded-md p-1 m-auto -ml-8 absolute z-10"
              >
                Cerrar sesión
              </button>
            </div>
          </details>
        </div>
      </div>

      <div className="m-4 bg-white" id="detail">
        <Outlet />
      </div>
    </>
  );
}
