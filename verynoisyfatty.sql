-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:3306
-- Généré le :  Mer 31 Octobre 2018 à 11:04
-- Version du serveur :  5.7.24-0ubuntu0.18.04.1
-- Version de PHP :  7.2.10-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `verynoisyfatty`
--

-- --------------------------------------------------------

--
-- Structure de la table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `brand` varchar(100) NOT NULL,
  `barCode` varchar(100) NOT NULL,
  `website` varchar(250) NOT NULL,
  `nutriCode` varchar(100) NOT NULL,
  `image` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `products`
--

INSERT INTO `products` (`id`, `name`, `brand`, `barCode`, `website`, `nutriCode`, `image`) VALUES
(1, 'Tagada', 'Haribo', '3103220009574', 'https://fr.openfoodfacts.org/produit/3103220009574/tagada-l-originale-haribo', 'D', 'assets/images/tagada.png'),
(2, 'Schtroumpfs', 'Haribo', '3103220009710', 'https://fr.openfoodfacts.org/produit/3103220009710/les-schtroumpfs-haribo', 'D', 'assets/images/schtroumpf.png'),
(3, 'Dragibus', 'Haribo', '3103220030400', 'https://fr.openfoodfacts.org/produit/3103220030400/dragibus-haribo', 'D', 'assets/images/dragibus.png'),
(4, 'Skittles', 'Skittles', '5000159021692', 'https://fr.openfoodfacts.org/produit/5000159021692/skittles-fruits', 'D', 'assets/images/skittles.png'),
(5, 'Maoam', 'Haribo', '42075622', 'https://fr.openfoodfacts.org/produit/42075622/maoam-stripes', 'D', 'assets/images/maomam.png'),
(6, 'Rotella', 'Haribo', '3103220009635', 'https://fr.openfoodfacts.org/produit/3103220009635/rotella-l-original-haribo', 'D', 'assets/images/reglisse.png'),
(7, 'L\'ours d\'or', 'Haribo', '3103220030431', 'https://fr.openfoodfacts.org/produit/3103220030431/l-ours-d-or-haribo', 'D', 'assets/images/ours.png'),
(8, 'Schokobons', 'Kinder', '8000500269206', 'https://fr.openfoodfacts.org/produit/8000500269206/kinder-schokobons', 'D', 'assets/images/schokobon.png'),
(9, 'Werther\'s', 'Storck', '4014400907636', 'https://fr.openfoodfacts.org/produit/4014400907636/werther-s-original-bonbons-classiques-sans-sucre-storck', 'D', 'assets/images/werther\'s.png'),
(10, 'Happy Cola', 'Haribo', '3103220009123', 'https://fr.openfoodfacts.org/produit/3103220009123/original-happy-cola-haribo', 'D', 'assets/images/bonbonzizi.png'),
(11, 'Brocolis', 'BioVillage', '', 'https://fr.openfoodfacts.org/produit/3564707001335/brocolis-en-fleurettes-surgeles-bio-village', '', 'assets/images/brocoli.png'),
(12, 'Courgettes', 'Sainsbury\'s', '', 'https://fr.openfoodfacts.org/produit/01150421/courgettes-sainsbury-s', '', 'assets/images/courgette.png'),
(13, 'Choux', 'BioVillage', '', 'https://fr.openfoodfacts.org/produit/3347762000037/chou-de-bruxelles-les-nouveaux-producteurs', '', 'assets/images/chou.png');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
