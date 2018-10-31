-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:3306
-- Généré le :  Mer 31 Octobre 2018 à 08:38
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
  `nutriCode` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `products`
--

INSERT INTO `products` (`id`, `name`, `brand`, `barCode`, `website`, `nutriCode`) VALUES
(1, 'Tagada', 'Haribo', '3103220009574', 'https://www.haribo.com/frFR/produits/haribo/range/15/product/475/title/tagada-300-g.html', 'D'),
(2, 'Les Schtroumpfs', 'Haribo', '3103220009710', '', 'D'),
(3, 'Dragibus', 'Haribo', '3103220030400', 'https://fr.openfoodfacts.org/produit/3103220030400/dragibus-haribo', 'D'),
(4, 'Skittles Fruits', 'Skittles', '5000159021692', 'https://fr.openfoodfacts.org/produit/5000159021692/skittles-fruits', 'D'),
(5, 'Maoam', 'Haribo', '42075622', 'https://fr.openfoodfacts.org/produit/42075622/maoam-stripes', 'D'),
(6, 'Rotella', 'Haribo', '3103220009635', 'https://fr.openfoodfacts.org/produit/3103220009635/rotella-l-original-haribo', 'D'),
(7, 'L\'ours d\'or', 'Haribo', '3103220030431', 'https://fr.openfoodfacts.org/produit/3103220030431/l-ours-d-or-haribo', 'D'),
(8, 'Schokobons', 'Kinder', '8000500269206', 'https://fr.openfoodfacts.org/produit/8000500269206/kinder-schokobons', 'D'),
(9, 'Werther\'s Original', 'Storck', '4014400907636', 'https://fr.openfoodfacts.org/produit/4014400907636/werther-s-original-bonbons-classiques-sans-sucre-storck', 'D'),
(10, 'Happy Cola', 'Haribo', '3103220009123', 'https://fr.openfoodfacts.org/produit/3103220009123/original-happy-cola-haribo', 'D');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
