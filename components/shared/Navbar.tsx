import { kanit } from "@/utils/fontsStyle";

export default function Navbar() {
  return (
    <div className={`navbar bg-primary hidden lg:block ${kanit.className}`}>
      <div className="flex justify-between container mx-auto text-base-100">
        <a className="normal-case text-xl font-bold">Family Pay</a>
        <div>
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost normal-case text-xl font-extralight"
            >
              บ้านแสนสุข
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52  text-black"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>เพิ่มครอบครัว</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
