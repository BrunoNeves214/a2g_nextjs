import Footer from "./Footer";
import Header from "./Header";

export default function Layout({children}) {
  return (
    <div className="max-w-6xl mx-auto p-5 text-cor10">
        <Header />
        {children}
        <Footer />
    </div>
  )
}
