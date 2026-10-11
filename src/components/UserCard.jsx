import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="card bg-black w-full max-w-sm shadow-sm mx-auto overflow-hidden">
      <figure>
        <img
  className="w-full h-auto object-cover"
  src="https://th.bing.com/th/id/OIP.iXSYbviP4gC2E0WkkOFdgAHaHa?w=231&h=220&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
  alt="Shoes"
/>
      </figure>
      <div className="card-body">
        <h3></h3>
        <h2 className="card-title justify-center">
          {user.firstname + " " + user.lastname}
        </h2>
        <div className="flex flex-wrap justify-center gap-2 px-2">
          <button className="btn btn-primary rounded-full flex-1 min-w-0">
  ignore
</button>

<button className="btn btn-accent rounded-full flex-1 min-w-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="size-[1.2em]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
            Intrested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
