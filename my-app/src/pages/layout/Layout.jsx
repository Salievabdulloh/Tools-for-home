import { useTranslation } from "react-i18next"
import { Link, Outlet } from "react-router"

const Layout = () => {
  let { t, i18n } = useTranslation()
  function language(lang) {
    i18n.changeLanguage(lang)
  }

  let i18next = localStorage.getItem("i18nextLng")

  return (
    <div>
      <header>
        <select value={i18next} onChange={(e) => language(e.target.value)}>
          <option value="ru">Russian</option>
          <option value="tj">Tajik</option>
          <option value="en">English</option>
        </select>
        <Link to={"/"}>{t("data.Home")}</Link >
      </header>
      <main className="bg-[whitesmoke]">
        <Outlet />
      </main>
      <footer></footer>
    </div>
  )
}

export default Layout