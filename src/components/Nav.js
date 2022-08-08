import React from 'react';

function Nav(props)  {
  const catz = ['About', 'Projects', 'Skills', 'Contact']
  return (
    <div className="catz is-centered">
    <ul className="nav nav-catz">
  {catz.map((catz) => (
    <li
      className={
        props.currentPage === catz ? "nav-item is-active" : "nav-item"
      }
      key={catz}
    >
      <a
        href={"#" + catz.toLowerCase()}
        // Whenever a tab (catz)//categories is clicked on,
        // the current page is set through the handlePageChange props.
        onClick={() => props.handlePageChange(catz)}
        className={
          props.currentPage === catz ? "nav-link active" : "nav-link"
        }
      >
        {catz}
      </a>
    </li>
  ))}
</ul>
</div>
);
}
export default Nav;



