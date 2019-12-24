CREATE TABLE [dbo].[axesChildrenTable]
(
	[axesName] TEXT NOT NULL PRIMARY KEY, 
    [child1] TEXT NULL, 
    [child2] TEXT NULL, 
    [child3] TEXT NULL, 
    [child4] TEXT NULL, 
    [child5] TEXT NULL, 
    [child6] TEXT NULL, 
    CONSTRAINT [FK_axesChildrenTable_axesTable] FOREIGN KEY (axesName) REFERENCES axesChildrenTable(axesName) 
)
