-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 14.12.2020 klo 14:09
-- Palvelimen versio: 10.4.11-MariaDB
-- PHP Version: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `myynti_ilmoitukset`
--
CREATE DATABASE IF NOT EXISTS `myynti_ilmoitukset` DEFAULT CHARACTER SET utf8 COLLATE utf8_swedish_ci;
USE `myynti_ilmoitukset`;

-- --------------------------------------------------------

--
-- Rakenne taululle `ilmoitukset`
--

CREATE TABLE `ilmoitukset` (
  `id` int(11) NOT NULL,
  `nimi` text COLLATE utf8_swedish_ci NOT NULL,
  `hinta` float NOT NULL,
  `tiedot` text COLLATE utf8_swedish_ci NOT NULL,
  `ilmoittaja` text COLLATE utf8_swedish_ci NOT NULL,
  `email` text COLLATE utf8_swedish_ci NOT NULL,
  `puh` text COLLATE utf8_swedish_ci NOT NULL,
  `aikaleima` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Vedos taulusta `ilmoitukset`
--

INSERT INTO `ilmoitukset` (`id`, `nimi`, `hinta`, `tiedot`, `ilmoittaja`, `email`, `puh`, `aikaleima`) VALUES
(9, 'Kuulokkeet', 25, 'Kerran käytetyt JBL kuulokkeet.', 'Jari', 'jari@gmail.com', '040345667', '2020-12-10 14:58:32'),
(10, 'Playstation 5', 1000, 'Avaamaton PS5. Ennakkotilattu Verkkokauppa.comista. Kuitit tallessa.', 'Matti', 'matti.meikalainen@gmail.com', '050 123345', '2020-12-10 15:00:12'),
(11, 'Talvirenkaat', 200, 'Käyttämättömät Nokian nastarenkaat.', 'Jaakko', 'jaakko@gmail.com', '040987654', '2020-12-10 15:01:34'),
(12, 'Muumimuki', 30, 'Käyttämätön Muumi-Pappa muki.', 'Maija', 'maijameikalainen@gmail.com', '050987654', '2020-12-10 15:03:11');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ilmoitukset`
--
ALTER TABLE `ilmoitukset`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ilmoitukset`
--
ALTER TABLE `ilmoitukset`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
