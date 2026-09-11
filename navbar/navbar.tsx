"use client"

import Link from "next/link";

const navigationItems = [
	{ label: "Home", href: "/" },
	{ label: "Courses", href: "/courses" },
];

export default function Navbar() {
	return (
		<header className="p-3 overflow-hidden border">
			<div className={"d-flex align-items-center"}>
				<a className="mx-2 fs-2 fw-bold">
					confidental
				</a>

				<nav className="mx-2 fs-4 d-flex w-100 align-items-center">
					{navigationItems.map((item) => (
						<Link
							href={item.href}
							key={item.label}
                            className="mx-2"
						>
							{item.label}
						</Link>
					))}
					<button type="button" className="btn btn-outline-dark d-none d-md-inline
					ms-auto fw-semibold mx-2">sign in</button>
					<button type="button" className="btn btn-outline-dark d-none d-md-inline
					fw-semibold mx-2">sign up</button>
				</nav>
			</div>
		</header>
	);
}
