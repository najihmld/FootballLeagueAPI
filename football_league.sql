-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 06 Jun 2020 pada 06.25
-- Versi server: 10.4.11-MariaDB
-- Versi PHP: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `football_league`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `leaguestanding`
--

CREATE TABLE `leaguestanding` (
  `id` int(10) NOT NULL,
  `clubname` varchar(100) NOT NULL,
  `points` int(10) NOT NULL,
  `standing` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `leaguestanding`
--

INSERT INTO `leaguestanding` (`id`, `clubname`, `points`, `standing`) VALUES
(56, 'Arsenal', 0, 4),
(57, 'Chelsea', 3, 2),
(58, 'Man Utd', 7, 1),
(59, 'Juventus', 0, 4),
(60, 'Real Madrid', 1, 3);

-- --------------------------------------------------------

--
-- Struktur dari tabel `recordgame`
--

CREATE TABLE `recordgame` (
  `id` int(10) NOT NULL,
  `clubhomename` varchar(100) NOT NULL,
  `clubawayname` varchar(100) NOT NULL,
  `score` varchar(10) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `recordgame`
--

INSERT INTO `recordgame` (`id`, `clubhomename`, `clubawayname`, `score`, `created_at`) VALUES
(138, 'Arsenal', 'Chelsea', '2:3', '2020-06-06 03:53:25'),
(139, 'Man Utd', 'Chelsea', '2:1', '2020-06-06 03:53:58'),
(140, 'Man Utd', 'Juventus', '2:1', '2020-06-06 03:54:23'),
(141, 'Man Utd', 'Real Madrid', '2:2', '2020-06-06 03:54:49');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `leaguestanding`
--
ALTER TABLE `leaguestanding`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `recordgame`
--
ALTER TABLE `recordgame`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `leaguestanding`
--
ALTER TABLE `leaguestanding`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT untuk tabel `recordgame`
--
ALTER TABLE `recordgame`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=142;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
