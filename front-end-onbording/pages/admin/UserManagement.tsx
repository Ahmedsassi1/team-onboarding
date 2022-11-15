import NavBarAdmin from "../../app/commun/layout/admin/NavBarAdmin";
import Footer from "../../app/commun/layout/admin/FooterAdmin";
import UserBox from "../../app/Modules/components/boxs/UserBox";
export default function HomeAdmin() {
  return (
    <div className="flex flex-col h-screen justify-between ">
      <NavBarAdmin />
      <div className="flex items-center w-screen justify-center">
        <UserBox />
      </div>
      <Footer />
    </div>
  );
}
