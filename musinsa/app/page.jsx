import HeaderLayer from "@/organisms/HeaderLayer";
export default function Home() {
  return (
    <div>
      <div className="max-w-[1705px] mx-auto px-4 sm:px-6 lg:px-8">
        <header className="fixed w-full bg-[#191B1F]">
          <HeaderLayer></HeaderLayer>
        </header>
      </div>
      <div className="max-w-[1705px] mx-auto px-4 sm:px-6 lg:px-8">
        <main className="bg-[#F5F5F5] h-screen text-black">main 영역</main>
        <footer className="bg-[#F5F5F5] h-screen text-black">
          footer 영역
        </footer>
      </div>
    </div>
  );
}
