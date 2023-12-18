import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import {
  FaDesktop,
  FaChevronRight,
  FaChartBar,
  FaServer,
  FaArrowRightFromBracket,
  FaUser,
  FaCircleUser,
} from "react-icons/fa6";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const exitDashBoard = () => {
    localStorage.removeItem("user");
  };

  return (
    <>
      <nav
        className={`bg-indigo-500 border-gray-200 dark:bg-gray-900 dark:border-gray-700 max-h-16 shadow-sm`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <Image
            src={"/logo.svg"}
            alt="Logo"
            width={100}
            height={100}
            className="mx-auto ml-0 -mt-4"
          />
          <Link
            href="/Dashboard"
            className="inline-flex items-center gap-x-1.5 text-white font-medium text-sm px-3 py-2 hover:text-cyan-600"
          >
            {" "}
            <FaDesktop className=" h-5 w-5 mr-3" /> Dashboard
          </Link>

          <Menu as="div" className={"relative inline-block text-left"}>
            <div>
              <Menu.Button className="inline-flex w-full justify-center items-center gap-x-1.5 border-none bg-transparent px-3 py-2 font-medium text-sm text-white hover:text-cyan-600">
                <FaChartBar className=" h-5 w-5 mr-3" aria-hidden="true" />
                Relatórios
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transtion ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-6 w-56 origin-top-right rounded-md bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-3">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="ADMRelatoClient"
                        className={classNames(
                          active ? "bg-slate-800 text-cyan-600" : "text-white",
                          "flex px-4 py-2 text-sm items-center gap-2"
                        )}
                      >
                        <FaChevronRight />
                        Clientes
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/ADMRelatoConsuClie"
                        className={classNames(
                          active ? "bg-slate-800 text-cyan-600" : "text-white",
                          "flex px-4 py-2 text-sm items-center gap-2"
                        )}
                      >
                        <FaChevronRight />
                        Consumo por Clientes
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/CadNewPlan"
                        className={classNames(
                          active ? "bg-slate-800 text-cyan-600" : "text-white",
                          "flex px-4 py-2 text-sm items-center gap-2"
                        )}
                      >
                        <FaChevronRight />
                        Planos
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/ADMRelatofaturamento"
                        className={classNames(
                          active ? "bg-slate-800 text-cyan-600" : "text-white",
                          "flex px-4 py-2 text-sm items-center gap-2"
                        )}
                      >
                        <FaChevronRight />
                        Faturamento
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/ADMUserList"
                        className={classNames(
                          active ? "bg-slate-800 text-cyan-600" : "text-white",
                          "flex px-4 py-2 text-sm items-center gap-2"
                        )}
                      >
                        <FaChevronRight />
                        Usuários
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          <Menu as="div" className={"relative inline-block text-left"}>
            <div>
              <Menu.Button className="inline-flex w-full justify-center items-center gap-x-1.5 border-none bg-transparent px-3 py-2 font-medium text-sm text-white hover:text-cyan-600">
                <FaServer className=" h-5 w-5 mr-3" aria-hidden="true" />
                Cadastros
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transtion ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-6 w-56 origin-top-right rounded-md bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-3">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/CadNewUser"
                        className={classNames(
                          active ? "bg-slate-800 text-cyan-600" : "text-white",
                          "flex px-4 py-2 text-sm items-center gap-2"
                        )}
                      >
                        <FaChevronRight />
                        Usuários
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/CadNewPlan"
                        className={classNames(
                          active ? "bg-slate-800 text-cyan-600" : "text-white",
                          "flex px-4 py-2 text-sm items-center gap-2"
                        )}
                      >
                        <FaChevronRight />
                        Planos
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/Help"
                        className={classNames(
                          active ? "bg-slate-800 text-cyan-600" : "text-white",
                          "flex px-4 py-2 text-sm items-center gap-2"
                        )}
                      >
                        <FaChevronRight />
                        Ajuda
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          <Link
            onClick={exitDashBoard}
            href="/Login"
            className="inline-flex items-center px-3 py-2 text-white font-medium text-sm hover:text-cyan-600"
          >
            <FaArrowRightFromBracket className=" h-5 w-5 mr-3" /> Sair
          </Link>

          <Menu as="div" className={"relative inline-block text-left"}>
            <div>
              <Menu.Button className="inline-flex w-full justify-center items-center gap-x-1.5 border-none bg-transparent px-3 py-2 font-medium text-sm text-white hover:text-cyan-600">
                <FaUser className=" h-5 w-5 mr-3" aria-hidden="true" />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transtion ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-6 w-56 origin-top-right rounded-md bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-3">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/MyProfile"
                        className={classNames(
                          active ? "bg-slate-800 text-cyan-600" : "text-white",
                          "flex px-4 py-2 text-sm items-center gap-2"
                        )}
                      >
                        <FaCircleUser />
                        Meus Dados
                      </Link>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        onClick={exitDashBoard}
                        href="/Login"
                        className={classNames(
                          active ? "bg-slate-800 text-cyan-600" : "text-white",
                          "flex px-4 py-2 text-sm items-center gap-2"
                        )}
                      >
                        <FaArrowRightFromBracket />
                        Sair
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </nav>
    </>
  );
}
