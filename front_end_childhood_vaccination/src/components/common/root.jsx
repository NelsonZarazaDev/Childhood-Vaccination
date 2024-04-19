import { Outlet, Link } from "react-router-dom";

export default function Root() {

  return (
    <>

      <div id="sidebar">
        <nav>
          <ul>
            <li>
              <Link to={`VaccinationSchedule`}>Your Name1</Link>
            </li>
            <li>
              <Link to={`contacts/2`}>Your Name2</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="m-2" id="detail">
        <Outlet />
      </div>
    </>
  );
}
