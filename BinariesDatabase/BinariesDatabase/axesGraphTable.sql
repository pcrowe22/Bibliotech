CREATE TABLE [dbo].[axesGraphTable]
(
	[axesName] TEXT NOT NULL PRIMARY KEY, 
    [graph0] INT NOT NULL, 
    [graph1] INT NOT NULL, 
    [graph2] INT NOT NULL, 
    [graph3] INT NOT NULL, 
    [graph4] INT NOT NULL, 
    [graph5] INT NOT NULL, 
    CONSTRAINT [FK_axesGraphTable_axesTable] FOREIGN KEY (axesName) REFERENCES axesGraphTable(axesName)
)
