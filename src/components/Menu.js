import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from 'react-i18next';

function Menu() {

	const { t, i18n } = useTranslation();

	return (
		<Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="/">
					<img
						alt="Teestube-Teatime"
						src={process.env.PUBLIC_URL + "/images/logo_original.png"}
						width="125"
						height="64"
						// className="d-inline-block align-top"
					/>{' '}
					Teestube-Teatime
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
					</Nav>
					<Nav>
						<Nav.Link href="/">{t("Home")}</Nav.Link>
						<NavDropdown title={t("Tea Menu")}>
							<NavDropdown.Item style={{ fontSize: `80%` }} href="/black_tea">{t("Black Tea")}</NavDropdown.Item>
							<NavDropdown.Item style={{ fontSize: `80%` }} href="/green_tea">{t("Green Tea")}</NavDropdown.Item>
							<NavDropdown.Item style={{ fontSize: `80%` }} href="/aromatic_blacktea">Aromatisierter Schwarztee</NavDropdown.Item>
							<NavDropdown.Item style={{ fontSize: `80%` }} href="/aromatic_greentea">Aromatisierter Grüntee</NavDropdown.Item>
							<NavDropdown.Item style={{ fontSize: `80%` }} href="/fruit_tea">{t("Fruit Tea")}</NavDropdown.Item>
							<NavDropdown.Item style={{ fontSize: `80%` }} href="/rooibusch_honeybusch">Rooibuschtee & Honeybusch Südafrika</NavDropdown.Item>
							<NavDropdown.Item style={{ fontSize: `80%` }} href="/krautermischungen">Kräutermischungen</NavDropdown.Item>
							<NavDropdown.Item style={{ fontSize: `80%` }} href="/spice_and_chai_tea">{t("Spice & Chai Tea")}</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link href="/about">{t("About Us")}</Nav.Link>
						<Nav.Link href="/gallery">{t("Gallery")}</Nav.Link>
						<Nav.Link href="/contact">{t("Contact")}</Nav.Link>
						<Nav.Link href="/datenschutz">Datenschutz</Nav.Link>
						{i18n.resolvedLanguage === 'de' &&
							<NavDropdown title="Sprache">
								<NavDropdown.Item onClick={() => i18n.changeLanguage('de')}>Deutsch</NavDropdown.Item>
								<NavDropdown.Item onClick={() => i18n.changeLanguage('en')}>Englisch</NavDropdown.Item>
								{/* <NavDropdown.Item onClick={() => i18n.changeLanguage('fr')}>Französisch</NavDropdown.Item> */}
							</NavDropdown>
						}
						{i18n.resolvedLanguage === 'en' &&
							<NavDropdown title="Language">
								<NavDropdown.Item onClick={() => i18n.changeLanguage('de')}>German</NavDropdown.Item>
								<NavDropdown.Item onClick={() => i18n.changeLanguage('en')}>English</NavDropdown.Item>
								{/* <NavDropdown.Item onClick={() => i18n.changeLanguage('fr')}>French</NavDropdown.Item> */}
							</NavDropdown>
						}
						{/* {i18n.resolvedLanguage === "fr" &&
							<NavDropdown title="Language">
								<NavDropdown.Item onClick={() => i18n.changeLanguage('de')}>Allemand</NavDropdown.Item>
								<NavDropdown.Item onClick={() => i18n.changeLanguage('en')}>Anglais</NavDropdown.Item>
								<NavDropdown.Item onClick={() => i18n.changeLanguage('fr')}>Français</NavDropdown.Item>
							</NavDropdown>
						} */}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Menu;