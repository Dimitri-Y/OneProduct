-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: products
-- ------------------------------------------------------
-- Server version	5.5.5-10.6.18-MariaDB-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Meat'),(2,'Milk'),(3,'Fruits');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `imageUrl` varchar(1000) DEFAULT NULL,
  `categoryId` int(11) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `categoryId` (`categoryId`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'chicken wing 1','chicken wing',199.00,'https://www.google.com/imgres?q=checken%20wing&imgurl=https%3A%2F%2Fwww.allrecipes.com%2Fthmb%2FAtViolcfVtInHgq_mRtv4tPZASQ%3D%2F1500x0%2Ffilters%3Ano_upscale()%3Amax_bytes(150000)%3Astrip_icc()%2FALR-187822-baked-chicken-wings-4x3-5c7b4624c8554f3da5aabb7d3a91a209.jpg&imgrefurl=https%3A%2F%2Fwww.allrecipes.com%2Frecipe%2F187822%2Fbaked-chicken-wings%2F&docid=t2fYqPA-Fx-https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.centralmeats.com%2Fregular-chicken-wing&psig=AOvVaw08KaXz82CvhGXM-5083mzQ&ust=1720612054996000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMiA4d7xmYcDFQAAAAAdAAAAABAE',1,100),(2,'cheese','kg cheese',150.00,'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.healthline.com%2Fnutrition%2Fhealthiest-cheese&psig=AOvVaw2sbAnRRd_loF2r60G0qRBC&ust=1720612025963000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNDFybnxmYcDFQAAAAAdAAAAABAE',2,200),(3,'lemon','lemon',40.00,'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.healthline.com%2Fnutrition%2F6-lemon-health-benefits&psig=AOvVaw1GzUOVsHBTrLemT-q9FiuN&ust=1720611985650000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCx_KXxmYcDFQAAAAAdAAAAABAE',3,150),(5,'strawberry','strawberry',100.88,'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FStrawberry&psig=AOvVaw00xsaW5MvouOfYDEELD21v&ust=1720615710822000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMjCn5n_mYcDFQAAAAAdAAAAABAE',3,20);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-09 16:12:43
