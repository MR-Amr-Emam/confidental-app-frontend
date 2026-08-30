"use client"

import Link from "next/link";

const navigationItems = [
	{ label: "Home", href: "/" },
	{ label: "Doctors", href: "/doctors" },
	{ label: "Months", href: "#months" },
	{ label: "Courses", href: "/courses" },
	{ label: "Branches", href: "#branches" },
];

export default function Navbar() {
	return (
		<header className="p-3">
			<div className={"d-flex align-items-center"}>
				<a className="mx-2 fs-2 fw-bold">
					confidental
				</a>

				<nav className="mx-2 fs-4 d-flex w-100">
					{navigationItems.map((item) => (
						<Link
							href={item.href}
							key={item.label}
                            className="mx-2"
						>
							{item.label}
						</Link>
					))}
					<button type="button" className="btn btn-outline-dark
					ms-auto fw-semibold mx-2">sign in</button>
					<button type="button" className="btn btn-outline-dark
					fw-semibold mx-2">sign up</button>
				</nav>
			</div>
		</header>
	);
}
