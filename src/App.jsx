import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  return (
    <div className="py-[1em] px-[1em]">
      <Header />
      <Main className="my-5" />
    </div>
  );
}