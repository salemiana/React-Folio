import React from 'react';

function Nav(props)  {
  const tabs = ['About', 'Projects', 'Skills', 'Contact']
  return (
    <div className="tabs is-centered">
    <ul className="nav nav-tabs">
  {tabs.map((tab) => (
    <li
      className={
        props.currentPage === tab ? "nav-item is-active" : "nav-item"
      }
      key={tab}
    >
      <a
        href={"#" + tab.toLowerCase()}
        // Whenever a tab is clicked on,
        // the current page is set through the handlePageChange props.
        onClick={() => props.handlePageChange(tab)}
        className={
          props.currentPage === tab ? "nav-link active" : "nav-link"
        }
      >
        {tab}
      </a>
    </li>
  ))}
</ul>
</div>
);
}
export default Nav;



