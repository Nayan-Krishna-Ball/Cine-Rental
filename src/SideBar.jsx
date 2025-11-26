//
import CommeingSoon from "./assets/icons/commingSoon.svg";
import Favourite from "./assets/icons/favourite.svg";
import NewRelease from "./assets/icons/newRelease.svg";
import Tradding from "./assets/icons/trending.svg";
import Watchletar from "./assets/icons/watchLater.svg";

export default function SideBar() {
  return (
    <aside>
      <ul className="space-y-2">
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
            href="#"
          >
            <img src={Tradding} width="24" height="24" alt="Tradding" />
            <span>Trending</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img src={NewRelease} width="24" height="24" alt="NewRelease" />
            <span>New Releases</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img src={CommeingSoon} width="24" height="24" alt="CommeingSoon" />
            <span>Coming Soon</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img src={Favourite} width="24" height="24" alt="Favourite" />
            <span>Favourites</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img src={Watchletar} width="24" height="24" alt="Watcchletar" />
            <span>Watch Later</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}
