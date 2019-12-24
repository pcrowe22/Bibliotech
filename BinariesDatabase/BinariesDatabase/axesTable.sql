CREATE TABLE [dbo].[axesTable]
(
	[name] TEXT NOT NULL PRIMARY KEY, 
    [ID1] TEXT NULL, 
    [ID2] TEXT NULL 
)
GO
INSERT INTO axesTable (name, ID1, ID2) VALUES ("Light -- Dark ++ Light -- Dark", "Light -- Dark", "Light -- Dark")
SELECT * FROM axesTable
FOR JSON AUTO
