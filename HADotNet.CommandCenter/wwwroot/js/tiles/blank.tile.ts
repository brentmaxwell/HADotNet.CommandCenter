﻿/// <reference path="tile.ts" />

class BlankTile extends Tile
{
    constructor(name: string, conn: signalR.HubConnection)
    {
        super(name, conn, false);
    }
}