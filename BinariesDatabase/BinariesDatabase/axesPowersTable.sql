CREATE TABLE [dbo].[axesPowersTable]
(
	[axesName] TEXT NOT NULL PRIMARY KEY, 
    [powerName] TEXT NOT NULL, 
    [powerBio] TEXT NOT NULL, 
    [powerSplittable] TEXT NOT NULL, 
    [powerHiddenContr] TEXT NOT NULL, 
    [powers4] TEXT NOT NULL, 
    [powers5] TEXT NOT NULL, 
    [powers6] TEXT NOT NULL, 
    [powers7] TEXT NOT NULL, 
    CONSTRAINT [FK_axesPowersTable_axesTable] FOREIGN KEY (axesName) REFERENCES axesPowersTable(axesName)
)
