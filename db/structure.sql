DROP DATABASE IF EXISTS disney_db;
CREATE DATABASE disney_db;
USE disney_db;
DROP TABLE IF EXIST `generos`;
CREATE TABLE `generos`(
  `id` INT(11) NOT NULL UNIQUE AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `imagen` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8 COLLATE = utf8_unicode_ci;
DROP TABLE IF EXISTS `peliculas`;
CREATE TABLE `peliculas`(
  `id` INT(11) NOT NULL UNIQUE AUTO_INCREMENT,
  `imagen` varchar(100) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `fechaCreacion` DATE NOT NULL,
  `calificacion` DECIMAL(5) NOT NULL,
  `genero_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `genero_id_foreign` (`genero_id`),
  CONSTRAINT `genero_id_foreign` FOREIGN KEY (`genero_id`) REFERENCES `generos` (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8 COLLATE = utf8_unicode_ci;
DROP TABLE IF EXISTS `personajes`;
CREATE TABLE `personajes`(
  `id` INT(11) NOT NULL UNIQUE AUTO_INCREMENT,
  `imagen` varchar(100),
  `nombre` varchar(100) NOT NULL,
  `edad` INT(11),
  `peso` INT(11),
  `historia` TEXT,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8 COLLATE = utf8_unicode_ci;
DROP TABLE IF EXISTS `peliculas_personajes`;
CREATE TABLE `peliculas_personajes`(
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `peliculas_id` INT(11) NOT NULL,
  `personajes_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `peliculas_id_foreign` (`peliculas_id`),
  CONSTRAINT `peliculas_id_foreign` FOREIGN KEY (`peliculas_id`) REFERENCES `peliculas` (`id`),
  KEY `personajes_id_foreign` (`personajes_id`),
  CONSTRAINT `personajes_id_foreign` FOREIGN KEY (`personajes_id`) REFERENCES `personajes` (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8 COLLATE = utf8_unicode_ci;