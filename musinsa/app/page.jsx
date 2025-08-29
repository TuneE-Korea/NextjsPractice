import HeaderLayer from "@/organisms/HeaderLayer";
export default function Home() {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <header className="w-full bg-neutral-800">
          <HeaderLayer></HeaderLayer>
        </header>
      </div>
      <div className="bg-gray-100 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <main className="text-black">main 영역</main>
        <footer className="text-black">footer 영역</footer>
      </div>
    </div>
  );
}
