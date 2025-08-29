import HeaderNav from "@/molecules/HeaderNav";
export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="">
        <nav></nav>
        <HeaderNav></HeaderNav>
      </header>
      <main>main 영역</main>
      <footer>footer 영역</footer>
    </div>
  );
}
