import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';
import logo from '../Assets/logo2.png';
import { CiMenuFries } from 'react-icons/ci';
import { HashLink } from 'react-router-hash-link';
import { IoMdClose } from 'react-icons/io';

const Nav = ({ whichLanguage, isEnglish, openMenu }) => {
	const navContainerRef = useRef(null);
	const menuRef = useRef(null);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [isNavVisible, setIsNavVisible] = useState(true);
	const { y: currentScrollY } = useWindowScroll();
	const [menuOpen, setMenuOpen] = useState(false);
	const [menuMounted, setMenuMounted] = useState(false);

	useEffect(() => {
		if (currentScrollY === 0) {
			setIsNavVisible(true);
			navContainerRef.current.classList.remove('floating-nav');
		} else if (currentScrollY > lastScrollY) {
			setIsNavVisible(false);
			navContainerRef.current.classList.add('floating-nav');
		} else if (currentScrollY < lastScrollY) {
			setIsNavVisible(true);
			navContainerRef.current.classList.add('floating-nav');
		}
		setLastScrollY(currentScrollY);
	}, [currentScrollY, lastScrollY]);

	useEffect(() => {
		gsap.to(navContainerRef.current, {
			y: isNavVisible ? 0 : -100,
			opacity: isNavVisible ? 1 : 0,
			duration: 0.2,
		});
	}, [isNavVisible]);

	// control portal mount state so we can animate out before unmounting
	useEffect(() => {
		if (menuOpen) {
			setMenuMounted(true);
			document.body.classList.add('menu__open');
			requestAnimationFrame(() => {
				if (!menuRef.current) return;
				menuRef.current.classList.add('menu__visible');
				gsap.killTweensOf(menuRef.current);
				gsap.fromTo(
					menuRef.current,
					{ x: '-20%', opacity: 0 },
					{ x: '0%', opacity: 1, duration: 0.4, ease: 'power3.out' }
				);
			});
		} else if (menuMounted) {
			if (menuRef.current) {
				gsap.to(menuRef.current, {
					x: '-20%',
					opacity: 0,
					duration: 0.25,
					ease: 'power3.in',
					onComplete: () => {
						if (menuRef.current)
							menuRef.current.classList.remove('menu__visible');
						setMenuMounted(false);
						document.body.classList.remove('menu__open');
					},
				});
			}
		}
	}, [menuOpen, menuMounted]);

	return (
		<div ref={navContainerRef} className="nav-Container">
			<div className="nav-header">
				<nav>
					<div className="img-div">
						<img src={logo} className="logo" alt="" />
					</div>
					{isEnglish ? (
						<ul className="nav__list">
							<li className="nav__links">
								<HashLink
									to="/#landing"
									className="nav__link link__hover--effect"
								>
									Home
								</HashLink>
							</li>
							<li className="nav__links">
								<HashLink
									to="/#features"
									className="nav__link link__hover--effect"
									smooth
								>
									Features
								</HashLink>
							</li>
							<li className="nav__links">
								<HashLink
									to="/#services"
									className="nav__link link__hover--effect"
								>
									Services
								</HashLink>
							</li>

							<button
								className=" button"
								onClick={() => whichLanguage(false)}
							>
								Español
							</button>
							<button
								className="menu__button"
								onClick={() => setMenuOpen(true)}
							>
								<CiMenuFries className="menu__button" />
							</button>
						</ul>
					) : (
						<ul className="nav__list">
							<li className="nav__links">
								<HashLink
									to="/#landing"
									className="nav__link link__hover--effect"
								>
									Incial
								</HashLink>
							</li>
							<li className="nav__links">
								<HashLink
									to="/#features"
									className="nav__link link__hover--effect"
									smooth
								>
									Características
								</HashLink>
							</li>
							<li className="nav__links">
								<HashLink
									to="/#services"
									className="nav__link link__hover--effect"
								>
									Servicios
								</HashLink>
							</li>
							<li className="nav__links">
								<HashLink
									to="/#gallery"
									className="nav__link link__hover--effect"
								>
									Galleria
								</HashLink>
							</li>

							<button
								className="button"
								onClick={() => whichLanguage(true)}
							>
								English
							</button>
							<button
								className="menu__button"
								onClick={() => setMenuOpen(true)}
							>
								<CiMenuFries />
							</button>
						</ul>
					)}
				</nav>
			</div>
			{menuMounted &&
				createPortal(
					<div
						className="menu__backdrop"
						ref={menuRef}
						onClick={() => setMenuOpen(false)}
						role="dialog"
						aria-modal="true"
					>
						<div
							className="menu__inner"
							onClick={(e) => e.stopPropagation()}
						>
							<button
								className="menu__close"
								onClick={() => setMenuOpen(false)}
								aria-label="Close menu"
							>
								<IoMdClose />
							</button>
							<div className="choices">
								<HashLink
									to="/#landing"
									className="menu__link link__hover--effect"
									onClick={() => setMenuOpen(false)}
								>
									Home
								</HashLink>
								<HashLink
									to="/#features"
									className="menu__link link__hover--effect"
									onClick={() => setMenuOpen(false)}
								>
									Features
								</HashLink>
								<HashLink
									to="/#services"
									className="menu__link link__hover--effect"
									onClick={() => setMenuOpen(false)}
								>
									Services
								</HashLink>
								<HashLink
									to="/GalleryPage#images"
									className="menu__link link__hover--effect"
									onClick={() => setMenuOpen(false)}
								>
									Gallery
								</HashLink>
							</div>
						</div>
					</div>,
					document.body
				)}
		</div>
	);
};

export default Nav;
