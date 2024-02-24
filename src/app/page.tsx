import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import Filter from "@/components/filter/Filter";
import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";
import Main from '@/components/main/Main'
import Suggestion from '@/components/suggestion/Suggestion';
import Footer from "@/components/footer/Footer";
import ChildNav from "@/components/navbar/ChildNav";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FBFCFD] text-black">
      <Navbar/>
      <div className="px-[200px] pt-[40px] items-center">
      <Header/>
      <Filter/>
      <ChildNav/>
      <BreadCrumb/>
      <Main/>
      <Suggestion/>
      </div>
      <Footer/>
    </main>
  );
}
