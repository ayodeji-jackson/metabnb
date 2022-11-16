import logo from "../assets/logo.png";
import { Hamburger, Cross, Angle } from "../assets/icons";
import { useState } from "react";
import { useRef } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import metamask from "../assets/metamask.png";
import walletconnect from "../assets/walletconnect.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (innerWidth >= 768) {
      setMenuIsOpen(true);
      menuRef.current.style.height = "100%";
    }
  }, []);

  return (
    <header className="text-[#434343] p-5 sm:px-16 lg:px-24 flex flex-col md:flex-row md:items-center md:gap-8 lg:gap-32">
      <div className="flex mb-5 md:mb-0">
        <h1 className="my-auto">
          <Link to="/">
            <img alt="metabnb logo" src={logo} className="w-32 inline" />
          </Link>
        </h1>
        <button
          className="ml-auto md:hidden"
          onClick={() => setMenuIsOpen(!menuIsOpen)}
        >
          {menuIsOpen ? (
            <Cross className="w-5 h-5" />
          ) : (
            <Hamburger className="w-5 h-5" />
          )}
        </button>
      </div>
      <ul
        ref={menuRef}
        className="flex flex-col overflow-hidden transition-[height] w-full gap-1 md:items-center md:flex-row md:gap-7 text-sm whitespace-nowrap"
        style={{
          height: `${!menuIsOpen ? "0" : menuRef.current.scrollHeight + "px"}`,
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/place-to-stay">Place to stay</Link>
        </li>
        <li>
          <Link to="#">NFTs</Link>
        </li>
        <li>
          <Link to="#">Community</Link>
        </li>
        <li className="mt-5 md:ml-auto md:mt-0">
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className="bg-primary text-white py-2 px-5 rounded-lg text-sm">
                Connect Wallet
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed bg-[rgba(64,64,64,0.3)] inset-0" />
              <Dialog.Content className="py-5 rounded-lg bg-white fixed max-w-[600px] w-[90vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Dialog.Title className="px-5 pb-3 font-bold flex text-2xl">
                  <span>Connect Wallet</span>
                  <Dialog.Close className="ml-auto">
                    <Cross className="h-5 w-5" />
                  </Dialog.Close>
                </Dialog.Title>
                <hr className="text-[#CFD8DC]" />
                <div className="mt-5 px-5 space-y-3">
                  <Dialog.Description>
                    Choose your preferred wallet:
                  </Dialog.Description>
                  <button className="dialog-button">
                    <span>
                      <img src={metamask} alt="metamask logo" />
                      Metamask
                    </span>
                    <Angle className="ml-auto" />
                  </button>
                  <button className="dialog-button">
                    <span>
                      <img src={walletconnect} alt="walletconnect logo" />
                      WalletConnect
                    </span>
                    <Angle className="ml-auto" />
                  </button>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </li>
      </ul>
    </header>
  );
}
