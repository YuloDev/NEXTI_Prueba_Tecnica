-- Inicializar base de datos y tabla
IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'EventosDb')
BEGIN
    CREATE DATABASE [EventosDb];
END;

USE [EventosDb];

IF OBJECT_ID('Eventos', 'U') IS NULL
BEGIN
    CREATE TABLE Eventos (
        Id INT PRIMARY KEY IDENTITY(1,1),
        FechaEvento DATETIME NOT NULL,
        LugarEvento NVARCHAR(255) NOT NULL,
        DescripcionEvento NVARCHAR(MAX),
        Precio DECIMAL(18, 2) NOT NULL
    );
END;

-- Poblar la tabla con 20 eventos específicos
INSERT INTO Eventos (FechaEvento, LugarEvento, DescripcionEvento, Precio) VALUES
('2024-08-15 19:00:00', 'Estadio Nacional', 'Concierto de rock', 45.00),
('2024-08-20 20:00:00', 'Teatro Sucre', 'Obra de teatro clásico', 35.00),
('2024-09-05 21:00:00', 'Centro de Convenciones', 'Conferencia de tecnología', 55.00),
('2024-09-10 18:30:00', 'Estadio Olímpico', 'Partido de fútbol', 40.00),
('2024-09-15 19:00:00', 'Teatro Nacional', 'Espectáculo de danza', 50.00),
('2024-10-01 20:00:00', 'Museo del Oro', 'Exposición de arte contemporáneo', 30.00),
('2024-10-10 21:00:00', 'Estadio Metropolitano', 'Concierto de música clásica', 60.00),
('2024-10-20 18:00:00', 'Centro Cultural', 'Festival de cine', 25.00),
('2024-11-01 19:00:00', 'Auditorio del Parque', 'Feria gastronómica', 40.00),
('2024-11-10 20:00:00', 'Centro de Exposiciones', 'Exposición de moda', 50.00),
('2024-11-15 21:00:00', 'Estadio de Atletismo', 'Competencia internacional de atletismo', 35.00),
('2024-12-01 19:00:00', 'Teatro de la Ciudad', 'Concierto de jazz', 45.00),
('2024-12-10 20:00:00', 'Centro de Congresos', 'Seminario de negocios', 70.00),
('2024-12-15 18:30:00', 'Estadio de Rugby', 'Partido de rugby', 55.00),
('2025-01-05 19:00:00', 'Centro Histórico', 'Feria de antigüedades', 30.00),
('2025-01-10 20:00:00', 'Auditorio Municipal', 'Concierto de pop', 50.00),
('2025-02-01 21:00:00', 'Estadio Deportivo', 'Competencia de deportes extremos', 60.00),
('2025-02-15 18:00:00', 'Centro de Arte', 'Exposición de fotografía', 25.00),
('2025-03-01 19:00:00', 'Teatro Moderno', 'Musical de Broadway', 70.00),
('2025-03-10 20:00:00', 'Centro de Arte y Cultura', 'Festival de música folk', 40.00);
