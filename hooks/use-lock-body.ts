import * as React from 'react';

/** @see https://usehooks.com/useLockBodyScroll.
 * @example
 * import * as React from "react";
 * import { useLockBodyScroll } from "@uidotdev/usehooks";
 * import { closeIcon } from "./icons";
 * import DemoContent from "./DemoContent";
 *
 * function Modal({ handleClose }) {
 *   useLockBodyScroll();
 *
 *   return (
 *     <div>
 *       <dialog>
 *         <header>
 *           <button onClick={handleClose}>{closeIcon}</button>
 *           <h2>Modal</h2>
 *         </header>
 *         <section>
 *           <DemoContent />
 *         </section>
 *       </dialog>
 *     </div>
 *   );
 * }
 *
 * export default function App() {
 *   const [isOpen, setIsOpen] = React.useState(false);
 *   return (
 *     <>
 *       {isOpen && <Modal handleClose={() => setIsOpen(false)} />}
 *       <main>
 *         <header>
 *           <h1>useLockBodyScroll</h1>
 *         </header>
 *         {["red", "blue", "green", "pink", "purple", "yellow"].map((color) => {
 *           return (
 *             <section
 *               style={{
 *                 backgroundColor: `var(--${color})`,
 *                 width: "100%",
 *                 height: "50vh",
 *               }}
 *             />
 *           );
 *         })}
 *         <button className="primary" onClick={() => setIsOpen(true)}>
 *           openModal
 *         </button>
 *       </main>
 *     </>
 *   );
 * }
 */
export function useLockBody() {
  React.useLayoutEffect((): (() => void) => {
    const originalStyle: string = window.getComputedStyle(
      document.body,
    ).overflow;
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = originalStyle);
  }, []);
}
