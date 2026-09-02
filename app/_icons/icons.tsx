

export const RightArrowIcon = ({ className = 'h-4 w-4' }: { className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 22"
            strokeWidth={1.5}
            stroke="currentColor"
            className={className}
        >
            <path d="M0.292893 15.2929C-0.0976311 15.6834 -0.0976311 16.3166 0.292893 16.7071C0.683418 17.0976 1.31658 17.0976 1.70711 16.7071L1 16L0.292893 15.2929ZM17 1C17 0.447715 16.5523 -2.52353e-10 16 -2.53133e-07L7 5.47657e-07C6.44772 2.10482e-07 6 0.447716 6 1C6 1.55228 6.44772 2 7 2L15 2L15 10C15 10.5523 15.4477 11 16 11C16.5523 11 17 10.5523 17 10L17 1ZM1 16L1.70711 16.7071L16.7071 1.70711L16 1L15.2929 0.292893L0.292893 15.2929L1 16Z" fill="white" />
        </svg>

    );
};

export const CartIcon = ({ className = 'h-6 w-6' }: { className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={className}

        >

            <path d="M17.437,19.934c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1c0.552,0 1,0.448 1,1Zm-11.217,-4.266l-0.945,-10.9c-0.03,-0.391 -0.356,-0.693 -0.749,-0.693l-0.966,-0c-0.276,-0 -0.5,-0.224 -0.5,-0.5c0,-0.276 0.224,-0.5 0.5,-0.5l0.966,-0c0.916,-0 1.676,0.704 1.746,1.617l0.139,1.818l13.03,-0c0.885,-0 1.577,0.76 1.494,1.638l-0.668,7.52c-0.121,1.285 -1.199,2.267 -2.489,2.267l-9.069,0c-1.29,0 -2.367,-0.981 -2.489,-2.267Zm0.274,-8.158l0.722,8.066c0.073,0.77 0.719,1.359 1.493,1.359l9.069,0c0.774,0 1.42,-0.589 1.493,-1.359l0.668,-7.518c0.028,-0.294 -0.203,-0.548 -0.498,-0.548l-12.947,-0Zm4.454,12.424c-0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c-0,-0.552 0.448,-1 1,-1c0.552,0 1,0.448 1,1Z" data--h-bstatus="0OBSERVED" />
        </svg>
    );
};


export const SearchIcon = ({ className = 'h-6 w-6' }: { className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={className}
        >
            <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
    );
}

export const DashboardIcon = ({ className = 'h-6 w-6' }: { className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={className}
        >
            <path d="M1.5 1.5L29.5 1.5" stroke="black" strokeWidth="3" strokeLinecap="round" />
            <path d="M12.5 16.5L29.5 16.5" stroke="black" strokeWidth="3" strokeLinecap="round" />
        </svg>
    );
}

