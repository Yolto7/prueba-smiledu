CREATE DATABASE students;

USE students;

CREATE TABLE grado (
	id BIGINT NOT NULL AUTO_INCREMENT UNIQUE PRIMARY KEY,
  desc_grado VARCHAR(30) NOT NULL,
  nivel VARCHAR(3) NOT NULL
);

CREATE TABLE cronograma (
	id BIGINT NOT NULL AUTO_INCREMENT UNIQUE PRIMARY KEY,
  year INTEGER NOT NULL
);

CREATE TABLE persona (
	id BIGINT NOT NULL AUTO_INCREMENT UNIQUE PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  ape_paterno VARCHAR(50) NOT NULL,
  ape_materno VARCHAR(50) NOT NULL,
  id_grado BIGINT NOT NULL,
  fecha_naci DATE NOT NULL,
  foto_ruta VARCHAR(255) NOT NULL,
  CONSTRAINT fk_grado_persona FOREIGN KEY (id_grado) REFERENCES grado(id)
);

CREATE TABLE detalle_cronograma (
	id BIGINT NOT NULL AUTO_INCREMENT UNIQUE PRIMARY KEY,
  id_cronograma BIGINT NOT NULL,
  desc_pension VARCHAR(50) NOT NULL,
  monto FLOAT NOT NULL,
  fecha_venci DATE NOT NULL,
  id_grado BIGINT NOT NULL,
  CONSTRAINT fk_grado_detalle_cronograma FOREIGN KEY (id_grado) REFERENCES grado(id),
  CONSTRAINT fk_cronograma_detalle_cronograma FOREIGN KEY (id_cronograma) REFERENCES cronograma(id)
);

CREATE TABLE movimiento (
	id BIGINT NOT NULL AUTO_INCREMENT UNIQUE PRIMARY KEY,
  tipo VARCHAR(20) NOT NULL,
  monto FLOAT DEFAULT NULL,
  estado VARCHAR(20) NOT NULL,
  fecha_pago TIMESTAMP DEFAULT NULL,
  id_persona BIGINT NOT NULL,
  id_detalle_cronograma BIGINT NOT NULL,
  CONSTRAINT fk_persona_movimiento FOREIGN KEY (id_persona) REFERENCES persona(id),
  CONSTRAINT fk_detalle_cronograma_movimiento FOREIGN KEY (id_detalle_cronograma) REFERENCES detalle_cronograma(id)
);

/* INSERT VALUES IN TABLE grados*/ 
INSERT INTO grado (desc_grado, nivel) VALUES ("2 años", "INI");
INSERT INTO grado (desc_grado, nivel) VALUES ("3 años", "INI");
INSERT INTO grado (desc_grado, nivel) VALUES ("4 años", "INI");
INSERT INTO grado (desc_grado, nivel) VALUES ("5 años", "INI");
INSERT INTO grado (desc_grado, nivel) VALUES ("Primero", "PRI");
INSERT INTO grado (desc_grado, nivel) VALUES ("Segundo", "PRI");
INSERT INTO grado (desc_grado, nivel) VALUES ("Tercero", "PRI");
INSERT INTO grado (desc_grado, nivel) VALUES ("Cuarto", "PRI");
INSERT INTO grado (desc_grado, nivel) VALUES ("Quinto", "PRI");
INSERT INTO grado (desc_grado, nivel) VALUES ("Sexto", "PRI");
INSERT INTO grado (desc_grado, nivel) VALUES ("Primero", "SEC");
INSERT INTO grado (desc_grado, nivel) VALUES ("Segundo", "SEC");
INSERT INTO grado (desc_grado, nivel) VALUES ("Tercero", "SEC");
INSERT INTO grado (desc_grado, nivel) VALUES ("Cuarto", "SEC");
INSERT INTO grado (desc_grado, nivel) VALUES ("Quinto", "SEC");

/* INSERT VALUES IN TABLE cronograma */
INSERT INTO cronograma (year) VALUES (2022);
INSERT INTO cronograma (year) VALUES (2023);

/* INSERT VALUES IN TABLE detalle_cronograma the fourth year of initial and first year of high school*/
INSERT INTO detalle_cronograma (id_cronograma, desc_pension, monto, fecha_venci, id_grado) VALUES (1, "marzo", 300, "2022-03-30", 3);
INSERT INTO detalle_cronograma (id_cronograma, desc_pension, monto, fecha_venci, id_grado) VALUES (1, "abril", 300, "2022-04-30", 3);
INSERT INTO detalle_cronograma (id_cronograma, desc_pension, monto, fecha_venci, id_grado) VALUES (1, "mayo", 300, "2022-05-30", 3);
INSERT INTO detalle_cronograma (id_cronograma, desc_pension, monto, fecha_venci, id_grado) VALUES (1, "junio", 300, "2022-06-30", 3);
INSERT INTO detalle_cronograma (id_cronograma, desc_pension, monto, fecha_venci, id_grado) VALUES (1, "julio", 300, "2022-07-30", 3);
INSERT INTO detalle_cronograma (id_cronograma, desc_pension, monto, fecha_venci, id_grado) VALUES (1, "agosto", 300, "2022-08-30", 3);
INSERT INTO detalle_cronograma (id_cronograma, desc_pension, monto, fecha_venci, id_grado) VALUES (1, "septiembre", 300, "2022-09-30", 3);
INSERT INTO detalle_cronograma (id_cronograma, desc_pension, monto, fecha_venci, id_grado) VALUES (1, "octubre", 300, "2022-10-30", 3);
INSERT INTO detalle_cronograma (id_cronograma, desc_pension, monto, fecha_venci, id_grado) VALUES (1, "noviembre", 300, "2022-11-30", 3);
INSERT INTO detalle_cronograma (id_cronograma, desc_pension, monto, fecha_venci, id_grado) VALUES (1, "diciembre", 300, "2022-12-30", 3);
INSERT INTO detalle_cronograma (id_cronograma, desc_pension, monto, fecha_venci, id_grado) VALUES (1, "marzo", 540, "2022-03-30", 11);
INSERT INTO detalle_cronograma (id_cronograma, desc_pension, monto, fecha_venci, id_grado) VALUES (1, "abril", 540, "2022-04-30", 11);
INSERT INTO detalle_cronograma (id_cronograma, desc_pension, monto, fecha_venci, id_grado) VALUES (1, "mayo", 540, "2022-05-30", 11);
INSERT INTO detalle_cronograma (id_cronograma, desc_pension, monto, fecha_venci, id_grado) VALUES (1, "junio", 540, "2022-06-30", 11);
INSERT INTO detalle_cronograma (id_cronograma, desc_pension, monto, fecha_venci, id_grado) VALUES (1, "julio", 540, "2022-07-30", 11);
INSERT INTO detalle_cronograma (id_cronograma, desc_pension, monto, fecha_venci, id_grado) VALUES (1, "agosto", 540, "2022-08-30", 11);
INSERT INTO detalle_cronograma (id_cronograma, desc_pension, monto, fecha_venci, id_grado) VALUES (1, "septiembre", 540, "2022-09-30", 11);
INSERT INTO detalle_cronograma (id_cronograma, desc_pension, monto, fecha_venci, id_grado) VALUES (1, "octubre", 540, "2022-10-30", 11);
INSERT INTO detalle_cronograma (id_cronograma, desc_pension, monto, fecha_venci, id_grado) VALUES (1, "noviembre", 540, "2022-11-30", 11);
INSERT INTO detalle_cronograma (id_cronograma, desc_pension, monto, fecha_venci, id_grado) VALUES (1, "diciembre", 540, "2022-12-30", 11);


/* CREATE STORED PROCEDURE TO register student*/
DELIMITER //
create procedure register(
	in _nombre VARCHAR(50), 
  in _ape_paterno VARCHAR(50), 
  in _ape_materno VARCHAR(50), 
  in _id_grado BIGINT,
	in _fecha_naci DATE,
  in _foto_ruta VARCHAR(255)
)
BEGIN
	DECLARE last_id INT;
	DECLARE cursor_ID INT;
	DECLARE done INT DEFAULT FALSE;
	DECLARE iterator CURSOR FOR SELECT id FROM detalle_cronograma WHERE id_grado = _id_grado;
	DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;
    
    INSERT INTO persona(nombre, ape_paterno, ape_materno, id_grado, fecha_naci, foto_ruta) 
    VALUES (_nombre, _ape_paterno, _ape_materno, _id_grado, _fecha_naci, _foto_ruta);
    
    SET last_id = LAST_INSERT_ID();
    
	OPEN iterator;
    loop_label:LOOP
		FETCH iterator INTO cursor_ID;
        
		IF done THEN
		  LEAVE loop_label;
		END IF;
        
		INSERT INTO movimiento (tipo, estado, id_persona, id_detalle_cronograma) 
        VALUES ('INGRESO', 'POR PAGAR', last_id, cursor_ID);
    END LOOP;
    CLOSE iterator;
END //

/* CREATE STORED PROCEDURE TO delete student */
DELIMITER //
create procedure remove(
	in _id INT
)
BEGIN
  DELETE FROM movimiento WHERE id_persona = _id;
  DELETE FROM persona WHERE id = _id;
END //

/* QUERY */ 
SELECT CONCAT(p.nombre,' ',p.ape_paterno,' ', p.ape_materno) AS estudiante, CONCAT(g.desc_grado,' ',g.nivel) AS grado_nivel,
d.monto AS pension, m.monto AS monto, d.fecha_venci, m.fecha_pago, c.year FROM persona AS p JOIN grado AS g On g.id = p.id_grado 
JOIN movimiento AS m ON m.id_persona = p.id JOIN detalle_cronograma AS d ON d.id = m.id_detalle_cronograma JOIN cronograma AS c ON 
c.id = d.id_cronograma ORDER BY p.nombre, d.fecha_venci